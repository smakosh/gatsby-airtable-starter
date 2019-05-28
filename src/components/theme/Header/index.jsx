import React from "react"
import { Link } from "gatsby"
import Container from "components/common/Container"
import { Wrapper, Flex, Links } from "./styles"

export default ({ isLoggedIn, logout }) => (
  <Wrapper>
    <Flex as={Container}>
      <Link to="/">
        <h1>VideoGraphy App</h1>
      </Link>
      {isLoggedIn ? (
        <Links>
          <Link to="/app/">Scenes</Link>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </Links>
      ) : (
        <Link to="/app/">App</Link>
      )}
    </Flex>
  </Wrapper>
)
