import styles from "./services.module.css"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description: "We create beautiful, responsive websites that engage your audience and drive results.",
      icon: "🎨",
    },
    {
      id: 2,
      title: "Web Development",
      description: "Our developers build robust, scalable web applications using the latest technologies.",
      icon: "💻",
    },
    {
      id: 3,
      title: "Branding",
      description: "We develop comprehensive brand identities that communicate your values and vision.",
      icon: "✨",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "We design intuitive user interfaces and experiences that delight your customers.",
      icon: "📱",
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "We create and execute digital marketing strategies that grow your business.",
      icon: "📈",
    },
    {
      id: 6,
      title: "Content Creation",
      description: "We produce engaging content that tells your story and connects with your audience.",
      icon: "📝",
    },
  ]

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>What We Do</span>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.description}>
            We offer a wide range of services to help your business succeed in the digital world
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

