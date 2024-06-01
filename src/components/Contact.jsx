import React from "react"
import styles from "../style"
import { useState } from "react"

const style = {
  sec: `bg-[#D7E8BA] text-[#611C35] ${styles.paddingY}`,
  h1: `font-pop sm:text-[46px] text-[32px] ss:text-[26px] xs:text-[24px] xxs:text-[22px] text-[#611C35] pb-4`,
  form: `py-2 rounded-lg`,
  label: `block font-medium mb-2`,
  input: `form-input rounded-md w-full py-2 px-3  leading-5 bg-[#611C35] text-[#D7E8BA] placeholder-[#D7E8BA] `,
  button: `bg-[#611C35] text-[#D7E8BA] py-2 px-4 rounded-md mt-3`,
}

const Contact = () => {
  return (
    <section className={`${styles.paddingX} ${style.sec} `} id="contact">
      <h1 className={` ${style.h1} `}>OUT HERE WE GET THINGS DONE:</h1>
      <form
        action="https://formspree.io/f/xbjedkko"
        method="POST"
        className={` ${style.form} `}
      >
        <label className={` ${style.label} `}>
          Who's this:
          <input
            className={`${style.input}`}
            placeholder="Your Name.."
            type="text"
            name="username"
          />
        </label>
        <label className={`${style.label}`}>
          Your E-mail:
          <input
            className={`${style.input}`}
            placeholder="Your E-mail.."
            type="email"
            name="Email"
          />
        </label>
        <label className={`${style.label}`}>
          What's up !!
          <input
            className={`${style.input}`}
            placeholder="Your message for me.."
            type="text"
            name="message"
          />
        </label>
        <button className={`${style.button}`} type="submit" value="send">
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact
