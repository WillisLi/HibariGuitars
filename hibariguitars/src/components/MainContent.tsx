import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import GuitarList from 'components/GuitarList';

type Filter = {
    name: string;
    group:
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
    const [filterList, setFilterList] = useState([])

    if (status === 'success') {
        console.log(data)
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
            <GuitarList page = {page} data = {data} />
            <div>
                <button onClick = {prevPage}>Previous</button>
                <button onClick = {nextPage}>Next</button>
            </div>
        </div>}
    </>
  )
}

export default MainContent