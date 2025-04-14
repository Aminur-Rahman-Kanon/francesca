import React from 'react';
import styles from './guidelines.module.css';
import Image from 'next/image';
import Link from 'next/link';


const Guidelines = () => {
    return (
        <div className={styles.guidelines}>
            <div className={styles.top}>
                <h2 className={styles.headingLarge}>please read the guidelines before booking with me</h2>
            </div>

            <div className={styles.bottom}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/others/f_3.jpg'} alt='francesca massage guidelines' height={0} width={0} className={styles.img} unoptimized quality={100}/>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.textSmall}>This guidance is evolved from my approach to sensual massage. If you follow it, then your session will be a pleasure. It you cannot stay within this guidance, I am not the massuese for you.</p>
                    <p className={styles.textSmall}>If you work with in this guidance you will have a splendid experience that you will want to repeat.</p>
                    <p className={styles.textSmall}>I offer sensual massage to ADULTS  and nothing more. No matter how beautiful, endowed or rich you are. This is never negotiable. Ever.</p>
                    <p className={styles.textSmall}>Be on time for your appointment. If early, rest up somewhere until the time. If you are going to be late, let me know by message as soon as possible. If you are too late I may have to cancel or shorten your appointment to avoid impacting other clients.</p>
                    <div className={styles.warning}>
                        <h3 className={styles.headingMedium}>I strongly recommend to read through my guidelines for maximum sensations</h3>
                        <Link href={'/guidelines'} className={styles.link}>Read the guidelines</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guidelines;
