import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { applyFilters } from 'utils/utils';
import GuitarList from 'components/GuitarList';
import Checkbox from './Filters/Checkbox';
import { brands, types, sellers } from 'assets/data/filterCategories';

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

    if (status === 'success') {
        console.log(data)
    }

    const toggleFilter = (value: string, category: string) => {
        const newList: FilterProps = { ...filterList }

        if (newList[category as keyof FilterProps].includes(value)) {
            const indexVal = newList[category as keyof FilterProps].indexOf(value);
            newList[category as keyof FilterProps].splice(indexVal, 1);
        } else {
            newList[category as keyof FilterProps].push(value);
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
            <Checkbox data = {brands} type = "brands" toggleFilter = {toggleFilter} />
            <GuitarList page = {page} data = {applyFilters(data, filterList)} />
            <div>
                <button onClick = {prevPage}>Previous</button>
                <button onClick = {nextPage}>Next</button>
            </div>
        </div>}
    </>
  )
}

export default MainContent