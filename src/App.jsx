import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CartPage from './pages/CartPAge'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="main-container text-white h-screen ">

        {/* this should go in the protected routes */}
        {/* header */}

        <Header />

        <div className='content '>
          <Routes>
            <Route path="/" element={<HeroSection />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
