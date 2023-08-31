import { useState } from 'react'

import './App.css'
import './assets/font-awesome/css/font-awesome.css'
import Rotas from './Routes'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


function App() {



  return (
    <>
      <Header />
      <Rotas />
      <Footer/>
    </>
  )
}

export default App
