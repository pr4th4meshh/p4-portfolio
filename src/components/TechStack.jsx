const skills = [
  "JavaScript",
  "HTML / CSS",
  "React & React Native w/ TypeScript",
  "Redux Toolkit & Query",
  "Next.JS w/ TypeScript",
  "TailwindCSS",
  "MERN Stack",
]

const SkillsSection = () => {
  return (
    <div className="h-auto bg-primary text-white flex flex-col pt-36 pb-10">
        <div className="container mx-auto space-y-8">
          <h1 className="text-2xl font-bold uppercase tracking-wide mb-8 font-pop">
            Tech Stack
          </h1>

          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-4xl md:text-7xl border-b border-gray-600 py-4 md:py-6 text-start font-pop"
            >
              {skill}
            </div>
          ))}
        </div>

        <h1 className="font-pop text-center flex justify-center items-center flex-wrap text-5xl md:text-9xl pt-64">
         THAT'S ✹ IT  
        </h1>
    </div>
  )
}

export default SkillsSection
