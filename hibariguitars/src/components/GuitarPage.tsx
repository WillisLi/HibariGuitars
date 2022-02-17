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
        <div className = "flex flex-wrap justify-evenly w-3/4">
            {status === 'success' && data.splice(0, 20).map((guitar: GuitarProps, index: number) => (
                <div className = "text-center flex flex-col items-center w-48 mr-2 mb-7 border shadow-cards shadow-slate-500 rounded-2xl hover:scale-105 transition-all group">
                    <div className = "w-full h-full relative shadow-xl shadow-slate-400 rounded-t-2xl rounded-b-3xl overflow-hidden">
                        <img className = "w-full" src = {guitar.image} alt = "guitarImg" />
                        <div className = "absolute bottom-0 py-2 bg-white bg-opacity-75 opacity-0 group-hover:animate-slideUp">
                            <a href = {guitar.link} className = "flex flex-col items-center" target="_blank" rel="noopener noreferrer"><img className = "w-2/3" src = {guitar.website === "sweetwater" ? sweetwater : cme} alt = "webLogo"/></a>
                        </div>
                    </div>
                    <div className = "flex flex-col items-center p-2 py-5 justify-between h-full">
                        <p className = "mb-1">{guitar.name}</p>
                        <p className = "font-bold">{guitar.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GuitarPage