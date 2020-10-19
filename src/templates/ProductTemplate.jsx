import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"

const ProductTemplate = ({ data }) => {
  const {
    product: {
      title,
      price,
      info: { info },
      image: { fixed },
    },
  } = data

  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">back to products</Link>
        <h1>single product: {title}</h1>
      </div>
      <section className="single-product">
        <article>
          <Image fixed={fixed} alt={title}></Image>
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>add to cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      info {
        info
      }
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ProductTemplate
