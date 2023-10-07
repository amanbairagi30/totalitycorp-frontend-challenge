import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

function App() {

  return (
    <>
      <div className="main-container text-white h-screen ">
        
        {/* this should go in the protected routes */}
        {/* header */}
        <Header />

        <div className='content border '>
          <HeroSection />
        </div>
      </div>
    </>
  )
}

export default App
