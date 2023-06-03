import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import HomePages from "./pages/HomePages";
import Ejemplo1 from "./pages/Ejemplo1";




function App() {
  return (
    <div className="App">
      {/*<Header></Header>*/}
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePages></HomePages>}></Route>
          <Route path='/ejemplo1' element={<Ejemplo1/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
