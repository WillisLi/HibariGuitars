import React from 'react';
import cme from 'assets/images/cme_logo.png';
import sweetwater from 'assets/images/sweetwater_logo.webp';

interface GuitarProps {
    name: string;
    website: string;
    type: string;
    price: string;
    link: string;
    image: string;
}

interface PageProps {
    page: number;
    data: any;
}

function GuitarList({ page, data }: PageProps) {
    return (
        <div className = "flex flex-wrap">
            {data.slice(page * 15, page * 15 + 15).map((guitar: GuitarProps, index: number) => (
                <div key = {index} className = "text-center flex flex-col items-center w-48 mx-4 mb-7 border shadow-cards shadow-slate-500 rounded-2xl hover:scale-105 transition-all group">
                    <div className = "w-full h-full relative shadow-xl shadow-slate-400 rounded-t-2xl rounded-b-3xl overflow-hidden">
                        <img className = "w-full" src = {guitar.image} alt = "guitarImg" />
                        <div className = "absolute bottom-0 py-2 bg-white bg-opacity-75 opacity-0 group-hover:animate-slideUp">
                            <a href = {guitar.link} className = "flex flex-col items-center" target="_blank" rel="noopener noreferrer"><img className = "w-2/3" src = {guitar.website === "sweetwater" ? sweetwater : cme} alt = "webLogo"/></a>
                        </div>
                    </div>
                    <div className = "flex flex-col items-center p-2 py-5 justify-between h-full">
                        <p className = "">{guitar.name}</p>
                        <p className = "font-bold">{guitar.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GuitarList