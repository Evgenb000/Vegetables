import React from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import About from './components/about-us/about';
import Contact from './components/contact-us/contact';

const App: React.FC =() => {
  return (
    <BrowserRouter basename='/'>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={
            <Main />
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
