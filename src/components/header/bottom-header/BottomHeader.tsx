import React from 'react'
import BottomHeaderstyles from './BottomHeader.module.css'

interface Props {
  title: string
}

const BottomHeader = ({ title }: Props) => {
  return (
    <div className={BottomHeaderstyles.header}>
      <h2>
        <span>{title}</span>
      </h2>
    </div>
  )
}

export default BottomHeader
