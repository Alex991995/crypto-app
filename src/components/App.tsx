import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home/Home';
import Cryptocurrency from './Cryptocurrency';
import CryptoDetails from './CryptoDetails/CryptoDetails';
import Footer from './Footer';

function App() {
  return (
    <>
    <Header />
      <div className='box'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cryptocurrency' element={< Cryptocurrency />}/>
          <Route path='/cryptocurrency/:uuid' element={< CryptoDetails />}/>
        </Routes>
      </div>
    <Footer />
    </>
    
  );
}

export default App;
