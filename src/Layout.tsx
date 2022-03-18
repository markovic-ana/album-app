import React from 'react'
import './App.css'
import BottomHeader from './components/header/bottom-header/BottomHeader'
import TopHeader from './components/header/top-header/TopHeader'

import AlbumDetailsPage from './pages/detailsPage/AlbumDetailsPage'

const Layout = () => {
  return (
    <div className="container">
      <TopHeader />
      <BottomHeader title="enjoy!" />
      <AlbumDetailsPage />
    </div>
  )
}

export default Layout
