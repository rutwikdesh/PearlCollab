import './Navbar.css'
import Logo from '../assets/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
  const {logout, isPending} = useLogout()
  const { user } = useAuthContext()

  return (
    <div className="navbar">
      <ul>
        <Link to="/" className='logo'>
          <li className="logo">
            <img src={Logo} alt="Logo" />
          </li>
        </Link>

        {!user && <li><Link to="/login">Login</Link></li>}
        {!user && <li><Link to="/signup">Signup</Link></li>}
        <li>
          {!isPending && user && <button className="btn" onClick={logout}>Logout</button>}
          {isPending && <button className="btn" disabled>Logging out...</button>}
        </li>
      </ul>
    </div>
  )
}
