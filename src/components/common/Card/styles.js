import styled from "styled-components"

export const StyledCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
  transition: all 0.3s ease 0s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 8px 26px 0px;
    transition: all 0.3s ease 0s;
  }
`

export const Title = styled.div`
  padding: 1rem;

  h3 {
    margin: 0;
  }

  button:first-child {
    margin-right: 1rem;
  }
`

export const Description = styled.div`
  padding: 1rem;

  p {
    margin: 0;
    line-height: 1.6;
  }
`

export const Thumbnail = styled.div`
  img {
    width: 100%;
    display: block;
  }
`
