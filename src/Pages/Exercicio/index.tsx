import React from "react";
import { useParams } from "react-router-dom";
import { Container, CardAzul } from "./styles";
import Card from "../../Components/Card";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";

import { useFetch } from "../../services/api";
import { sumirDepoisTempo } from "../../services/sumirDepoisTempo";
import { buscaDadoUsuarioNaSessao } from "../../services/buscaDadoUsuarioNaSessao";

import { ExerciciosUsuario } from "../../types/ExerciciosUsuario";
import { AreaGraficoMostraUltima3Evolucoes } from "./AreaGrafico";

const Exercicio: React.FC = () => {
  const { idConvertido } = buscaDadoUsuarioNaSessao();
  const idUsuario = String(idConvertido);

  const { id } = useParams();
  const {
    dados: exercicio,
    isCarregando: isCarregandoExercicios,
    error: exerciciosError,
    setError: setErrorExercicios,
  } = useFetch<ExerciciosUsuario>(`/api/exercice/${id}`, {
    method: "get",
  });

  if (exerciciosError) {
    sumirDepoisTempo(setErrorExercicios);
  }

  return (
    <Container>
      <h2>{exercicio?.description}</h2>
      <CardAzul>
        <div>
          <h3>Sua Carga atual</h3>
          <h1>{exercicio?.weight} Kg</h1>
        </div>
        <img src="/assets/pesosColor.svg" alt="pesos"></img>
      </CardAzul>
      <Card>
        <AreaGraficoMostraUltima3Evolucoes
          idUsuario={idUsuario}
          idExercices={id}
        ></AreaGraficoMostraUltima3Evolucoes>
      </Card>

      {/* Dados Exercicio */}
      {isCarregandoExercicios && <ModalCarregando />}
      {exerciciosError && (
        <ModalErro>
          <p>{exerciciosError?.response?.data?.msg}</p>
        </ModalErro>
      )}
    </Container>
  );
};

export default Exercicio;
