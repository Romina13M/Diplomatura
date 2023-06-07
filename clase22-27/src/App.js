import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import HomePages from "./pages/HomePages";
import Ejemplo1 from "./pages/Ejemplo1";
import Ejemplo2 from './pages/Ejemplo2';
import Ejemplo3 from './pages/Ejemplo3';
import CargaJson from './pages/Ejemplo4';

function App() {
  return (
    <div className="App">
      {/*<Header></Header>*/}
      <Header />
      <BrowserRouter>
        <Nav />
         <Routes>
          <Route path='/' element={<HomePages/>}></Route>
           <Route path='/ejemplo1' element={<Ejemplo1/>}></Route> 
           <Route path='/ejemplo2' element={<Ejemplo2/>}></Route> 
           <Route path='/ejemplo3' element={<Ejemplo3/>}></Route> 
           <Route path='/ejemplo4' element={<CargaJson/>}></Route> 
        </Routes> 
      </BrowserRouter> 
      <Footer />

    </div>
  );
}

export default App;
