import Image from "next/image"
// import Link from "next/link"
import styles from "./treatments.module.css"

export default function Treatments() {
  return (
    <section className={styles.treatments}>
      <div className={styles.container}>
        <div className={styles.quote}>
          <span className={styles.quoteSymbol}>&apos;</span>
          <h1 className={styles.quoteText}>
            Francesca, A Genuine English Blonde Massuese
          </h1>
        </div>

        <div className={styles.treatmentsGrid}>
          <div className={styles.treatmentItem}>
            <div className={styles.treatmentImageWrapper}>
              <Image
                src="/images/others/f_2.jpg"
                alt="Treatments"
                width={600}
                height={600}
                className={styles.treatmentImage}
              />
              <div className={styles.treatmentInfo}>
                <h3 className={styles.treatmentTitle}>ABOUT FRANCESCA</h3>
                {/* <Link href="https://chea.qodeinteractive.com/portfolio-item/sauna/" className={styles.treatmentLink}>
                  https://chea.qodeinteractive.com/portfolio-item/sauna/
                </Link> */}
              </div>
            </div>
          </div>

          <div className={styles.treatmentItem}>
            <div className={styles.treatmentImageWrapper}>
              <Image
                src="/images/treatments/treatment_1.png"
                alt="Thermal Bath"
                width={600}
                height={600}
                className={styles.treatmentImage}
              />
              <div className={styles.treatmentInfo}>
                <h3 className={styles.treatmentTitle}>READ MY BLOGS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

