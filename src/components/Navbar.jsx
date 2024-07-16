import { useState } from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-scroll'

export const Navbar = () => {
  const [nav, setNav] = useState(false)

  const changedBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  window.addEventListener('scroll', changedBackground)

  return (
    <nav
      className={nav ? 'nav active' : 'nav'} 
    >
      <Link to='main' className='logo'>
        <img src={logo} alt='logo' />
      </Link>
      <input className='menu-btn' type='checkbox' />
      <label className='menu-icon' htmlFor='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li>
          <Link to='main' smooth={true} duration={750}>
            Header
          </Link>
        </li>
        <li>
          <Link to='features' smooth={true} duration={750}>
            Features
          </Link>
        </li>
        <li>
          <Link to='offer' smooth={true} duration={750}>
            Offer
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={750}>
            About
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={750}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
