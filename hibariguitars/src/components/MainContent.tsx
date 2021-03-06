import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { applySort, applyFilters, applySearch } from 'utils/utils';
import GuitarList from 'components/GuitarList';
import Checkbox from './Filters/Checkbox';
import { brands, types, sellers } from 'assets/data/filterCategories';
import Dropdown from './Filters/Dropdown';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import SearchBar from './Filters/SearchBar';
import Loading from './Loading';

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
    const [searchTerm, setSearchTerm] = useState("")

    const toggleFilter = (value: string, category: string) => {
        const newList: FilterProps = { ...filterList }
        const filterArr = newList[category as keyof FilterProps]
        if (filterArr.includes(value)) {
            const indexVal = filterArr.indexOf(value);
            filterArr.splice(indexVal, 1);
        } else {
            filterArr.push(value);
        }
        setFilterList(newList)
    }

    const filterSearch = (event: any) => {
        event.preventDefault();
        const input = event.target.value;
        setSearchTerm(input);
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
    }, [filterList, sortOrder, searchTerm])

  return (
    <>
        {status !== 'success' && isFetching === true ? 
            <Loading />
        : <div className = "flex flex-row justify-center">
            <div className = "flex flex-col space-y-6">
                <Checkbox data = {brands} type = "brands" toggleFilter = {toggleFilter} />
                <Checkbox data = {types} type = "types" toggleFilter = {toggleFilter} />
                <Checkbox data = {sellers} type = "sellers" toggleFilter = {toggleFilter} />
            </div>
            <div className = "w-3/4 flex flex-col pl-3">
                <div className = "flex flex-row items-center justify-between w-full mb-4 px-3">
                    <div className = "flex flex-row space-x-3">
                        <Dropdown sortBy = {setSortOrder} />
                        <SearchBar searchTerm = {searchTerm} filterList = {filterSearch}/>
                    </div>
                    <div className = "self-end space-x-3 flex flex-row items-center px-5">
                        <IconContext.Provider value = {{  color: 'gray', size: '2.8rem' }}>
                            {page !== 0 && <button onClick = {prevPage} className = "hover:animate-pulse"><HiOutlineArrowNarrowLeft /></button>}
                            <p className = "select-none font-semibold text-slate-600 animate">{applySearch(applyFilters(data, filterList), searchTerm).length} Results</p>
                            {applySearch(applyFilters(data, filterList), searchTerm).slice(page * 15, page * 15 + 15).length === 15 && <button onClick = {nextPage} className = "hover:animate-pulse"><HiOutlineArrowNarrowRight /></button>}
                        </IconContext.Provider>
                    </div>
                </div>
                <GuitarList page = {page} data = {applySort(applySearch(applyFilters(data, filterList), searchTerm), sortOrder)} />
                <div className = "self-end space-x-10 px-5">
                    <IconContext.Provider value = {{  color: 'gray', size: '2.8rem' }}>
                        {page !== 0 && <button onClick = {prevPage} className = "hover:animate-pulse"><HiOutlineArrowNarrowLeft /></button>}
                        {applySearch(applyFilters(data, filterList), searchTerm).slice(page * 15, page * 15 + 15).length === 15 && <button onClick = {nextPage} className = "hover:animate-pulse"><HiOutlineArrowNarrowRight /></button>}
                    </IconContext.Provider>
                </div>
            </div>
        </div>}
    </>
  )
}

export default MainContent