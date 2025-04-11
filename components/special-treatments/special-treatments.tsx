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
              width={0}
              height={0}
              className={styles.image}
              unoptimized
              quality={100}
            />
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.title}>RELIEVING MASSAGES</h2>
            <p className={styles.description}>Massage is a great way of relieving the stresses of modern living. A Sensual Massage goes a step futher and relieves other pent up needs for both ladies and gentlemen.</p>
            <p className={styles.description}>With my massages, the sensual stimulation is integrated into the flow of the massage, starting while I relax you with a little teasing. Was that an accidental brush?</p>
            <p className={styles.description}>A little teaser for you! Please let me have your feedback on this video by using my Online Form. Or let me know what you'd like to see on my Massage Website.</p>
            <Link href="#" className={styles.viewMoreLink}>
              View more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

