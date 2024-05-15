import React from "react"
import styles from "../style"

const style = {
  sec: `flex flex-col bg-[#AACC00] xxs:h-[500px]`,
  div: `pt-[50px] flex flex-col`,
  h1: ` animate__animated animate__fadeInLeft animate__slower font-wilk sm:pt-[60px] text-[#007F5F] sm:text-[82px] text-[72px] ss:text-[56px] xs:text-[42px] xxs:text-[38px]`,
  p: ` animate__animated animate__fadeInLeft animate__slower lg:[pb-0] sm:pb-[0px] sm:text-[56px] text-[52px] ss:text-[46px] xs:text-[40px] xxs:text-[32px] text-[#007F5F] `,
}

const Hero = () => {
  return (
    <section className={` ${style.sec} `}>
      <div className={` ${style.div} ${styles.paddingX} `}>
        <h1 className={` ${style.h1} `}>
          PR4TH4MESHH'S <br /> PRTFLO//
        </h1>
        <p className={` ${style.p} `}>I convert text into design.</p>
      </div>
    </section>
  )
}

export default Hero
