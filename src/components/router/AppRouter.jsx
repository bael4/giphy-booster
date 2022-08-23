import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Categories from '../Category'
import Random from '../Random'
import Trend from '../Trend'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/trend" element={<Trend />} />
      <Route path="/random" element={<Random />} />
    </Routes>
  )
}

export default AppRouter
