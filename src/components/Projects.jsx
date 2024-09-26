import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import REINImage from "../assets/shopping.jpeg"
import FREELANCEImage from "../assets/freelancecms.jpeg"
import DOCTORSImage from "../assets/doctors.jpeg"
import SKINCAREImage from "../assets/skincare.jpeg"
import FORMSImage from "../assets/forms.jpeg"
import FadeInAnimation from "./FadeInAnimation"

const projects = [
  {
    id: 1,
    title: "Re-Inventory",
    description: "CLOTHING WEBSITE",
    image: REINImage,
    tech: ["React", "Next.js", "TypeScript", "RTK Query", "TailwindCSS"],
    link: "https://github.com/pr4th4meshh/mern-store",
  },
  {
    id: 2,
    title: "Freelance CMS",
    description: "CONTENT MANAGEMENT SYSTEM",
    image: FREELANCEImage,
    tech: ["React", "TypeScript", "RTK Query", "TailwindCSS"],
    link: "https://docs.google.com/document/d/1nLHX2pKMJMujqavqwANDVwAAnNEQl5c5j_nFy50KvsY/edit?usp=sharing",
  },
  {
    id: 3,
    title: "Si-Sehat Mobile",
    description: "DOCTOR'S APPOINTMENT MOBILE APP",
    image: DOCTORSImage,
    tech: ["React Native", "TypeScript", "Expo", "Expo Router"],
    link: "https://github.com/pr4th4meshh/doctors-react-native-app",
  },
  {
    id: 4,
    title: "Skin & You",
    description: "SKINCARE CLINIC & MEDICARE",
    image: SKINCAREImage,
    tech: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "TailwindCSS"],
    link: "https://github.com/pr4th4meshh/book-appointment-mern",
  },
  {
    id: 5,
    title: "Respondly",
    description: "RESPONSE COLLECTOR",
    image: FORMSImage,
    tech: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "TailwindCSS"],
    link: "https://github.com/pr4th4meshh/respondly",
  },
]

function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="bg-primary py-16 min-h-screen flex flex-col">
      <FadeInAnimation>
        <h1 className="container mx-auto text-white text-2xl font-bold uppercase tracking-wide mb-8 font-pop">
          projects
        </h1>

        <main className="container mx-auto flex-grow flex flex-col lg:flex-row gap-8">
          {/* Project Showcase */}
          <div className="w-full md:w-[50%] h-[50vh] md:h-[80vh] relative overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeIndex}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 700, damping: 80 },
                  opacity: { duration: 0.5 },
                }}
                className="absolute inset-0"
              >
                <img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="w-full h-full object-cover rounded-3xl"
                  loading="lazy"
                />
                <div className="absolute bg-gradient-to-t from-black via-transparent to-transparent inset-0 flex flex-col items-start justify-end p-4 sm:p-8 rounded-3xl">
                  <h2 className="text-white text-3xl md:text-5xl mb-1 sm:mb-2 font-bold">
                    {projects[activeIndex].title}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-xl mb-3 sm:mb-4">
                    {projects[activeIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeIndex].tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-white border border-white px-4 py-2 rounded-full text-xs md:text-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={projects[activeIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-white text-md md:text-2xl font-pop px-5 py-3 rounded-full gap-2 absolute md:top-7 top-3 right-3 md:right-7 animate-pulse"
                  >
                    Visit Project &#8599;
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project List */}
          <div className="w-full md:w-[45%] min-h-min p-4 md:p-8 flex flex-col justify-center">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                onClick={() => {
                  setActiveIndex(index)
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <h1
                  className={`text-white text-4xl md:text-7xl font-medium font-pop mb-4 cursor-none flex ${
                    index === activeIndex
                      ? "opacity-100 font-normal md:font-thin"
                      : "opacity-30"
                  }`}
                >
                  {project.title}{" "}
                  {index === activeIndex && (
                    <h1 className="font-gag font-thin">{index + 1}</h1>
                  )}
                </h1>
              </motion.div>
            ))}
          </div>
        </main>
      </FadeInAnimation>
    </div>
  )
}

export default ProjectShowcase
