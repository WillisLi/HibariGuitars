import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { applySort, applyFilters } from 'utils/utils';
import GuitarList from 'components/GuitarList';
import Checkbox from './Filters/Checkbox';
import { brands, types, sellers } from 'assets/data/filterCategories';
import Dropdown from './Filters/Dropdown';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';

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
    const { data, status } = useQuery(["guitars"], () => fetchData(), {
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

    useEffect(() => {
        setPage(0)
    }, [filterList, sortOrder])

  return (
    <>
        {status === 'success' && <div className = "flex flex-row justify-center">
            <div className = "flex flex-col space-y-6">
                <Checkbox data = {brands} type = "brands" toggleFilter = {toggleFilter} />
                <Checkbox data = {types} type = "types" toggleFilter = {toggleFilter} />
                <Checkbox data = {sellers} type = "sellers" toggleFilter = {toggleFilter} />
            </div>
            <div className = "w-3/4 flex flex-col pl-3">
                <div className = "flex flex-row justify-between w-full mb-4 px-3">
                    <Dropdown sortBy = {setSortOrder} />
                    <p className = "select-none">{applyFilters(data, filterList).length} Results</p>
                </div>
                <GuitarList page = {page} data = {applySort(applyFilters(data, filterList), sortOrder)} />
                <div className = "self-end space-x-10 px-5">
                    <IconContext.Provider value = {{  size: '3rem' }}>
                        {page !== 0 && <button onClick = {prevPage} className = "hover:animate-pulse"><HiOutlineArrowNarrowLeft /></button>}
                        {applyFilters(data, filterList).slice(page * 15, page * 15 + 15).length === 15 && <button onClick = {nextPage} className = "hover:animate-pulse"><HiOutlineArrowNarrowRight /></button>}
                    </IconContext.Provider>
                </div>
            </div>
        </div>}
    </>
  )
}

export default MainContent