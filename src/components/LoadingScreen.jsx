import React from "react"

const style = {
  div: `bg-[#AACC00] h-[100vh] text-[#007F5F]`,
  h1: `font-wilk sm:text-[86px] text-[72px] ss:text-[56px] xs:text-[42px] xxs:text-[36px] `,
  divS: `relative animate__animated animate__fadeIn animate__fadeIn animate__slower `,
}

function LoadingScreen() {
  return (
    <div className={` ${style.div} flex justify-center items-center `}>
      <div className={` ${style.divS} `}>
        <h1 className={` ${style.h1} `}>WELCOME !</h1>
      </div>
    </div>
  )
}

export default LoadingScreen
