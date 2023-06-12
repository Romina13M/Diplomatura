import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import Header from './layout/Header';
import Nav from './layout/Nav';
import Footer from './layout/Footer';

import HomePage from './pages/HomePage';
import ContactosPage from './pages/ContactosPage';
import GaleriaPage from './pages/GaleriaPage';
import NosotrosPage from './pages/NosotrosPage'
import ServiciosPage from './pages/ServiciosPage'

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
      <Nav />
      <Routes>
       <Route path='/' element={<HomePage/>} />
       <Route path='/nosotros' element={<NosotrosPage/>} />
       <Route path='/servicios' element={<ServiciosPage/>} />
       <Route path='/galeria' element={<GaleriaPage/>} />
       <Route path='/contactos' element={<ContactosPage/>} />
      </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
