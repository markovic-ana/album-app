import React from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import BottomHeader from './components/header/bottom-header/BottomHeader'
import TopHeader from './components/header/top-header/TopHeader'
import PhotoDetails from './pages/photoDetailsPage/PhotoDetails'

const PhotoLayout = () => {
  return (
    <div>
      <div className="photoLayoutContainer">
        <TopHeader />
        <BottomHeader title="photography is the art of making memories" />
        <PhotoDetails />
      </div>
      <Footer />
    </div>
  )
}

export default PhotoLayout
