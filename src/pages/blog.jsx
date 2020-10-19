import React from "react"
import Layout from "../components/Layout"
import styles from "./css/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1> Blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          totam nobis, repellendus, voluptas officia mollitia optio minus quae
          rem facere repellat nemo dignissimos iste enim? Inventore veniam nisi
          alias adipisci.
        </p>
      </div>
    </Layout>
  )
}

export default blog
