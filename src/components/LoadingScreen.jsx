import React, { useState } from 'react';

const style = {
  div: `bg-[#AACC00] h-[100vh] text-[#007F5F]`,
  h1: `font-wilk sm:text-[86px] text-[72px] ss:text-[56px] xs:text-[42px] xxs:text-[36px] animate__animated  animate__fadeInUp animate__slower`,
  divS: `flex justify-center relative top-[35vh] animate__delay-3s `
}

function LoadingScreen() {

  return (
    <div className={` ${style.div} `} >
      <div className={` ${style.divS} `} >
        <h1 className={` ${style.h1} `} >WELCOME !</h1>
      </div>
    </div>
  );
}

export default LoadingScreen;
