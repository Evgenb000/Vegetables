import React from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './scss/main.scss';
import About from './components/about-us/about';
import Contact from './components/contact-us/contact';
import Cart from './components/cart/cart';

const App: React.FC =() => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/Vegetables' element={
            <Navigate to='/' />
          } />

          <Route path='/' element={
            <Main />
          } />

          <Route path='/cart' element={
            <Cart />
          } />

          <Route path='/about-us' element= {
            <About />
          } />

          <Route path='/contact-us' element= {
            <Contact />
          } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
