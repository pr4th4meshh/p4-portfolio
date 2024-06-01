import React from "react"
import styles from "../style"

const style = {
  sec: `bg-[#D7E8BA] px-2 ${styles.paddingY}`,
  h1: `font-pop  sm:text-[46px] text-[32px] ss:text-[26px] xs:text-[24px] xxs:text-[22px] text-[#611C35] pb-14`,
  h3: `font-wilk`,
  ul: `ss:flex-row flex-col sm:text-[18px] md:text-[32px] text-[30px] ss:text-[22px] xs:text-[20px] xxs:text-[20px] text-[#611C35] justify-between`,
}

const Frameworks = () => {
  return (
    <section className={`${style.sec}`} id="frameworks">
      <div className={`${styles.paddingX} `}>
        <h1 className={` ${style.h1} `}>LANGUAGES & FRAMEWORKS:</h1>
        <ul className={` flex sm:${styles.flexCenter}  ${style.ul} `}>
          <li>
            <h3 className={`${style.h3}`}>HTML5/CSS3 ＋</h3>
          </li>
          <li>
            <h3 className={`${style.h3}`}>JAVASCRIPT ＋</h3>
          </li>
          <li>
            <h3 className={`${style.h3}`}>TYPESCRIPT ＋</h3>
          </li>
          <li>
            <h3 className={`${style.h3}`}>REACT ＋</h3>
          </li>
          <li>
            <h3 className={`${style.h3}`}>REDUX ＋</h3>
          </li>
          <li>
            <h3 className={`${style.h3}`}>TAILWIND ＋</h3>
          </li>
          <li>
            <h3 className={`${style.h3}`}>AND MORE.. </h3>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Frameworks
