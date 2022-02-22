import React from 'react'

interface DropDownProps {
  sortBy: any;
}

function Dropdown({ sortBy }: DropDownProps) {
  return (
    <div className = "border shadow-lg shadow-slate-300">
      <select name = "sort-guitars" className = "w-full p-1" id = "sort" onChange = {(event) => sortBy(event.target.value)}>
        <option value = "">- Sort By -</option>
        <option value = "low">Price - Low to High</option>
        <option value = "high">Price - High to Low</option>
        <option value = "alpha-low">Name: A - Z</option>
        <option value = "alpha-high">Name: Z - A</option>
      </select>
    </div>
  )
}

export default Dropdown