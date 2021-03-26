import React from "react"
import Layout from "../components/layout"
import Cover from "../sections/Cover"
import About from "../sections/About"
import Services from "../sections/Services"
import Photos from "../sections/Photos"
import Reviews from "../sections/Reviews"
import Contact from "../sections/Contact"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Cover />
    <About />
    <Photos />
    <Services />
    <Reviews />
    <Contact />
  </Layout>
)

export default IndexPage
