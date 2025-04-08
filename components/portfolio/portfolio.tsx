import Image from "next/image"
import styles from "./portfolio.module.css"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Brand Identity",
      category: "Branding",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "Web Development",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Mobile App Design",
      category: "UI/UX",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Product Photography",
      category: "Photography",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Marketing Campaign",
      category: "Marketing",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Corporate Website",
      category: "Web Development",
      image: "/placeholder.svg",
    },
  ]

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Our Work</span>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.description}>
            Explore our selected projects showcasing our expertise and creative approach
          </p>
        </div>

        <div className={styles.filters}>
          <button className={`${styles.filterButton} ${styles.active}`}>All</button>
          <button className={styles.filterButton}>Branding</button>
          <button className={styles.filterButton}>Web Development</button>
          <button className={styles.filterButton}>UI/UX</button>
          <button className={styles.filterButton}>Photography</button>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.projectInfo}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

