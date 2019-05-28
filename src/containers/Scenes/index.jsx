import React from "react"
import useFetchScenes from "hooks/useFetchScenes"
import SEO from "components/common/SEO"
import Container from "components/common/Container"
import Card from "components/common/Card"
import CardSkeleton from "components/common/Loaders/CardSkeleton"
import { Wrapper, Flex, CardScene } from "./styles"

export default () => {
  const [loading, data, errors] = useFetchScenes()

  if (errors) {
    console.log(errors)
    return <p>Something went wrong</p>
  }

  return (
    <Wrapper as={Container}>
      <SEO title={loading ? "Loading..." : "Scenes"} />
      <h2>Dynamic Scenes</h2>
      <Flex>
        {loading ? (
          <>
            <CardScene>
              <CardSkeleton />
            </CardScene>
            <CardScene>
              <CardSkeleton />
            </CardScene>
            <CardScene>
              <CardSkeleton />
            </CardScene>
          </>
        ) : (
          data.map(({ fields: { Name, Location, Attachments } }, i) => (
            <CardScene key={i}>
              <Card
                title={Name}
                description={Location}
                image={Attachments[0].thumbnails.large.url}
              />
            </CardScene>
          ))
        )}
      </Flex>
    </Wrapper>
  )
}
