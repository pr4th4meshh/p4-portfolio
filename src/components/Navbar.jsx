import React, { useState } from "react"
import { navLinks } from "../constants"

const Navbar = () => {
  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    })
  }
  return (
    <nav className="bg-primary text-white fixed top-0 left-0 w-full z-50 bg-transparent mix-blend-difference">
      <header className="px-0 py-6 md:py-6 container mx-auto flex justify-between items-center animate__animated animate__fadeInDown animate__slower">
        <span className="text-lg md:text-xl font-pop">hi, iam @pr4th4meshh</span>
        <span
          onClick={scrollToBottom}
          className="text-lg md:text-xl uppercase font-pop cursor-pointer"
        >
          contact
        </span>
      </header>
    </nav>
  )
}

export default Navbar
