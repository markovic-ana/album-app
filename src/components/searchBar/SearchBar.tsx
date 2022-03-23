import React, { ChangeEvent, useState } from 'react'
import SearchBarstyles from './SearchBar.module.css'
import { VscSearch } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

interface Props {
  placeholder: string
  params: string
  data: any
}

interface FilteredDataDTO {
  filteredData: string[]
  title: string
  value: string
}

const SearchBar = ({ placeholder, data, params }: Props) => {
  const [filteredData, setFilteredData] = useState<FilteredDataDTO[]>([])

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const searchWord: string = e.target.value
    const newFilter = data.filter((value: FilteredDataDTO) => {
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
          {filteredData.slice(0, 10).map((value, id) => {
            return (
              <Link to={`/${params}/${id}`}>
                <div key={id} className={SearchBarstyles.dataItem}>
                  <p>{value.title}</p>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar
