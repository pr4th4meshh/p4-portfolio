import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import About from "./components/About"
import Footer from "./components/Footer"
import SkillsSection from "./components/TechStack"
import LoadingScreen from "./components/LoadingScreen"
import "animate.css"

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div className="overflow-hidden cursor-none">
      <AnimatePresence>
        {loading && <LoadingScreen setLoading={setLoading} />}
      </AnimatePresence>

      <motion.div
        className="fixed w-10 h-10 bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
        }}
      />
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <SkillsSection />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
