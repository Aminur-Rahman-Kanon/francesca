"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./social-buttons.module.css"

export default function SocialButtons() {
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true)
      } else {
        setShowTopButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <div className={styles.socialButtons}>
        <button className={styles.socialButton}>⌕</button>
        <Link href="/cart" className={styles.cartButton}>
          🛒
        </Link>
      </div>

      {showTopButton && (
        <button onClick={scrollToTop} className={styles.topButton}>
          Top
        </button>
      )}
    </>
  )
}

