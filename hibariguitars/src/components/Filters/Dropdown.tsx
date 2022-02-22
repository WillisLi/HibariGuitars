import React from 'react'

interface DropDownProps {
  sortBy: any;
}

function Dropdown({ sortBy }: DropDownProps) {
  return (
    <div>
      <select name = "sort-guitars" id = "sort" onChange = {(event) => sortBy(event.target.value)}>
        <option value = "">- Sort By -</option>
        <option value = "low">Price - Low to High</option>
        <option value = "high">Price - Highest to Low</option>
      </select>
    </div>
  )
}

export default Dropdown