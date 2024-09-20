import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Frameworks from "./components/Frameworks"
import Hero from "./components/Hero"
import LoadingScreen from "./components/LoadingScreen"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import ScrollButton from "./components/ScrollButton"
import "./index.css"
import { useState, useEffect } from "react"
import "animate.css"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return (
    <>
      {loading === false ? (
        <div className="App">
          {/* <Navbar/> */}
          <Hero />
          {/* <About/>
       <Projects/>
       <Frameworks/>
       <Contact/>
       <Footer/>
       <ScrollButton/> */}
        </div>
      ) : (
        // <LoadingScreen />
        <div className="bg-black h-screen flex items-center justify-center">
          <h1 className="text-white text-5xl animate__animated animate__fadeIn animate__fadeIn animate__slower">
            hey !!
          </h1>
        </div>
      )}
    </>
  )
}

export default App
