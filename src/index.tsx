import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import SimpleReactLightbox from 'simple-react-lightbox'
import PhotoLayout from './PhotoLayout'

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="albums/:id" element={<Layout />} />
          <Route path="photos/:id" element={<PhotoLayout />} />
        </Routes>
      </BrowserRouter>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
