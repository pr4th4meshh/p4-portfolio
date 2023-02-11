import React from 'react'
import styles from '../style'

const style = {
  sec: `bg-[#AACC00] ss:h-[300px] p-2 h-[400px]`,
  h1: `font-pop  sm:text-[46px] text-[32px] ss:text-[26px] xs:text-[24px] xxs:text-[22px] text-[#007F5F] pb-14`,
  h3: `font-wilk`,
  ul: `ss:flex-row flex-col sm:text-[18px] md:text-[26px] text-[30px] ss:text-[22px] xs:text-[20px] xxs:text-[20px] text-[#007F5F] justify-between`,
}

const Frameworks = () => {
  return (
   <section className={`${style.sec}`} id='frameworks' >
<div className={`${styles.paddingX} `} >
<h1 className={` ${style.h1} `} >FRAMEWORKS I WORK ON:</h1>
        <ul className={` flex sm:${styles.flexCenter}  ${style.ul} `}>
      <li>
       <h3 className={`${style.h3}`} >HTML5 ＋</h3>
      </li>
      <li>
       <h3 className={`${style.h3}`} >CSS3 ＋</h3>
      </li>
      <li>
       <h3 className={`${style.h3}`} >SASS ＋</h3>
      </li>
      <li>
       <h3 className={`${style.h3}`} >REACT-JS ＋</h3>
      </li>
      <li>
       <h3 className={`${style.h3}`} >REDUX ＋</h3>
      </li>
      <li>
       <h3 className={`${style.h3}`} >FIREBASE ＋</h3>
      </li>
      <li>
       <h3 className={`${style.h3}`} >TAILWIND </h3>
      </li>
        </ul>
        </div>

   </section>
  )
}

export default Frameworks