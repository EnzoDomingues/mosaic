import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomeScreen from 'screens/Home/HomeScreen'

const RoutesDefault: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomeScreen />} />
  </Routes>
)

export default RoutesDefault
