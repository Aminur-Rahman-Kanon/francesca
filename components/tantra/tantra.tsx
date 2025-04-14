import React from 'react';
import styles from './tantra.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Tantra = () => {
    return (
        <div className={styles.tantra}>
            <div className={styles.top}>
                <h2 className={styles.headingLarge}>I follow the essence of Tantra, updated to modern, Western life.</h2>
            </div>

            <div className={styles.bottom}>
                <div className={styles.imgContainer}>
                    <Image src={'/images/others/tantra.jpg'} alt='tantra' className={styles.img} height={0} width={0} unoptimized quality={100} />
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.textSmall}>Tantra encourages you to move outside your boundaries, social pressures of conformity and discover your true self.</p>
                    <p className={styles.textSmall}>An integral part of Tantra is caring for the body and mind. Key to this are the centres on energy - the Chakras. Each of the seven chakras is responsible for part of your wellbeing, everything from alertness to sexuality.</p>
                    <p className={styles.textSmall}>Tantra has no place for negative body image and encourages you to be your best in all parts of your life.</p>
                    <Link href={'/treatments'} className={styles.link}>FIND OUT MORE</Link>
                </div>
            </div>
        </div>
    )
}

export default Tantra;
