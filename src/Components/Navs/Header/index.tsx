import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { Container, ImageContainer } from "./styles";
import { buscaDadoUsuarioNaSessao } from "../../../services/buscaDadoUsuarioNaSessao";
import { limparSessaoUsuario } from "../../../services/limparSessaoUsuario";

const Header: React.FC = () => {
  const { nomeUsuario } = buscaDadoUsuarioNaSessao();

  const navigate = useNavigate();
  function voltarPaginaAnterior() {
    navigate(-1);
  }
  return (
    <Container>
      <Link to={"/usuario-logado"}>
        <ImageContainer>
          <img src="./assets/icons/header-icons/person.svg" alt="perfil"></img>
          <p>{nomeUsuario}</p>
        </ImageContainer>
      </Link>
      <p>Wow</p>
      <ImageContainer role={"button"} onClick={ () => {
        voltarPaginaAnterior();
        limparSessaoUsuario();
      }}>
        <p>Voltar</p>
        <img src="./assets/icons/header-icons/voltar.svg" alt="voltar"></img>
      </ImageContainer>
    </Container>
  );
};
export default Header;
