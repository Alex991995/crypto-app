import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../images/cryptocurrency.png';
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineMenu } from 'react-icons/ai';

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  function setActive  ({isActive}: {isActive: boolean}):string {
    return  isActive ? "link active " : 'link';
  }
  function toggelBurger() {
    setShowMenu(!showMenu)
  }

  return (
    <header >
      <nav className='navigation' >
        <img className='w-[40px] mr-2' src={icon} alt=""/>
        <h3 className='text-blue-700 font-bold flex-grow text-xl' z-10> Cryptoverse</h3>

        <div className='menu-icon' onClick={toggelBurger}><AiOutlineMenu size='25' color='white'/></div>
        <div className={`${showMenu ? "wraper-link menu-active" : "wraper-link"}`}>
          <div>
            <NavLink className={setActive} to='/'  onClick={() =>setShowMenu(false)}>
              <AiOutlineHome size='25'/> 
              Home
            </NavLink>
          </div>
          <div>
            <NavLink className={setActive} to='/cryptocurrency' onClick={() =>setShowMenu(false)}>
              <AiOutlineFundProjectionScreen size='25'/> 
              Cryptocurrency
            </NavLink>
          </div>
            
        </div>
      </nav>

    </header>
  );
}

export default Header;