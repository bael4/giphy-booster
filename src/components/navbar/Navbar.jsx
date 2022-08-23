import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to="/">Categories</Link>
      <Link to="/trend">Trend</Link>
      <Link to="/random">Random</Link>
    </div>
  )
}

export default Navbar
