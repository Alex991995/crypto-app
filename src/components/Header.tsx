import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../images/cryptocurrency.png';
import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai';

function Header() {
  return (
    <header>
      <nav className='bg-stone-800 p-4 font-["Helvetica"] flex items-center' >
        <img className='w-[40px] mr-2' src={icon} alt=""/>
        <h3 className='text-blue-700 font-bold flex-grow text-xl'> Cryptoverse</h3>
        <div className='wraper-link'>
          <div>
            <AiOutlineHome size='25' color='white'/>
            <NavLink className='link' to='/'>Home</NavLink>
          </div>
          <div>
              <AiOutlineFundProjectionScreen size='25' color='white'/>
              <NavLink className='link' to='/cryptocurrency'>Cryptocurrency</NavLink>
          </div>
            
        </div>
      </nav>

    </header>
  );
}

export default Header;