import Image from "next/image"
import styles from "./about.module.css"

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image src="/placeholder.svg" alt="About us" width={500} height={600} className={styles.image} />
        </div>
        <div className={styles.content}>
          <span className={styles.subtitle}>About Us</span>
          <h2 className={styles.title}>We create digital experiences that stand out</h2>
          <p className={styles.description}>
            We are a creative agency specializing in web design, development, branding, and digital marketing. With over
            10 years of experience, we'&apos;ve helped businesses of all sizes achieve their goals through innovative digital
            solutions.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>250+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>180+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

