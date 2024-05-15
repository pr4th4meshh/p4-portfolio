import React, { useState } from "react"
import { useEffect } from "react"

const style = {
  div: `fixed bottom-0 right-0 m-6`,
  btn: `bg-[#007F5F] text-[#AACC00] py-2 px-4 rounded-full`,
}

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className={` ${style.div} ${showButton ? "" : "hidden"}`}>
      <button onClick={handleClick} className={`${style.btn}`}>
        ↑
      </button>
    </div>
  )
}
export default ScrollButton
