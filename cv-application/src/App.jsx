//import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './Navbar'

function App() {

  return (
    <>
      <Header />
      <div className='nav'> 
     <Navbar />
      </div>
      <Footer />
    </>
  )
}

export default App
