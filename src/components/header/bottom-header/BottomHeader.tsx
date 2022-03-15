import React from 'react'
import BottomHeaderstyles from './BottomHeader.module.css'

const BottomHeader = ({ title }) => {
  return (
    <div className={BottomHeaderstyles.header}>
      <h2>
        <span>{title}</span>
      </h2>
    </div>
  )
}

export default BottomHeader
