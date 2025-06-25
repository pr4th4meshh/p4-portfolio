const experiences = [
  {
    title: "Freelance Front-End Developer",
    company: "Self-Employed, Remote",
    period: "April 2023 - Present",
    description:
      "Building custom web solutions for clients with modern technologies like React, Next.js, TypeScript, TailwindCSS, MongoDB, Mongoose, Express, Prisma, Redux Toolkit, RTK Query, Framer Motion, and more.",
  },
  {
    title: "Software Developer Intern",
    company: "Orim Advisors, Mumbai IN // Onsite",
    period: "January 2025 - Present",
    description: [
      "Worked with Cloud Engineers to develop a solid FrontEnd for Cloud Software using Vite React with TypeScript, Tanstack Query and Zustand State Management on Docker.",
      "Developed end-to-end (E2E) and component-level tests with Playwright and Vitest, ensuring UI reliability and API contract.",
      "Developed API routes on Python FastAPI; contributed to Python-based data ingestion pipelines for analytics services.",
      "Interacted (CRUD) with PostgreSQL database and performed Docker-based deployments to remote Linux servers via SSH.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "FuzzyNodes, Australia // Remote",
    period: "December 2024 - Jun 2025",
    description: [
      "Architected and deployed a full-stack responsive web app with an admin dashboard using Next.js, TypeScript, Tailwind CSS, ShadCN, and an Express TypeScript backend.",
      "Integrated OpenAI GPT-4 for intelligent profanity detection, auto-fill suggestions, and automated user blacklisting.",
      "Engineered scalable UI and APIs for a Web3 app using Bun and Elysia, enhancing real-time performance.",
      "Designed and built an end-to-end multi-restaurant management platform, covering admin control, customer reservations, live updates and food delivery using Next.js and Node.js.",
    ],
  },
]

const ExperienceSection = () => {
  return (
    <div className="h-auto bg-primary text-white flex flex-col pt-36 pb-10">
      <div className="container mx-auto space-y-12">
        <h1 className="text-2xl font-bold uppercase tracking-wide mb-12 font-pop">
          Experience
        </h1>

        {experiences.map((experience, index) => {
          const isPresent = experience.period.includes("Present")

          return (
            <div
              key={index}
              className="border-b border-gray-600 pb-8 md:pb-12 last:border-b-0"
            >
              <div className="space-y-4 md:space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                  <h2 className="text-3xl md:text-5xl font-pop">
                    {experience.title}
                  </h2>
                  <div className="flex items-center gap-2 text-lg md:text-xl text-gray-300 font-pop">
                    {isPresent && (
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                    )}
                    <span>{experience.period}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl text-gray-200 font-pop">
                  {experience.company}
                </h3>

                {Array.isArray(experience.description) ? (
                  <div className="space-y-3 md:space-y-4">
                    {experience.description.map((desc, descIndex) => (
                      <p
                        key={descIndex}
                        className="text-base md:text-lg text-gray-300 leading-relaxed font-pop"
                      >
                        • {desc}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed font-pop">
                    {experience.description}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExperienceSection
