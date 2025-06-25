import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const FadeInAnimation = ({
  children,
  direction = "left",
  delay = 0,
  duration = 1,
  className = "",
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
      y: direction === "up" ? 200 : direction === "down" ? -200 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeInAnimation
