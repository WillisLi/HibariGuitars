import React from 'react';
import logo from 'assets/images/logo.png';

function Header() {
  return (
    <header className = "shadow-lg shadow-slate-300 pl-10 select-none flex flex-row mb-10">
      <div className = "flex flex-row items-center p-2 drop-shadow-md shadow-black">
        <p className = "text-2xl font-bold leading-5 ">Hibari<br/> Guitars</p>
        <img className = "w-8 -scale-x-100 " src = {logo} alt = "hibari-logo" />
      </div>
    </header>
  )
}

export default Header