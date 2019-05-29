import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 2rem 0;
`

export const Flex = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;

  &:after {
    content: "";
    width: 100%;
    max-width: 30%;

    @media (max-width: 960px) {
      max-width: 100%;
    }
  }
`

export const CardScene = styled.div`
  width: 100%;
  max-width: 30%;
  margin-bottom: 1rem;

  a {
    color: inherit;
  }

  @media (max-width: 960px) {
    max-width: 100%;
  }
`
