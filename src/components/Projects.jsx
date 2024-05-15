import React from "react"
import styles from "../style"

const style = {
  sec: ` xxs:h-[470px] xs:h-[700px] h-[100px] bg-[#AACC00] `,
  ul: `sm:text-[56px] flex flex-col flex-wrap text-[52px] ss:text-[46px] xs:text-[40px] xxs:text-[26px] text-[#007F5F] xs:leading-[110px] leading-[50px]`,
  h1m: `font-pop  sm:text-[46px] text-[32px] ss:text-[26px] xs:text-[24px] xxs:text-[22px] text-[#007F5F] pb-14`,
  h1: `font-wilk mb-6 border-b-[2px] border-[#007F5F]  cursor-pointer`,
}

const Projects = () => {
  return (
    <section className={` ${style.sec} `} id="projects">
      <div className={`${styles.paddingX}`}>
        <h1 className={` ${style.h1m} `}>PROJECTS:</h1>
        <ul className={` ${style.ul} `}>
          <li>
            <a href="https://github.com/pr4th4meshh/MERN-real-estate-app">
              <h1 className={`${style.h1}`}>⤳ MERN REAL ESTATE APP</h1>
            </a>
          </li>
          <li>
            <a href="https://github.com/pr4th4meshh/p4-ecommerce">
              <h1 className={`${style.h1}`}>⤳ E-COMMERCE APP</h1>
            </a>
          </li>
          <li>
            <a href="https://github.com/pr4th4meshh/react-native-expo">
              <h1 className={`${style.h1}`}>⤳ REACT NATIVE E-COMMERCE APP</h1>
            </a>
          </li>
          <li>
            <a href="https://github.com/pr4th4meshh/p4-portfolio">
              <h1 className={`${style.h1}`}>⤳ PORTFOLIO WEBSITE</h1>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects
