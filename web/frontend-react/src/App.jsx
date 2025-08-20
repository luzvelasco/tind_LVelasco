// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import NuevaFloreria from './pages/NuevaFloreria'
import Fotos from './pages/Fotos'
// import Boton from './components/Boton'
// import CampoTexto from './components/CampoTexto'

function App() {


  return (
    <>
      {/* <h1>Bienvenides</h1>
      <p>Lista de florerias</p>
      <Boton/>
      <br/><br/>
      <CampoTexto/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/contacto' element = {<Contact/>} />
          <Route path='/nueva-floreria' element = {<NuevaFloreria/>} />
          <Route path='/subir-fotos' element = {<Fotos/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
