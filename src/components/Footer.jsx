import React from 'react';
import styles from '../style'
import { saveAs } from 'file-saver';
import img from '../components/prathameshh-cv.pdf'

const style = {
  sec: ` xxs:h-[250px] sm:h-[200px] p-2 h-[200px] bg-[#D7E8BA] text-[#611C35] `,
  ul: ` ss:flex-row flex-col sm:text-[16px] md:text-[16px] text-[30px] ss:text-[16px] xs:text-[14px] xxs:text-[12px] text-[#611C35] justify-evenly border-t-[1px] border-[#611C35]`,
  h3: `font-pop cursor-pointer xxs:text-[16px] `,
}

const Footer = () => {
  
  function downloadImage() {
    saveAs(img, 'prathameshh-cv.pdf')
  }
  return (
    <section className={` ${style.sec} `} >
      <ul className={` flex sm:${styles.flexCenter} ${styles.paddingY} ${style.ul} `}>
      <li>
       <h3 className='font-pop p-3 xxs:text-[16px] ' >DEVELOPED BY @PR4TH4MESHH</h3>
      </li>
      <li>
        <a href="mailto:prathameshasolkar17@gmail.com?subject=subject text">
        <h3 className={`${style.h3}`} >E-MAIL</h3>
        </a>
      </li>
      <li>
        <a href="https://github.com/pr4th4meshh" >
        <h3 className={`${style.h3}`} >GITHUB</h3>
        </a>
      </li>
      <li>
        <a onClick={downloadImage} >
        <h3 className={`${style.h3}`} >RESUME</h3>  
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/prathamesh-asolkar/">
        <h3 className={`${style.h3}`} >LINKED-IN</h3>
        </a>
      </li>
      <li >
        <a href="https://instagram.com/pr4th4meshh">
        <h3 className={`${style.h3}`} >INSTAGRAM</h3>
        </a>
      </li>
        </ul> 
    </section>
  )
}

export default Footer