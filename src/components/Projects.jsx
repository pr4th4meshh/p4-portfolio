import React from "react"
import styles from "../style"

const style = {
  sec: `bg-[#D7E8BA] ${styles.paddingY} `,
  ul: `sm:text-[56px] flex flex-col flex-wrap text-[52px] ss:text-[46px] xs:text-[40px] xxs:text-[23px] text-[#611C35] xs:leading-[110px] leading-[50px]`,
  h1m: `font-pop  sm:text-[46px] text-[32px] ss:text-[26px] xs:text-[24px] xxs:text-[22px] text-[#611C35] pb-14`,
  h1: `font-wilk mb-6 border-b-[2px] border-[#611C35]  cursor-pointer`,
}

const Projects = () => {
  return (
    <section className={` ${style.sec} `} id="projects">
      <div className={`${styles.paddingX}`}>
        <h1 className={` ${style.h1m} `}>PROJECTS:</h1>
        <ul className={` ${style.ul} `}>
          <li>
            <a href="https://docs.google.com/document/d/1nLHX2pKMJMujqavqwANDVwAAnNEQl5c5j_nFy50KvsY/edit?usp=sharing">
              <h1 className={`${style.h1}`}>⤳ CMS WEB APP</h1>
            </a>
          </li>
          <li>
            <a href="https://github.com/pr4th4meshh/MERN-real-estate-app">
              <h1 className={`${style.h1}`}>⤳ MERN REAL-ESTATE APP</h1>
            </a>
          </li>
          <li>
          <a href="https://github.com/pr4th4meshh/book-appointment-mern">
              <h1 className={`${style.h1}`}>⤳ MONGO - NEXTJS BOOKING APP </h1>
            </a>
          </li>
          <li>
            <a href="https://github.com/pr4th4meshh/doctors-react-native-app">
              <h1 className={`${style.h1}`}>⤳ REACT-NATIVE DOCTORS APP</h1>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects
