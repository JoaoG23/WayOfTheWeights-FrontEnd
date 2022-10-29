import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Components
import {
  RegisterContainer,
  LoginContainer,
  Form,
  ContainerMain,
  Input,
} from "./styles";
import DarkButton from "../../Components/Buttons/ButtonDark";
import ModalSucesso from "../../Components/Modais/ModalSucesso";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";

// Services
import { endpoint } from "../../services/endpoint";
import RedFont from "../../Components/FontColor/RedFont";
// Tipagens

const Registrarse: React.FC = () => {

  const navigate = useNavigate();
  // Auxiliars
  function sumirModais(setadorModais: any) {
    setTimeout(() => {
      setadorModais(null);
    }, 3000);
  }
  function navegarAtePagina(caminho: string) {
    setTimeout(() => {
      window.location.assign(caminho);
    }, 3000);
  }

  const [dados, setDados] = useState<any | null>(null);
  const [isCarregando, setIsCarregando] = useState(false);
  const [error, setError] = useState<any | null>(null);

  async function registrar(data: object) {
    setIsCarregando(true);
    try {
      const response = await endpoint.post("/api/auth/register", data);

      setDados(response.data);

      sumirModais(setDados);
      navegarAtePagina("/");
    } catch (error) {
      setError(error);
      sumirModais(setError);

      console.error(error);
    } finally {
      setIsCarregando(false);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <ContainerMain>
      <div></div>
      <LoginContainer>
        <div>
          <img width={"200px"} src="./assets/logo.png"></img>
        </div>
        <Form
          onSubmit={handleSubmit(
            async (body: object) => await registrar(body)
          )}
        >
          <Input
            type="text"
            placeholder={"Seu nome"}
            {...register("name", { required: true })}
          ></Input>
          {errors.name?.type === "required" && (
            <RedFont>O nome está vazio! Preencha por por gentileza</RedFont>
          )}
          <Input
            type="text"
            placeholder={"Usuário"}
            {...register("userName", { required: true })}
          ></Input>
          {errors.userName?.type === "required" && (
            <RedFont>Usuario vazio! Preencha por por gentileza</RedFont>
          )}
          <Input
            type="password"
            placeholder={"Senha"}
            {...register("password", { required: true })}
          ></Input>
          {errors.password?.type === "required" && (
            <RedFont>Senha vazia! Preencha por por gentileza</RedFont>
          )}
          
          <Input
            type="text"
            placeholder={"Seu Telefone"}
            {...register("phonenumber", { required: true })}
          ></Input>
          {errors.phonenumber?.type === "required" && (
            <RedFont>O telefone está vazio! Preencha por por gentileza</RedFont>
          )}
          <Input
            type="text"
            placeholder={"Seu e-mail"}
            {...register("email", { required: true })}
          ></Input>
          {errors.email?.type === "required" && (
            <RedFont>O e-mail está vazio! Preencha por por gentileza</RedFont>
          )}
          <DarkButton>Registrar</DarkButton>
        </Form>
        <RegisterContainer>
          {dados && <ModalSucesso>{dados?.msg}</ModalSucesso>}
          {isCarregando && <ModalCarregando />}
          {error && <ModalErro>{error?.response?.data?.msg}</ModalErro>}
          <p>Para clique para voltar</p>
          <DarkButton onClick={ () => navigate('/')}>Voltar</DarkButton>
        </RegisterContainer>
      </LoginContainer>
    </ContainerMain>
  );
};

export default Registrarse;