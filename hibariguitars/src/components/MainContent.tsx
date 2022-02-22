import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { applySort, applyFilters } from 'utils/utils';
import GuitarList from 'components/GuitarList';
import Checkbox from './Filters/Checkbox';
import { brands, types, sellers } from 'assets/data/filterCategories';
import Dropdown from './Filters/Dropdown';

interface FilterProps {
    brands: string[],
    sellers: string[],
    types: string[],
}

const fetchData = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}`)
    return data;
}

function MainContent() {
    const [ page, setPage ] = useState(0);
    const { data, status, isFetching } = useQuery(["guitars"], () => fetchData(), {
        staleTime: 2000000,
        cacheTime: 2000000 
    })
    const [filterList, setFilterList] = useState<FilterProps>({
        brands: [],
        sellers: [],
        types: [],
    })
    const [sortOrder, setSortOrder] = useState("")

    if (status === 'success') {
        console.log("Success!")
        console.log(sortOrder)
    }

    const toggleFilter = (value: string, category: string) => {
        const newList: FilterProps = { ...filterList }
        const filterArr = newList[category as keyof FilterProps]
        if (filterArr.includes(value)) {
            const indexVal = filterArr.indexOf(value);
            filterArr.splice(indexVal, 1);
        } else {
            filterArr.push(value);
        }
        console.log(newList)
        setFilterList(newList)
    }

    const prevPage = () => {
        if (page !== 0) {
            setPage(page - 1)
        }
    }

    const nextPage = () => {
        setPage(page + 1)
    }

  return (
    <>
        {status === 'success' && <div>
            <Dropdown sortBy = {setSortOrder} />
            <Checkbox data = {brands} type = "brands" toggleFilter = {toggleFilter} />
            <Checkbox data = {types} type = "types" toggleFilter = {toggleFilter} />
            <Checkbox data = {sellers} type = "sellers" toggleFilter = {toggleFilter} />
            <GuitarList page = {page} data = {applySort(applyFilters(data, filterList), sortOrder)} />
            <div>
                <button onClick = {prevPage}>Previous</button>
                <button onClick = {nextPage}>Next</button>
            </div>
        </div>}
    </>
  )
}

export default MainContent