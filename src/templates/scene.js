import React from "react"
import { graphql } from "gatsby"
import Layout from "components/common/Layout"
import SEO from "components/common/SEO"
import Header from "components/theme/Header"
import Scene from "staticContainers/Scene"

export default ({
  data: {
    airtable: {
      data: { Name, Location, Attachments },
    },
  },
}) => (
  <Layout>
    <SEO title={Name} />
    <Header />
    <Scene
      title={Name}
      description={Location}
      image={Attachments[0].thumbnails.large.url}
    />
  </Layout>
)

export const sceneQuery = graphql`
  query($id: String!) {
    airtable(table: { eq: "Scenes" }, id: { eq: $id }) {
      data {
        Name
        Location
        Attachments {
          thumbnails {
            large {
              url
            }
          }
        }
      }
    }
  }
`
