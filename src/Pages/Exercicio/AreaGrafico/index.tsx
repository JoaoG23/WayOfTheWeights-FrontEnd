import React from "react";
import { options } from "./data/options";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Area } from "./styles";

import { HistoricoExercicio } from "../../../types/HistoricoExercicio";

import { useFetch } from "../../../services/api";
import { sumirDepoisTempo } from "../../../services/sumirDepoisTempo";
import { retirarSegundosTimestamp } from "../../../services/retirarSegundosTimestamp";

import ModalCarregando from "../../../Components/Modais/ModalCarregando";
import ModalErro from "../../../Components/Modais/ModalErro";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

type Props = {
  idUsuario?: string | number;
  idExercices?: string | number;
};

export const AreaGraficoMostraUltima3Evolucoes: React.FC<Props> = ({
  idUsuario,
  idExercices,
}) => {
  const {
    dados: estatisticas,
    isCarregando: isCarregandoEstatisticas,
    error: estatisticasError,
    setError: serErrorEstatistica,
  } = useFetch<any>(`/api/statistics/lastthree`, {
    method: "get",
    params: {
      userId: idUsuario,
      exerciceId: idExercices,
    },
  });

  const datasAlteracao = estatisticas?.map((dados: HistoricoExercicio) => {
    let semSegundos = retirarSegundosTimestamp(dados?.dateInsert);
    return semSegundos;
  });

  const pesos = estatisticas?.map((dados: HistoricoExercicio) => {
    return dados?.pound;
  });

  if (estatisticasError) {
    sumirDepoisTempo(serErrorEstatistica);
  }

  const data = {
    labels: datasAlteracao,
    datasets: [
      {
        fill: true,
        data: pesos,
        borderColor: "#20E5E0",
        backgroundColor: "#20E5E0",
      },
    ],
  };
  return (
    <>
      {/* Dados Graficos */}
      {isCarregandoEstatisticas && <ModalCarregando />}
      {estatisticasError && (
        <ModalErro>
          <h4>Provalmente houver um erro ou não tem histórico de pesos</h4>
          <p>{estatisticasError?.response?.data?.msg}</p>
        </ModalErro>
      )}
      <Area>
        <Line options={options} data={data} />
      </Area>
    </>
  );
};
