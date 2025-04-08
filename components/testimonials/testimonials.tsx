import Image from "next/image"
import styles from "./testimonials.module.css"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      quote:
        "Working with this team was a game-changer for our business. They delivered a website that exceeded our expectations and has significantly improved our online presence.",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director, GrowthCo",
      quote:
        "The attention to detail and creativity they brought to our branding project was impressive. They truly understood our vision and translated it perfectly.",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Founder, StyleHouse",
      quote:
        "From concept to execution, they guided us through the entire process with professionalism and expertise. The final product has received countless compliments.",
      image: "/placeholder.svg",
    },
  ]

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Testimonials</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.description}>
            Don&apos;t just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.quote}>&apos;"</div>
              <p className={styles.testimonialText}>{testimonial.quote}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorImage}>
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className={styles.image}
                  />
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <span className={styles.authorPosition}>{testimonial.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

