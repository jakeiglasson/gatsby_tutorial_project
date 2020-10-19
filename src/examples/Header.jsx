import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
query FirstQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { age, name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h4>Title: {title}</h4>
      <h4>Author: {name}</h4>
      <h4>Author Age: {age}</h4>
    </div>
  )
}

export default Header
