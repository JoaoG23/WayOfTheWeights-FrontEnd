import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container, ImageContainer } from "./styles";
import { buscaDadoUsuarioNaSessao } from "../../../services/buscaDadoUsuarioNaSessao";


const Header: React.FC = () => {

  const { nomeUsuario } =  buscaDadoUsuarioNaSessao();

  const navigate = useNavigate();
  function voltarPaginaAnterior() {
    navigate(-1)
  }
  return (
    <Container>
      <ImageContainer>
        <img src="./assets/icons/header-icons/person.svg"></img>
        <p>{nomeUsuario}</p>
      </ImageContainer>
          <p>Wow</p>
      <ImageContainer role={"button"} onClick={voltarPaginaAnterior}>
        <p>Voltar</p>
        <img src="./assets/icons/header-icons/voltar.svg"></img>
      </ImageContainer>

    </Container>
  );
};
export default Header;
