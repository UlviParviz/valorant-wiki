import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import AgentDetail from './pages/AgentDetail'
import Maps from './pages/Maps'
import MapDetail from './pages/MapDetail'
import Weapons from './pages/Weapons'
import WeaponDetail from './pages/WeaponDetail'
import ScrollToTop from './layouts/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/maps' element={<Maps/>}/>
      <Route path='/weapons' element={<Weapons/>}/>
      <Route path='/weapons/:uuid' element={<WeaponDetail/>}/>
      <Route path='/maps/:uuid' element={<MapDetail/>}/>
      <Route path='/agents/:uuid' element={<AgentDetail/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App