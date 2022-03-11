import React from 'react'
import TopHeaderstyles from './TopHeader.module.css'

const TopHeader = () => {
  return (
    <div>
      <div className={TopHeaderstyles.header}>
        <h1>ALBUM</h1>
        <h1 className={TopHeaderstyles.titleEnd}>IST</h1>
      </div>
    </div>
  )
}

export default TopHeader
