import React from 'react'
import './App.css'
import BottomHeader from './components/header/bottom-header/BottomHeader'
import TopHeader from './components/header/top-header/TopHeader'
import Footer from './components/footer/Footer'
import AlbumDetailsPage from './pages/detailsPage/AlbumDetailsPage'

const Layout = () => {
  return (
    <div>
      <div className="container">
        <TopHeader />
        <BottomHeader title="photography is the art of making memories" />
        <AlbumDetailsPage />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
