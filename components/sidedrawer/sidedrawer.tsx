'use client'

import React, { useEffect } from 'react'
import styles from './sidedrawer.module.css'
import { X } from 'lucide-react'
import Link from 'next/link'
// import { motion, AnimatePresence } from 'framer-motion'
import { useContextProvider } from '../contextProvider/contextProvider';
import { usePathname } from 'next/navigation'
import { disableScroll } from '../../utilities/utilities';
import Image from 'next/image'

function SideDrawer() {

    const path = usePathname();

    const context = useContextProvider()

    const enableScroll = () => {
        window.onscroll = null
    }

    useEffect(() => {
        context?.sidedrawer ? disableScroll() : enableScroll()
    }, [context?.sidedrawer])
  
    return (
      <div className={context?.sidedrawer ? `${styles.sidedrawer} ${styles.open}` : styles.sidedrawer}>
        <div className={styles.top}>
            <div className={styles.logo}>
                <Image src={'/images/logo/logo_3.png'} alt='francesca' width={0} height={0} className={styles.img} unoptimized quality={100}/>
            </div>
            <div className={styles.x}onClick={context?.closeSideDrawer}>
                <X className={styles.xBtn}/>
            </div>
        </div>

        <nav className={styles.nav}>
            <Link href={'/'} className={path === '/' ? `${styles.link} ${styles.linkActive}` : styles.link}>HOME</Link>
            <Link href={'/'} className={path === '/treatments' ? `${styles.link} ${styles.linkActive}` : styles.link}>TREATMENTS</Link>
            <Link href={'/'} className={path === '/tantra' ? `${styles.link} ${styles.linkActive}` : styles.link}>TANTRA</Link>
            <Link href={'/'} className={path === '/pricing' ? `${styles.link} ${styles.linkActive}` : styles.link}>PRICING</Link>
            <Link href={'/'} className={path === '/blog' ? `${styles.link} ${styles.linkActive}` : styles.link}>BLOG</Link>
            <Link href={'/'} className={path === '/about' ? `${styles.link} ${styles.linkActive}` : styles.link}>ABOUT</Link>
        </nav>

        <div className={styles.social}>
            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
            </div>
            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
            </div>
            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>
            </div>
            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter-icon lucide-twitter">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
            </div>
        </div>
      </div>
    )
  }

export default SideDrawer;
