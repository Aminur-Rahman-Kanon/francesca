'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "./offers.module.css"

export default function Offers() {

  const [play, setPlay] = useState<boolean>(false);

  const playVideoHandler = ():void => {
    const video = document.getElementById('video') as HTMLVideoElement;

    if (!video) return;

    if (!play){
      video.play()
    }
    else {
      video.pause()
    }
  }

  // const image:string = play ? '/image/'

  useEffect(() => {
    const video = document.getElementById('video') as HTMLVideoElement;
    video?.addEventListener('play', () => setPlay(true));
    video?.addEventListener('pause', () => setPlay(false));
    video?.addEventListener('ended', () => setPlay(false));
  }, [])

  return (
    <section className={styles.offers}>
      <h2 className={styles.headingWhiteLarge}>MASSAGE MOMENT</h2>
      <div className={styles.videoSection}>
        <div className={styles.videoContainer}>
          <video itemType="video/mp4" id="video" playsInline muted controls className={styles.video}>
            <source src="/video/test.mp4"></source>
            Your browser doesn&apos;t support video
          </video>
          <button className={styles.playButton} onClick={playVideoHandler}>
            <Image src={play ? '/images/others/pause.png' : '/images/others/play.png'} width={100} height={100} alt="play button"/>
          </button>
        </div>
      </div>

      {/* <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          AMAZING <span>OFFERS</span>
        </h2>
        <p className={styles.sectionDescription}>
          Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Ipsum a arcu cursus
          vitae.
        </p>

        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3 className={styles.pricingTitle}>BASIC</h3>
            <div className={styles.pricingPrice}>
              <span className={styles.price}>35$</span>
              <span className={styles.period}>/Month</span>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>Aliquam nulla facil ferment</li>
              <li>Odio eu feugiat preti nibh.</li>
              <li>Lacus suspe fauci posuere.</li>
            </ul>
            <Link href="#" className={styles.viewMoreLink}>
              View more
            </Link>
          </div>

          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <h3 className={styles.pricingTitle}>PREMIUM</h3>
            <div className={styles.pricingPrice}>
              <span className={styles.price}>86$</span>
              <span className={styles.period}>/Month</span>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>Aliquam nulla facil ferment</li>
              <li>Odio eu feugiat preti nibh.</li>
              <li>Lacus suspe fauci posuere.</li>
            </ul>
            <Link href="#" className={styles.viewMoreLink}>
              View more
            </Link>
          </div>

          <div className={styles.pricingCard}>
            <h3 className={styles.pricingTitle}>STANDARD</h3>
            <div className={styles.pricingPrice}>
              <span className={styles.price}>50$</span>
              <span className={styles.period}>/Month</span>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>Aliquam nulla facil ferment</li>
              <li>Odio eu feugiat preti nibh.</li>
              <li>Lacus suspe fauci posuere.</li>
            </ul>
            <Link href="#" className={styles.viewMoreLink}>
              View more
            </Link>
          </div>
        </div>
      </div> */}
    </section>
  )
}

