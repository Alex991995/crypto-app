import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Cryptocurrency from './Cryptocurrency';
import CryptoDetails from './CryptoDetails';


function App() {
  return (
    <>
    <Header />
      <div className='md:container md:mx-auto'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cryptocurrency' element={< Cryptocurrency />}/>
          <Route path='/cryptocurrency/:uuid' element={< CryptoDetails />}/>
        </Routes>
      </div>
    </>
    
  );
}

export default App;
