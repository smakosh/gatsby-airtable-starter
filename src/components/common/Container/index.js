import styled from "styled-components";

const Container = styled.div`
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;

  ${({ full }) =>
    full &&
    `
    height: 80vh;
    display: flex;
    justify-content: center;
  `}

  @media (max-width: 1400px) {
    width: 90%;
  }
`;

export default Container;
