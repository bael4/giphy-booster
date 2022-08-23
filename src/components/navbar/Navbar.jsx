import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
      <Link to="/">Categories</Link>
      <Link to="/trend">Trend</Link>
      <Link to="/random">Random</Link>
    </nav>
  )
}

export default Navbar
