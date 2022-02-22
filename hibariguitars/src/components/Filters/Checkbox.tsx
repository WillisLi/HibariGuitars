import React from 'react'
import { lowerString } from 'utils/utils';
interface CheckboxProps {
    data: string[],
    type: string,
    toggleFilter: any,
}

function Checkbox({ data, type, toggleFilter }: CheckboxProps) {
  return (
    <div>
        <h2>{type}</h2>
        <form>
            {data.map((name: string) => (
                <div>
                    <input type = "checkbox" id = {name} name = {name} onClick = {() => toggleFilter(lowerString(name), type)} />
                    <label htmlFor = {name}>{name}</label>
                </div>
            ))}
        </form>
    </div>
  )
}

export default Checkbox