import { useState, useEffect } from 'react'
import './index.css'
import 'animate.css'

const projects = [
  { name: "Musea", image: "/placeholder.svg?height=200&width=300" },
  { name: "Elara", image: "/placeholder.svg?height=200&width=300" },
  { name: "Verve", image: "/placeholder.svg?height=200&width=300" },
  { name: "Zephyr", image: "/placeholder.svg?height=200&width=300" },
]

function App() {
  const [loading, setLoading] = useState(true)
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-primary p-4 md:p-8">
      <div className="h-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-white gap-4">
        {/* Header */}
        <div className="col-span-full p-8 flex justify-between items-center bg-secondary text-white rounded-lg">
          <h1 className="text-2xl font-semibold">@pr4th4meshh</h1>
          <nav>
            {/* <ul className="flex space-x-4 text-sm">
              <li><a href="https://github.com/pr4th4meshh" className="hover:underline">GitHub</a></li>
            </ul> */}
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 bg-secondary rounded-lg p-8 flex flex-col justify-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-2">I enjoy building </h2>
          <h2 className="text-3xl md:text-6xl font-bold mb-2">web and mobile products</h2>
          {/* <h2 className="text-3xl md:text-4xl font-bold">and im </h2> */}
        </div>

        {/* Projects Section */}
        <div className="md:row-span-2 bg-secondary rounded-lg p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">{projects[activeProject].name}</h3>
            <span>↗</span>
          </div>
          <img
            src={projects[activeProject].image}
            alt={`${projects[activeProject].name} Project`}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <div className="flex flex-wrap justify-between mt-auto">
            {projects.map((project, index) => (
              <button
                key={project.name}
                onClick={() => setActiveProject(index)}
                className={`font-semibold mb-2 ${index === activeProject ? 'text-pink-600' : 'text-pink-800'}`}
              >
                {project.name}
              </button>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="bg-secondary rounded-lg p-6 text-sm">
          <p>
            Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA, she crafts unique digital art experiences accessible globally.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-secondary rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold mb-2">Have some questions?</h3>
            <a href="#contact" className="text-xl font-bold hover:underline">
              Contact me
            </a>
          </div>
          <div className="text-right">→</div>
        </div>

        {/* Footer */}
        <div className="col-span-full flex justify-center md:justify-end space-x-4 mt-4">
          <a href="#" className="text-xs hover:underline">INSTAGRAM</a>
          <a href="#" className="text-xs hover:underline">TWITTER</a>
          <a href="#" className="text-xs hover:underline">LINKEDIN</a>
        </div>
      </div>
    </div>
  )
}

function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-pink-200">
      <div className="animate__animated animate__bounce text-4xl font-bold">
        Loading...
      </div>
    </div>
  )
}

export default App