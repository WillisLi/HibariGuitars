import React from 'react'
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className = "flex flex-col items-center shadow-top py-6 mt-10 shadow-slate-700 text-neutral-700">
      <p>
          This project is a non-profit, fan-made project used for informational and educational purposes only.
      </p>
      <p>
          All products and listings belong to their respective companies and I do not earn any money from this.
      </p>
      <hr className = "bg-slate-600 w-1/3 h-[2px] my-3 opacity-80"/>
      <p className = "flex flex-col items-center">My Github: <a href = "https://github.com/WillisLi" target="_blank" rel="noopener noreferrer">{<FaGithub style = {{color: "black", fontSize: '2.5em'}}/>}</a></p>
      <p>&copy; {new Date().getFullYear()} HibariGuitars | All rights reserved.</p>
    </footer>
  )
}

export default Footer