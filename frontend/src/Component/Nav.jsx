import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='Navigation'>
            <ul className='ul'>
            <li className='lione'><Link to="/">Home</Link></li>
            <li className='li'><Link to="/teachers">Teachers</Link></li>
            <li className='li'><Link to="/programs">Programs</Link></li>
            <li className='li'><Link to="/about">about</Link></li>
            </ul>
          </div>
  )
}

export default Nav
