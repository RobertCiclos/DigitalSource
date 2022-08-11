import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const Main = () => {
  return(
    <div 
      key="Principal">
      <Navbar />
      <Outlet />
      <Footer /> 
    </div>
  )
}

export default Main