import React from "react"
import Layout from "components/common/Layout"
import Scenes from "staticContainers/Scenes"
import SEO from "components/common/SEO"
import Header from "components/theme/Header"

export default () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Scenes />
  </Layout>
)
