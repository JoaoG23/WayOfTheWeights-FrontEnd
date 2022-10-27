import styled from "styled-components";

export const Container = styled.main`
  padding: 10px;
  display: grid;
  grid-auto-rows: max-content;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  animation: entradaSuave 0.8s;

  @media screen and (max-width: 800px ) {
    grid-template-columns: auto ;
  }
`;

export const AzulFont = styled.b`
  color: #20e5e0;
`;




