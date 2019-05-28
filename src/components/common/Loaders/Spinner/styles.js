import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Spin = styled.div`
  align-self: center;
  width: 45px;
  height: 45px;
  display: inline-block;
  padding: 0px;
  border-radius: 100%;
  border: 5px solid;
  border-top-color: rgba(21, 20, 54, 1);
  border-bottom-color: rgba(255, 255, 255, 0.3);
  border-left-color: rgba(21, 20, 54, 1);
  border-right-color: rgba(255, 255, 255, 0.3);
  animation: loader4 1s ease-in-out infinite;

  @keyframes loader4 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
