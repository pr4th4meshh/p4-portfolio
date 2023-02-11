import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Frameworks from './components/Frameworks'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ScrollButton from './components/ScrollButton'
import './index.css'
import { useState, useEffect } from 'react'
import 'animate.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return (
    <>
     {loading === false ? (
    <div className="App">
       <Navbar/>
       <Hero/>
       <About/>
       <Projects/>
       <Frameworks/>
       <Contact/>
       <Footer/>
       <ScrollButton/>
    </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
  }

export default App
