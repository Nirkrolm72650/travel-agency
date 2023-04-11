import React from 'react'
import images from '../../constants/images'
import { BsChevronDown }  from 'react-icons/bs';

import './Navbar.scss'
const Navbar = () => {

  return (
    <nav className='travel__navbar'>
      <div className='travel__navbar-logo'>
        <img src={images.logo} alt='logo'/>
      </div>
      <ul className='travel__navbar-links'>
        {['Destinations', 'Hotels', 'Flights', 'Booking', 'Login'].map((item) => (
          <li key={item}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <button className='travel__navbar-btn' type="button">Sign Up</button>
      </ul>
    </nav>
  )
}

export default Navbar