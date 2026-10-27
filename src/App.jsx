import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Resume from './pages/Resume'
import Home from './pages/Home'
import Info from './pages/Info'
import Saved from './pages/Saved'
import View from './pages/View'
import Download from './pages/Download'
import Pnf from './pages/Pnf'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/info' element={<Info />} />
        <Route path='/saved' element={<Saved />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/downloads' element={<Download />} />
       

        <Route path='/*' element={<Pnf />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App