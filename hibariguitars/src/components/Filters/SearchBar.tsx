import React from 'react'

interface SearchBarProps {
  searchTerm: string,
  filterList: any,
}

function SearchBar({ searchTerm, filterList}: SearchBarProps) {

  return (
    <form spellCheck = 'false' autoComplete = 'off'>
        <input
            type = "search"
            id = "search-guitars"
            className = "p-1 w-64"
            name = "search-guitars"
            placeholder = "Search for a guitar name..."
            value = {searchTerm}
            onChange = {filterList}
        />
    </form>
  )
}

export default SearchBar;