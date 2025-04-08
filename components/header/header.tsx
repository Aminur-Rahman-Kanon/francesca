"use client"

import { useState } from "react"
import Link from "next/link"
import styles from "./header.module.css"

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* <div className={styles.searchContainer}>
          <button className={styles.searchButton} onClick={() => setSearchOpen(!searchOpen)}>
            <span className={styles.searchIcon}>⌕</span> Search
          </button>
          {searchOpen && (
            <div className={styles.searchInput}>
              <input type="text" placeholder="Search..." />
            </div>
          )}
        </div> */}

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

