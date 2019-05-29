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
          <Link to="/app/add/">Add new Scene</Link>
          <Link to="/app/">Scenes</Link>
          <button
            type="button"
            className="btn btn-rounded gradient-green"
            onClick={logout}
          >
            Logout
          </button>
        </Links>
      ) : (
        <Links>
          <Link to="/app/">App</Link>
        </Links>
      )}
    </Flex>
  </Wrapper>
)
