import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import cme from 'assets/cme_logo.png';
import sweetwater from 'assets/sweetwater_logo.webp';

interface GuitarProps {
    name: string;
    website: string;
    type: string;
    price: string;
    link: string;
    image: string;
}

const fetchData = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}`)
    return data;
}

function GuitarPage() {
    const { data, status, isFetching } = useQuery(["guitars"], () => fetchData(), {
        staleTime: 2000000,
        cacheTime: 2000000 
    })
    const [ascending, setAscending] = useState(false);

    if (status === 'success') {
        console.log(data)
    }



    return (
        <div className = "flex flex-wrap justify-evenly w-2/3">
            {status === 'success' && data.splice(0, 20).map((guitar: GuitarProps, index: number) => (
                <div>
                    <img src = {guitar.image} alt = "guitarImg" />
                </div>
            ))}
        </div>
    )
}

export default GuitarPage