import React from 'react'
import './App.css'
import TopHeader from './components/header/top-header/TopHeader'
import BottomHeader from './components/header/bottom-header/BottomHeader'

function App() {
  return (
    <div className="container">
      <TopHeader />
      <BottomHeader />
    </div>
  )
}

export default App
