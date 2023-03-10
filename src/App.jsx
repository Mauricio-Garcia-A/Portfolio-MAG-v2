import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import AboutMe from './pages/AboutMe/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio-MAG-v2/" element={<Home />} />
        <Route path="/Portfolio-MAG-v2/Portfolio" element={<Portfolio />} />
        <Route path="/Portfolio-MAG-v2/Acerca-de-mi" element={<AboutMe />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
