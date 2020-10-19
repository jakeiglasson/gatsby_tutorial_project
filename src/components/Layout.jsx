import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./css/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
