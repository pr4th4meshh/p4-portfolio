import React from 'react'
import styles from '../style'

const style = {
    sec: `bg-[#AACC00] xxs:h-[470px] sm:pt-[80px] xs:h-[500px] h-[500px] ${styles.boxWidth} ${styles.paddingY}`,
    ul: `animate__animated animate__fadeInLeft animate__slower flex sm:${styles.flexCenter} ss:flex-row flex-col sm:text-[24px] text-[30px] ss:text-[28px] xs:text-[35px] xxs:text-[20px] xxs:tracking-widest text-[#007F5F] justify-between`,
    h3: `font-wilk`,
    imgD: `sm:h-[260px] sm:w-[260px] h-[110px] w-[110px]  rounded-full border-2 animate__animated animate__fadeInLeft animate__slower `,
    divS: `flex-1 xxs:pt-6 pb-6 lg:px-20 px-8 xs:px-4 xxs:px-[10px]`,
    h2: ` animate__animated animate__fadeInLeft animate__slower sm:text-[22px] text-[52px] ss:text-[24px] xs:text-[16px] xxs:text-[14px] flex flex-wrap text-[#007F5F] xxs:text-center sm:text-justify `
}

const About = () => {
  return (
    <section className={` ${style.sec} `} id='about' >
        <div className={`${styles.paddingX} `} >
        <ul className={` ${style.ul} `}>
      <li>
       <h3 className={` ${style.h3} `} >WEB DEV ＋</h3>
      </li>
      <li>
       <h3 className={` ${style.h3} `} >DESIGN ＋</h3>
      </li>
      <li>
       <h3 className={` ${style.h3} `} >FRONT-END ＋</h3>
      </li>
      <li>
       <h3 className={` ${style.h3} `} >UI / UX</h3>
      </li>
        </ul>
        </div>

        <div className={`flex ${styles.paddingX} `} >
            <div className={` flex-0.5 xxs:pt-6 pb-6 ${styles.flexCenter} xxs:hidden md:block `}>
               <img src='src/assets/P4.png'  className={`${style.imgD}`} alt="" />
            </div>
            <div className={` ${styles.flexCenter} ${style.divS} `}>
                <h2 className={`${style.h2}`} >FRONT-END WEB DEVELOPER | WEB DESIGNER | USER-INTERFACE & USER-EXPERIENCE | WORKING 
                    ON FRONT-END WEB DEVELOPMENT FROM THE PAST 2 YEARS WITH REACT JS | LEARNING NEW 
                    CONCEPTS DAILY
                </h2>
            </div>
        </div>
    </section>
)
}

export default About