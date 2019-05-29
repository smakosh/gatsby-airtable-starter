import React from "react"
import Container from "components/common/Container"
import Card from "components/common/Card"
import { Wrapper, CardScene } from "./styles"

export default ({ title, description, image }) => (
  <Wrapper as={Container}>
    <h2>{title}</h2>
    <CardScene>
      <Card title={title} description={description} image={image} />
    </CardScene>
  </Wrapper>
)
