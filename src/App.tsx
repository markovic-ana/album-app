import React from 'react'
import './App.css'
import TopHeader from './components/header/top-header/TopHeader'
import BottomHeader from './components/header/bottom-header/BottomHeader'
import AlbumsList from './components/albumsList/AlbumsList'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <div className="container">
        <TopHeader />
        <BottomHeader title="discover the world around you" />
        <AlbumsList />
      </div>
      <Footer />
    </div>
  )
}

export default App
