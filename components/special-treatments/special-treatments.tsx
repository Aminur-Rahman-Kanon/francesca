import Image from "next/image"
import Link from "next/link"
import styles from "./special-treatments.module.css"

export default function SpecialTreatments() {
  return (
    <section className={styles.specialTreatments}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/treatments/treatment_1.png"
              alt="Woman in bathtub"
              width={600}
              height={500}
              className={styles.image}
            />
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.title}>
              SPECIAL <br />
              <span className={styles.italic}>TREATMENTS</span> TO <br />
              RELAX YOUR MIND <br />
              SOUL AND <span className={styles.italic}>BODY</span>
            </h2>

            <p className={styles.description}>
              Nisi est sit amet facilisis magna etiam tempor orci. At imperdict dui accumsan sit amet nulla facilisi
              morbi.
            </p>

            <Link href="#" className={styles.viewMoreLink}>
              View more
            </Link>
          </div>
        </div>

        <div className={styles.partnersLogos}>
          <div className={styles.logoItem}>
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Vector Logo"
              width={120}
              height={60}
              className={styles.logo}
            />
          </div>
          <div className={styles.logoItem}>
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Partner Logo"
              width={120}
              height={60}
              className={styles.logo}
            />
          </div>
          <div className={styles.logoItem}>
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Magnolia Logo"
              width={120}
              height={60}
              className={styles.logo}
            />
          </div>
          <div className={styles.logoItem}>
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Energy Logo"
              width={120}
              height={60}
              className={styles.logo}
            />
          </div>
          <div className={styles.logoItem}>
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Wellness Logo"
              width={120}
              height={60}
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

