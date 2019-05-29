import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "components/common/SEO"
import Container from "components/common/Container"
import Card from "components/common/Card"
import { Wrapper, Flex, CardScene } from "./styles"

export default () => {
  const { airtable } = useStaticQuery(graphql`
    query {
      airtable: allAirtable(filter: { table: { eq: "Scenes" } }) {
        edges {
          node {
            id
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
      }
    }
  `)

  return (
    <Wrapper as={Container}>
      <SEO title="Scenes" />
      <h1>Static Scenes</h1>
      <Flex>
        {airtable.edges.map(
          ({
            node: {
              id,
              data: { Name, Location, Attachments },
            },
          }) => (
            <CardScene key={id}>
              <Link to={id}>
                <Card
                  title={Name}
                  description={Location}
                  image={Attachments[0].thumbnails.large.url}
                />
              </Link>
            </CardScene>
          )
        )}
      </Flex>
    </Wrapper>
  )
}
