import React from 'react'

interface RadioProps {
    name: string,
    setFilter: any,
    index: number, 
}

function RadioButton({ name, setFilter, index }: RadioProps) {
  return (
    <div>
        <form>
            <label>{name}
                <input type = "radio" id = {} onClick = {setFilter(name, "radio")}/>
            </label>
        </form>
    </div>
  )
}

export default RadioButton