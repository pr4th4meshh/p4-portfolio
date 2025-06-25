import { saveAs } from "file-saver"
import React from "react"
import resume from "../components/resume_25_06_2025.pdf"

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  let localDate = new Date().toLocaleTimeString("en-Us", {
    timeZone: "Asia/Kolkata",
    timeStyle: "short",
  })

  return (
    <footer
      className="bg-primary text-white py-2 pt-48 md:pt-44 px-0"
      id="footer"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-10 md:gap-4 mb-8 text-xl">
          <div className="text-start space-y-0">
            <p className="font-pop">
              Feel free to drop me a line with project{" "}
              <br className="md:block hidden" /> details. It would be a pleasure
              to help you <br className="md:block hidden" /> with your website!
            </p>
          </div>
          <div className="space-x-0">
            <a
              rel="noopener"
              target="_blank"
              href="https://github.com/pr4th4meshh"
              className="block hover:text-gray-300 hover:underline underline-offset-4 font-pop"
            >
              GITHUB
            </a>
            <a
              rel="noopener"
              target="_blank"
              href="https://www.linkedin.com/in/prathamesh-asolkar/"
              className="block hover:text-gray-300 hover:underline underline-offset-4 font-pop"
            >
              LINKEDIN
            </a>
            <a
              rel="noopener"
              target="_blank"
              href="https://instagram.com/pr4th4meshh"
              className="block hover:text-gray-300 hover:underline underline-offset-4 font-pop"
            >
              INSTAGRAM
            </a>
          </div>

          <div className="space-y-0">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-gray-300 hover:underline underline-offset-4 font-pop cursor-pointer"
            >
              VIEW RESUME
            </a>
          </div>
          <div className="">
            <span className="font-pop">PORTFOLIO 2024 .</span>
            <p className="font-pop">DEVELOPED & IMAGINED</p>
            <p className="font-pop">
              BY{" "}
              <a
                href="https://github.com/pr4th4meshh"
                className="underline hover:text-gray-300 hover:underline underline-offset-4 font-pop"
              >
                @pr4th4meshh
              </a>
            </p>
          </div>
          <div>
            <h1
              onClick={scrollToTop}
              className="block pt-8 pb-0 hover:text-gray-300 hover:underline underline-offset-4 font-pop cursor-pointer"
            >
              &#8593; BACK TO TOP &#8593;
            </h1>
            <span className="text-xl uppercase font-pop cursor-pointer">
              MUM, IN // {localDate}
            </span>
          </div>
        </div>
        <div className="text-center pt-20 pb-16">
          <a
            href="mailto:prathameshasolkar17@gmail.com?subject=Inquiry via portfolio"
            className="text-white text-6xl md:text-[154px] font-normal font-pop tracking-normal text-center animate-pulse cursor-pointer"
          >
            GET IN TOUCH &#8599;
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
