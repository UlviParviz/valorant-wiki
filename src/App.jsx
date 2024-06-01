import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import AgentDetail from './pages/AgentDetail'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/agents/:uuid' element={<AgentDetail/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App