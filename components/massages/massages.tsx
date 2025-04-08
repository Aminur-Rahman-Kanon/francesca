import React from 'react';
import Image from 'next/image';
import styles from './massages.module.css';
import Link from 'next/link';

const Massages = () => {
    return (
        <div className={styles.massages}>
            <div className={styles.top}>
                <h2 className={styles.headingWhiteLarge}>TREATMENTS</h2>
                <p className={styles.textSmall}>This is just an introduction to my treatments, please go to my Therapies Page for more information.</p>
            </div>
            
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src={'/images/massage/trantric.jpg'} alt='trantric massage' width={0} height={0} style={{width: '100%', height: '100%', objectFit: 'cover'}} unoptimized={true} quality={100}/>
                    </div>
                    <div className={styles.banner}>
                        <h2 className={styles.headingWhiteLarge}>TRANTRIC MASSAGE</h2>
                        <p className={styles.textSmall}>
                            Your experience will include a professional full body massage. It can include elements of sport massage and deep tissue work. Once you are relaxed it moves on to a body sliding phase which includes the front and back of you (and me!), followed by a guided mutual touch
                            phase where I will guide your hands on my body. (My Xxlyder Experience also includes body sliding but NO MUTUAL TOUCH)
                            The Experience will conclude with a yoni or lingham massage unless you wish to exclude this.
                            It is the most intimate and sensual massage.
                            Many of my clients book their next Experience before they leave!
                        </p>
                        <Link href='/treatments/trantric' className={styles.link}>BOOK TRANTRIC</Link>
                    </div>
                </div>

                <div className={styles.itemFlip}>
                    <div className={styles.banner}>
                        <h2 className={styles.headingWhiteLarge}>XXLYDER MASSAGE</h2>
                        <p className={styles.textSmall}>
                            My Xxlyder Experience is available to truly adventurous ladies and gentlemen. It is fully naturist - both of us will be naked throughout the session. It is based on Nuru Massage but uses warm oils rather than gel.
                            There is no mutual touching element in this experience.After you have showered you join me in my studio where I will waiting by my professional massage table. With both of us naked and uncovered (undraped) we will start with you seated on the table and I will begin spreading oil over your torso, thighs and genitals so I can delight you by sliding my naked body over yours.
                        </p>
                        <Link href='/treatments/trantric' className={styles.link}>BOOK XXLYDER</Link>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image src={'/images/massage/xxlyder.jpg'} alt='xxlyder massage' width={0} height={0} style={{width: '100%', height: '100%', objectFit: 'cover'}} unoptimized={true} quality={100} />
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src={'/images/massage/b2b.jpg'} alt='trantric massage' width={0} height={0} style={{width: '100%', height: '100%', objectFit: 'cover'}} unoptimized={true} quality={100}/>
                    </div>
                    <div className={styles.banner}>
                        <h2 className={styles.headingWhiteLarge}>SUBEKE STOOL</h2>
                        <p className={styles.textSmall}>
                            The Sukebe Stool is specially designed to facilitate the washing of the genital area.  It originates from Japan which has a long history of Bath Houses, &apos;sento&apos; if a public wash house, or &apos;onsen&apos; if at a hot spring.
                            If you choose the standalone session, I will be nude, as you will be.
                            If you take the &apos;Add-in&apos; option, I will be dressed according to the type of massage you have booked (Lingerie, Topless or Fully Naturist). The time for the Sukebe Experience, around 20 minutes, will reduce the massage time. (eg you book a 1hour massage. The 60 mins total will be divided into 40 mins massaging and 20 mins Sukebe)
                        </p>
                        <Link href='/treatments/trantric' className={styles.link}>BOOK SUBEKE</Link>
                    </div>
                </div>

                <div className={styles.itemFlip}>
                    <div className={styles.banner}>
                        <h2 className={styles.headingWhiteLarge}>SENSUAL MASSAGE</h2>
                        <p className={styles.textSmall}>
                            This video shows your experience of sensual naturist massage with me from your arrival to leaving with a smile on your face! 
                            As I work best with freshly washed bodies, I will ask you to shower first then join me at my massage table.
                            With you seated on my table, I&apos;ll oil all of your body. This allows you to relax with us both being naked and get used to my touch.
                            I will then ask you to lie face down and give your back, shoulders, glutes, thighs and calves a professional massage.
                            With you lying face up, I will continue your massage on your chest, arms, and legs to get you completely relaxed.
                        </p>
                        <Link href='/treatments/trantric' className={styles.link}>BOOK SENSUAL</Link>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image src={'/images/massage/sensual.jpg'} alt='trantric massage' width={0} height={0} style={{width: '100%', height: '100%', objectFit: 'cover'}} unoptimized={true} quality={100}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Massages
