import React from 'react'
import { lowerString } from 'utils/utils';
interface CheckboxProps {
    data: string[],
    type: string,
    toggleFilter: any,
}

function Checkbox({ data, type, toggleFilter }: CheckboxProps) {
  return (
    <div className = "border shadow-lg shadow-slate-400 p-3">
        <h2 className = "text-lg mb-2">{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
        <form>
            {data.map((name: string) => (
                <div>
                    <input type = "checkbox" id = {name} name = {name} onClick = {() => toggleFilter(lowerString(name), type)} />
                    <label htmlFor = {name} className = "px-1">{name}</label>
                </div>
            ))}
        </form>
    </div>
  )
}

export default Checkbox