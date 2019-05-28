import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
          (
            {
              node: {
                data: { Name, Location, Attachments },
              },
            },
            i
          ) => (
            <CardScene key={i}>
              <Card
                title={Name}
                description={Location}
                image={Attachments[0].thumbnails.large.url}
              />
            </CardScene>
          )
        )}
      </Flex>
    </Wrapper>
  )
}
