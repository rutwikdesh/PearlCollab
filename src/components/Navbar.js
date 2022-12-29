import './Navbar.css'
import Logo from '../assets/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/" className='logo'>
          <li className="logo">
            <img src={Logo} alt="Logo" />
          </li>
        </Link>

        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  )
}
