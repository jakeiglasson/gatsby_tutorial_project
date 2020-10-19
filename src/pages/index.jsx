import React, { Component } from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/Button"

export default class extends Component {
  render() {
    return (
      <Layout>
        <h1>Hello from Gatsby!</h1>
        <ExampleButton>click me</ExampleButton>
      </Layout>
    )
  }
}
