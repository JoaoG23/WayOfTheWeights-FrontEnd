import Card from "../../Components/Card";
import { Container } from "./styles";

import { buscaDadoUsuarioNaSessao } from "../../services/buscaDadoUsuarioNaSessao";
import { useFetch } from "../../services/api";
import { sumirDepoisTempo } from "../../services/sumirDepoisTempo";

import { TreinamentoUsuarioLogado } from "../../types/TreinamentoUsuarioLogado";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";

const { idConvertido } = buscaDadoUsuarioNaSessao();
const Dashboard = () => {
  const { dados, isCarregando, error, setError } = useFetch<TreinamentoUsuarioLogado>(
    `/api/statistics/lastexercice/${idConvertido}`,
    {
      method: "get",
    }
  );

  if (error) {
    sumirDepoisTempo(setError);
  }

  return (
    <Container>
      <Card>
        <div>
          <h2>Último exercicio de evolução</h2>
          <h4>{dados?.exercice_name}</h4>
        </div>
        <img src="./assets/aguaBig.svg"></img>
      </Card>
      <Card>
        <div>
          <h2>Último exercicio de evolução</h2>
          <h4>{dados?.exercice_name}</h4>
        </div>
        <img src="./assets/bikeBig.svg"></img>
      </Card>
      <Card>
        <div>
          <h2>Aumento de Peso</h2>
          <img src="./assets/muscleBig.svg"></img>
        </div>
        <div>
          <h4>Foi de {dados?.pound} Kgs</h4>
          <img src="./assets/up.svg"></img>
          <h5>Foi de {dados?.pound} Kgs</h5>
        </div>
      </Card>
      {isCarregando && <ModalCarregando />}
      {error && (
        <ModalErro>
          <h4>Houve um erro ou faça login novamente</h4>
        </ModalErro>
      )}
    </Container>
  );
};

export default Dashboard;
