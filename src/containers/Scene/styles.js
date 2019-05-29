import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const CardScene = styled.div`
  width: 100%;
  max-width: 40%;
  margin: 0 auto;

  @media (max-width: 680px) {
    max-width: 60%;
  }

  @media (max-width: 680px) {
    max-width: 90%;
  }
`;
