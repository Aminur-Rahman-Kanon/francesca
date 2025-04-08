import Image from "next/image"
import styles from "./blog.module.css"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "AROMA SCENTED LOVELY CANDLE",
      image: "/placeholder.svg?height=300&width=400",
      date: "JULY 2, 2021",
      categories: ["MASSAGE", "RELAX"],
      author: "Leslie Pickett",
    },
    {
      id: 2,
      title: "LONG DRIED PRICKLY CACTUS",
      image: "/placeholder.svg?height=300&width=400",
      date: "JULY 2, 2021",
      categories: ["MASSAGE", "RELAX"],
      author: "Leslie Pickett",
    },
    {
      id: 3,
      title: "TOP SKIN CARE TIPS FOR SENSITIVE SKIN",
      image: "/placeholder.svg?height=300&width=400",
      date: "JULY 2, 2021",
      categories: ["MASSAGE", "RELAX"],
      author: "Leslie Pickett",
    },
  ]

  return (
    <section className={styles.blog}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>TRUE WELLNESS</h2>
        <p className={styles.sectionDescription}>
          Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Ipsum a arcu cursus
          vitae.
        </p>

        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.blogPost}>
              <div className={styles.blogImageContainer}>
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={300}
                  className={styles.blogImage}
                />
              </div>

              <div className={styles.blogMeta}>
                <span className={styles.blogDate}>{post.date}</span>
                <span className={styles.blogCategories}>{post.categories.join(", ")}</span>
              </div>

              <h3 className={styles.blogTitle}>{post.title}</h3>
              <p className={styles.blogAuthor}>By {post.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

