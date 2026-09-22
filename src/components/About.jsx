const About = () => {
  return (
    <section className="h-auto py-32 md:py-60 bg-primary text-white">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-pop tracking-normal font-normal md:font-thin">
            Hey, I'm Prathamesh, focused on building <br className="hidden lg:block" /> meaningful
            applications. I help you create your website
            from{" "} 
            <span className="font-pop font-normal md:font-thin rounded-full px-3 bg-white text-primary">
              a
            </span>{" "}
            to &#8599;{" "}
            <span className="font-pop font-normal md:font-thin rounded-full px-3 bg-white text-primary">
              www
            </span>
            . <br className="hidden sm:block" /> Come and say hello!
          </h1>
        </div>
    </section>
  )
}

export default About
