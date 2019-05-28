import React from "react"
import SEO from "components/common/SEO"
import Container from "components/common/Container"
import Layout from "components/common/Layout"
import Header from "components/theme/Header"
import { Link } from "gatsby"
import styled from "styled-components"

export default () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header />
    <Wrapper as={Container}>
      <Center>
        <h4>404 - Page Not Found</h4>
        <Link to="/">Go Back Home</Link>
      </Center>
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`

const Center = styled.div`
  align-self: center;
  text-align: center;
`
