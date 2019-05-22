import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {airtable.edges.map(
        (
          {
            node: {
              data: { Name, Location, Attachments },
            },
          },
          i
        ) => (
          <div key={i} style={{ maxWidth: "30%", width: "100%" }}>
            <h4>{Name}</h4>
            <p>{Location}</p>
            <div>
              <img
                style={{ width: "100%" }}
                alt={Name}
                src={Attachments[0].thumbnails.large.url}
              />
            </div>
          </div>
        )
      )}
    </div>
  )
}
