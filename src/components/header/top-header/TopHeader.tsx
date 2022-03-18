import React from 'react'
import TopHeaderstyles from './TopHeader.module.css'
import { Link } from 'react-router-dom'

const TopHeader = () => {
  return (
    <Link to="/">
      <div>
        <div className={TopHeaderstyles.header}>
          <h1>ALBUM</h1>
          <h1 className={TopHeaderstyles.titleEnd}>IST</h1>
        </div>
      </div>
    </Link>
  )
}

export default TopHeader
