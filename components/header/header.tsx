"use client"
import { AlignCenter } from 'lucide-react'
import Link from "next/link"
import styles from "./header.module.css"
import { useContextProvider } from '../contextProvider/contextProvider'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {

  const context = useContextProvider()
  
  const path = usePathname();

  console.log(path)

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
            <Link href="/" className={ path === '/' ? `${styles.navLink} ${styles.active}` : styles.navLink}>
              HOME
            </Link>
            <Link href="/treatments" className={ path === '/treatments' ? `${styles.navLink} ${styles.active}` : styles.navLink}>
              TREATMENTS
            </Link>
            <Link href="/guidelines" className={ path === '/guidelines' ? `${styles.navLink} ${styles.active}` : styles.navLink}>
              GUIDELINES
            </Link>
            <Link href="/pricing" className={ path === '/pricing' ? `${styles.navLink} ${styles.active}` : styles.navLink}>
              PRICING
            </Link>
            <Link href="/blog" className={ path === '/blog' ? `${styles.navLink} ${styles.active}` : styles.navLink}>
              BLOG
            </Link>
            <Link href="/about" className={ path === '/about' ? `${styles.navLink} ${styles.active}` : styles.navLink}>
              ABOUT
            </Link>
          </nav>

        </div>
      </div>
    </header>
  )
}

