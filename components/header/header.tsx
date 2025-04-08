"use client"

import Link from "next/link"
import styles from "./header.module.css"

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <Link href="/" className={`${styles.navLink} ${styles.active}`}>
            HOME
          </Link>
          <Link href="/pages" className={styles.navLink}>
            TREATMENTS
          </Link>
          <Link href="/portfolio" className={styles.navLink}>
            TANTRA
          </Link>

          <Link href="/" className={styles.logo}>
            FRANCESCA
          </Link>

          <Link href="/blog" className={styles.navLink}>
            PRICING
          </Link>
          <Link href="/shop" className={styles.navLink}>
            BLOG
          </Link>
          <Link href="/landing" className={styles.navLink}>
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  )
}

