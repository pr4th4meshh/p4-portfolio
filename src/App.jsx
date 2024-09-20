import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="bg-primary text-white min-h-screen flex flex-col overflow-hidden cursor-none">
      <motion.div
        className="fixed w-10 h-10 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
        }}
      />

      <header className="p-6 container mx-auto flex justify-between items-center">
        <div className="text-xl font-pop">hi, iam @pr4th4meshh</div>
        <button className="text-2xl">☰</button>
      </header>
      
      <main className="flex-grow flex items-center justify-center relative">
        <div className="z-10 text-center">
        <h1 className="text-md sm:text-2xl mb-4 leading-tight">Front-End Developer based in 📍Mumbai.</h1>
          <h1 className="text-6xl sm:text-7xl font-bold mb-4 leading-tight">
            I enjoy building,
            <br />
            <span className='italic'>web</span> and <span className='italic'>mobile</span>
            <br />
            products.
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

        <motion.div
          className="absolute right-1/4 bottom-1/4 w-40 h-40 border-8 border-white rounded-full opacity-60"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

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
      </main>

      <footer className="p-6 text-center">
        <p className='text-xl'>SCROLL</p>
        <div className="w-0.5 h-8 bg-white mx-auto mt-2"></div>
      </footer>
    </div>
  );
};

export default App;