import { useState } from "react"
import { motion } from "framer-motion"
import REINImage from "../assets/shopping.jpeg"
import FREELANCEImage from "../assets/freelancecms.jpeg"
import DOCTORSImage from "../assets/doctors.jpeg"
import SKINCAREImage from "../assets/skincare.jpeg"
import FORMSImage from "../assets/forms.jpeg"

const projects = [
  {
    id: 1,
    number: "01",
    title: "Pribbl",
    description: "SKRIBBL CLONE",
    image: REINImage,
    tech: ["React", "TypeScript", "Node.js", "Redis", "PostgreSQL", "Websockets", "Zustand", "Tanstack"],
    link: "https://github.com/pr4th4meshh/skribbl",
  },
  {
    id: 2,
    number: "02",
    title: "Freelance CMS",
    description: "CONTENT MANAGEMENT",
    image: FREELANCEImage,
    tech: ["React", "TypeScript", "RTK Query", "TailwindCSS"],
    link: "https://docs.google.com/document/d/1nLHX2pKMJMujqavqwANDVwAAnNEQl5c5j_nFy50KvsY/edit?usp=sharing",
  },
  {
    id: 3,
    number: "03",
    title: "Prana Mobile",
    description: "ASTROLOGY CONSULTATION APP",
    image: DOCTORSImage,
    tech: ["React Native", "TypeScript", "Expo", "Expo Router"],
    link: "https://github.com/pr4th4meshh/astrology-mobile-app",
  },
  {
    id: 4,
    number: "04",
    title: "Presssence",
    description: "PRESSSENCE PORTFOLIO BUILDER",
    image: SKINCAREImage,
    tech: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "TailwindCSS"],
    link: "https://github.com/pr4th4meshh/presssence",
  },
  {
    id: 5,
    number: "05",
    title: "Respondly",
    description: "RESPONSE COLLECTOR",
    image: FORMSImage,
    tech: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "TailwindCSS"],
    link: "https://github.com/pr4th4meshh/respondly",
  },
]

function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="bg-primary pt-36 pb-10 min-h-screen" id="projects">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold uppercase tracking-wide mb-12 font-pop text-white">
          projects
        </h1>

        <div>
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden block border-b border-gray-700 cursor-none"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Desktop: row background image */}
              <motion.div
                className="hidden md:block absolute inset-0 z-0"
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <img
                  src={project.image}
                  alt=""
                  aria-hidden
                  className="w-full h-full object-cover"
                />
                {/* semi-transparent overlay — light enough for mix-blend-difference to read */}
                <div className="absolute inset-0 bg-zinc-950/55" />
              </motion.div>

              {/* ── Mobile layout (< 1060px) ── */}
              <div className="relative z-10 flex items-center gap-4 py-6 md:hidden">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="text-3xl ss:text-4xl font-pop text-white leading-tight">
                      {project.title}
                    </h2>
                    <span className="text-white text-xl shrink-0 mt-1">&#8599;</span>
                  </div>
                  <p className="text-gray-400 text-xs font-pop uppercase tracking-widest mb-2">
                    {project.description}
                  </p>
                  <p className="text-gray-500 text-xs font-pop leading-relaxed">
                    {project.tech.join(" · ")}
                  </p>
                </div>

                <div className="shrink-0 w-24 h-16 ss:w-32 ss:h-20 rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* ── Desktop layout (≥ 1060px) ── */}
              {/*
                mix-blend-difference on this layer: white text inverts
                against whatever the composited background is, keeping
                it readable on both plain dark bg and image bg.
              */}
              <div
                className="relative z-10 hidden md:flex items-center justify-between w-full gap-4 py-10 mix-blend-difference"
              >
                <div className="flex items-center gap-10 flex-1 min-w-0">
                  <motion.span
                    className="text-white text-sm font-pop w-8 shrink-0"
                    animate={{
                      opacity:
                        hoveredIndex === null || hoveredIndex === index ? 1 : 0.15,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    {project.number}
                  </motion.span>

                  <div className="min-w-0">
                    <motion.h2
                      className="text-5xl lg:text-6xl font-pop text-white leading-tight"
                      animate={{
                        x: hoveredIndex === index ? 10 : 0,
                        opacity:
                          hoveredIndex === null || hoveredIndex === index
                            ? 1
                            : 0.15,
                      }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      {project.title}
                    </motion.h2>

                    {/* Always rendered — opacity only, so row height never shifts */}
                    <motion.p
                      className="text-white text-sm font-pop mt-3 tracking-widest"
                      animate={{
                        opacity: hoveredIndex === index ? 0.7 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.tech.join(" · ")}
                    </motion.p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <motion.span
                    className="text-white text-xs font-pop uppercase tracking-widest"
                    animate={{
                      opacity:
                        hoveredIndex === null || hoveredIndex === index ? 0.6 : 0.15,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    {project.description}
                  </motion.span>
                  <motion.span
                    className="text-white text-2xl font-pop"
                    animate={{
                      x: hoveredIndex === index ? 6 : 0,
                      opacity:
                        hoveredIndex === null || hoveredIndex === index ? 1 : 0.15,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    &#8599;
                  </motion.span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase
