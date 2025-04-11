import React from 'react'
import Image from 'next/image';
import styles from './bookAppoinement.module.css';
import Link from 'next/link';

const BookAppointment = () => {
  return (
    <div className={styles.bookAppoinement}>
        <div className={styles.top}>
            <h2 className={styles.headingLarge}>I&apos;m JUST A CALL AWAY</h2>
            <p className={styles.textMedium}>Don&apos;t miss this opportunity</p>
        </div>
        <div className={styles.container}>
            <div className={styles.banner}>
                <p className={styles.textSmall}>To make a massage appointment call or text me on phone or Whatsapp</p>
                <a href='tel:00447826761268' className={styles.link}>+447826761268</a>
                <p className={styles.textSmall}>GATEWICK, UK</p>
                <p className={styles.textSmall}>Or</p>
                <p className={styles.textSmall}>Fill out this form</p>
                <p className={styles.textSmall}>Alternatively visit</p>
                <Link href={'https://admireme.vip/francescacare'} className={styles.link}>My AdmireMe Page</Link>
            </div>
            <div className={styles.avatar}>
                <Image src={'/images/others/f_1.jpeg'} alt='francesca' width={0} height={0} style={{width: '100%', height: '100%', objectFit: 'cover'}} unoptimized={true} quality={100}/>
            </div>
        </div>
    </div>
  )
}

export default BookAppointment
