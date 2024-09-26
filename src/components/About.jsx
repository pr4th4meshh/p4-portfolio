import React from "react"
import styles from "../style"
import FadeInAnimation from "./FadeInAnimation"

const About = () => {
  return (
    <section className="h-auto py-60 bg-primary text-white">
      <FadeInAnimation>
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-3xl md:text-6xl text-center font-pop tracking-normal font-thin">
            Hey, I'm Prathamesh, focused on building <br /> meaningful &
            industry ready applications. <br />I help you create your website
            from{" "}
            <span className="font-pop rounded-full px-3 bg-white text-primary">
              a
            </span>{" "}
            to &#8599;{" "}
            <span className="font-pop rounded-full px-3 bg-white text-primary">
              www
            </span>
            . <br /> Come and say hello!
          </h1>
        </div>
      </FadeInAnimation>
    </section>
  )
}

export default About
