import styled from "styled-components";

export const Container = styled.main`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: block;
  }
  @media screen and (max-width: 330px) {
    display: block;
  }
`;
