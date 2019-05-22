import React from "react"
import Layout from "../components/layout"
import Scenes from "../components/Scenes"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Scenes</h1>
    <Scenes />
  </Layout>
)

export default IndexPage
