"use client"
import { AlignCenter } from 'lucide-react'
import Link from "next/link"
import styles from "./header.module.css"
import { useContextProvider } from '../contextProvider/contextProvider'
import Image from 'next/image'

export default function Header() {

  const context = useContextProvider()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
              <Image src={'/images/logo/logo_4.png'} alt='francesca' height={0} width={0} unoptimized quality={100} className={styles.img} />
            </Link>
            <div className={styles.mobileMenu} onClick={context?.openSideDrawer}>
              <AlignCenter />
            </div>
          </div>
          <nav className={styles.navigation}>
            <Link href="/" className={`${styles.navLink} ${styles.active}`}>
              HOME
            </Link>
            <Link href="/pages" className={styles.navLink}>
              TREATMENTS
            </Link>
            <Link href="/portfolio" className={styles.navLink}>
              GUIDELINES
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
      </div>
    </header>
  )
}

