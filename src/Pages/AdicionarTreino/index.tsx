import { Link } from "react-router-dom";
import Card from "../../Components/Card";
import { Container } from "./styles";

import { buscaDadoUsuarioNaSessao } from "../../services/buscaDadoUsuarioNaSessao";
import { useFetch } from "../../services/api";

import { TreinoUsuario } from "../../types/TreinosUsuario";

import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";
import LightButton from "../../Components/Buttons/LightButton";
import DarkSquareButton from "../../Components/Buttons/DarkButtonSquare";

const { idConvertido } = buscaDadoUsuarioNaSessao();
const Treinos = () => {

  
  const {
    dados: treinos,
    isCarregando,
    error,
  } = useFetch<TreinoUsuario[]>(`/api/training/user/${idConvertido}`, {
    method: "get",
  });

  return (
    <div>
      <Link to={"/treino/adicionar"}>
        <LightButton>
          <h3>Adicionar +</h3>
        </LightButton>
      </Link>
      <Container>
        {treinos?.map((treino) => (
          <Link to={`/exercicios-treino/${treino?.id}`} key={treino?.id}>
            <Card>
              <section>
                <img src="./assets/bikeSmall.svg"></img>
                <h3>{treino?.title}</h3>
                <h5>{treino?.description}</h5>
              </section>
              <div>
                <LightButton>
                  <h1>✖</h1>
                </LightButton>
                <DarkSquareButton>
                  <Link to={`/treino/${treino?.id}`}>
                    <h1>✎</h1>
                  </Link>
                </DarkSquareButton>
              </div>
            </Card>
          </Link>
        ))}
        {isCarregando && <ModalCarregando />}
        {error && (
          <ModalErro>
            <h4>Houve um erro ou faça login novamente</h4>
          </ModalErro>
        )}
      </Container>
    </div>
  );
};

export default Treinos;
