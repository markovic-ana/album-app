import React, { useState } from 'react'
import SearchBarstyles from './SearchBar.module.css'
import { VscSearch } from 'react-icons/vsc'

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([])

  const handleFilter = (e) => {
    const searchWord = e.target.value
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  return (
    <div className={SearchBarstyles.search}>
      <div className={SearchBarstyles.searchInputs}>
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <div className={SearchBarstyles.searchIcon}>
          <VscSearch />
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className={SearchBarstyles.dataResult}>
          {filteredData.slice(0, 10).map((value, index) => {
            return (
              <div key={index}>
                <a
                  className={SearchBarstyles.dataItem}
                  href="#?"
                  target="_blank"
                >
                  <p>{value.title}</p>
                </a>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar
