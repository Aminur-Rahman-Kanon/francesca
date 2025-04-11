import Link from "next/link"
import styles from "./footer.module.css"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Link href="/" className={styles.logoLink}>
              <Image src={'/images/logo/logo_4.png'} alt="francesca" height={0} width={0} unoptimized quality={100} className={styles.logo} />
            </Link>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>CONTACT</h3>
            <ul className={styles.contactList}>
              <li>
                <Link href="tel:+1123456789">+1123456789</Link>
              </li>
              <li>
                <Link href="mailto:CHEA@QODEINTERACTIVE.COM">CHEA@QODEINTERACTIVE.COM</Link>
              </li>
              <li>82 RUE ROYALE, PARIS</li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>OPEN HOURS</h3>
            <ul className={styles.hoursList}>
              <li>WEEKDAYS: 10AM - 9PM</li>
              <li>SATURDAY: 10AM - 6PM</li>
              <li>SUNDAY CLOSED</li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>CONTACT</h3>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Your e-mail" className={styles.emailInput} />
              <button className={styles.submitButton}>→</button>
            </div>
            <div className={styles.socialLinks}>
              <Link href="#" className={styles.socialLink}>
                Fb
              </Link>
              <Link href="#" className={styles.socialLink}>
                Ln
              </Link>
              <Link href="#" className={styles.socialLink}>
                Be
              </Link>
              <Link href="#" className={styles.socialLink}>
                Ig
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>© 2021 Qode Interactive. All Rights Reserved</div>
      </div>
    </footer>
  )
}

