import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/Home';
import ProducerSignup from './pages/ProducerSignup';
import Recyclersignup from './pages/recyclersignup';

import { Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='producersignup' element={<ProducerSignup />} />
        <Route path='recyclersignup' element={<Recyclersignup />} />
      </Routes>
    </div>
  )
}

export default App
