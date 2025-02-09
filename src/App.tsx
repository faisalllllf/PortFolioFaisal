import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Experience from "./pages/Experience"
import Education from "./pages/Education"
import { AnimatePresence } from "framer-motion"

function App() {
  return (
    <Router>
      <div className="app bg-gray-900 text-white min-h-screen">
        <Header />
        <AnimatePresence mode="wait">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App

