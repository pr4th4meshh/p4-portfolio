import React , {useState} from 'react'
import { navLinks } from '../constants'

const style = {
  nav: `w-full flex py-6 justify-between items-center fixed backdrop-blur-2xl z-[999] animate__animated animate__fadeInDown animate__slower   `,
  ul: `list-none flex md:justify-end justify-center flex-1 px-6`,
  li: `cursor-pointer mr-3 text-[#611C35]`,
  a: `ss:text-[14px] text-[10px] border-[1px] p-[7px] rounded-full border-[#611C35] hover:bg-[#611C35] hover:text-[#D7E8BA] ease-in duration-200`,
}

const Navbar = () => {
  return (
    <div >
       <nav className={` ${style.nav} `} >
      <ul className={` ${style.ul} `}>
      {navLinks.map((nav) => (
        <li key={nav.id} className={` ${style.li} `}>
          <a href={`#${nav.id}`} className={` ${style.a} `} >
            {nav.title}
          </a>
        </li>
      ))}
      </ul>
    </nav>
    </div>
  )
}

export default Navbar