"use client"
import { AlignCenter } from 'lucide-react'
import Link from "next/link"
import styles from "./header.module.css"
import { useContextProvider } from '../contextProvider/contextProvider'

export default function Header() {

  const context = useContextProvider()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.mobileMenu} onClick={context?.openSideDrawer}>
          <AlignCenter />
        </div>
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

