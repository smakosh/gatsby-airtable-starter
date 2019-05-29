import styled from "styled-components"

export const Wrapper = styled.div`
  background: #2196f3;
  padding: 2rem 0;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
  }

  h1 {
    margin: 0;
    color: #fff;
    font-weight: bold;
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 1rem;
  }

  a:last-child,
  a:first-child {
    margin: unset;
  }

  @media (max-width: 680px) {
    display: none;
  }
`
