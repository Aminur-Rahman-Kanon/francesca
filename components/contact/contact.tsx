import styles from "./contact.module.css"

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Get In Touch</span>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.description}>
            Have a project in mind? Let'&apos;s talk about how we can help bring your ideas to life
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoText}>hello@cheaagency.com</p>
            </div>
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Phone</h3>
              <p className={styles.infoText}>+1 (555) 123-4567</p>
            </div>
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Address</h3>
              <p className={styles.infoText}>123 Design Street, Creative City, 10001</p>
            </div>
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Working Hours</h3>
              <p className={styles.infoText}>Monday - Friday: 9am - 6pm</p>
            </div>
          </div>

          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Subject" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Your Message" className={styles.formTextarea} rows={5} required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

