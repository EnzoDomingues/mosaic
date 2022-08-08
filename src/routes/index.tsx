import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AddItemScreen from 'screens/AddItem/AddItemScreen'
import HomeScreen from 'screens/Home/HomeScreen'

const RoutesDefault: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomeScreen />} />
    <Route path="/add-item" element={<AddItemScreen />} />
  </Routes>
)

export default RoutesDefault
