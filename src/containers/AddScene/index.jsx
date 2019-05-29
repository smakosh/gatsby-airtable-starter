import React from "react"
import SEO from "components/common/SEO"
import SceneForm from "components/common/SceneForm"
import Container from "components/common/Container"

export default () => {
  return (
    <Container full>
      <SEO title="Add new Scene" />
      <SceneForm />
    </Container>
  )
}
