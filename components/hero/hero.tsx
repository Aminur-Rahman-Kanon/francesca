import Image from "next/image"
import styles from "./hero.module.css"
import Link from "next/link"
// import hero from '../../public/images/hero/hero.png';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <Image
          src={'/images/hero/hero_1.png'}
          alt="Woman relaxing in bathtub"
          fill
          priority
          className={styles.image}
        />
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>TREAT YOURSELF WITH AN <span className={styles.strong}>SENSUAL MASSAGE</span></h1>
        <Link href={'/booking'} className={styles.btn}>BOOK NOW</Link>
      </div>
    </section>
  )
}

