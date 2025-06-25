import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const greetings = [
  { language: "English", text: "Hello" },
  { language: "French", text: "Bonjour" },
  { language: "Swiss", text: "Grüezi" },
  { language: "Italian", text: "Ciao" },
  { language: "Japanese", text: "こんにちは" },
  { language: "Spanish", text: "Hola" },
  { language: "Hindi", text: "स्वागत है" },
]

const LoadingScreen = ({ setLoading }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentGreeting < greetings.length - 1) {
          setCurrentGreeting(currentGreeting + 1)
        } else {
          setLoading(false)
        }
      },
      currentGreeting === 0 ? 600 : currentGreeting === 6 ? 500 : 150
    )

    return () => clearTimeout(timer)
  }, [currentGreeting, setLoading])

  return (
    <motion.div
      className="fixed inset-0 bg-primary flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 1, x: 2000 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence mode="wait">
        <div key={currentGreeting} className="text-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-2">
            ~ {greetings[currentGreeting].text}
          </h1>
        </div>
      </AnimatePresence>
    </motion.div>
  )
}

export default LoadingScreen
