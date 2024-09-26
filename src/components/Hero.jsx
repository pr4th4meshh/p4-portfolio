import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="bg-primary text-white min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center relative ">
        <div className="z-10 text-center">
          <h1 className="text-md sm:text-2xl mb-4 leading-tight font-pop animate__animated animate__fadeInLeft animate__slower">
            Front-End Developer based in 📍Mumbai.
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight animate__animated animate__fadeInLeft animate__slower">
            I enjoy building
            <br />
            <span className="italic">web</span> and{" "}
            <span className="italic">mobile</span>
            <br />
            products.{" "}
            <h1 className="font-gag text-8xl font-normal relative left-[100px] md:left-[200px]">
              4
            </h1>
          </h1>
        </div>

        {/* <motion.div
          className="absolute left-12 top-1/4 w-40 h-40 border-8 border-gray-300 rounded-full opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        /> */}

        {/* <motion.div
          className="absolute right-1/4 bottom-1/4 w-40 h-40 border-8 border-white rounded-full opacity-60"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        /> */}

        {/* <motion.div
          className="absolute right-3/4 bottom-1/4 w-40 h-40 border-8 border-white rounded-full opacity-60"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 75,
            repeat: Infinity,
            ease: "backInOut"
          }}
        /> */}
        <footer className="p-6 text-center absolute bottom-0 animate__animated animate__fadeInUp animate__slower">
          <p className="text-xl font-pop">SCROLL</p>
          <div className="w-0.5 h-8 bg-white mx-auto mt-2"></div>
        </footer>
      </main>
    </section>
  )
}

export default Hero
