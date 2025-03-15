import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-center'>
        <span className='logo'>Mix Master</span>
        <div className='nav-links' >
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/newsletter" className="nav-link">NewsLetter</NavLink>

        </div>
    </div>
  )
}

export default Navbar

