import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import AboutMe from './pages/AboutMe/AboutMe'
import Error from './pages/Error/Error'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Acerca-de-mi" element={<AboutMe />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
