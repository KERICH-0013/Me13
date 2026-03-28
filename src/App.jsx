import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Education from './Education'
import Interests from './Interests'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/interests" element={<Interests />} />
      </Routes>
    </HashRouter>
  )
}

export default App