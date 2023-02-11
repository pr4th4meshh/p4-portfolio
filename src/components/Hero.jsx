import React from 'react';
import styles from '../style';

const style = {
  sec: `flex ${styles.boxWidth} ${styles.flexStart} flex-col bg-[#AACC00] xxs:h-[500px]`,
  div: `pt-[50px] flex flex-col xl:px-0 sm:px-10 px-6`,
  h1: `animate__animated animate__fadeInUp animate__delay-1s font-wilk sm:pt-[200px] text-[#007F5F] sm:text-[86px] text-[72px] ss:text-[56px] xs:text-[42px] xxs:text-[36px]`,
  p: `animate__animated animate__fadeInUp animate__delay-1s lg:[pb-0] sm:pb-[100px] sm:text-[56px] text-[52px] ss:text-[46px] xs:text-[40px] xxs:text-[36px] text-[#007F5F]`,
}

const Hero = () => {
  return (
    <section className={` ${style.sec} `}>
      <div className={` ${style.div} `} > 
      <h1 className={` ${style.h1} `} >PR4TH4MESHH'S <br /> PRTFLO//</h1>
       <p className={` ${style.p} `} >Hey there, this is my portfolio website.</p>
      </div>
     
    </section>
  )
}

export default Hero