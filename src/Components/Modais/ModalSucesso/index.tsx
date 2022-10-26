import React from "react";
import { ModalStyle, ModalBackgroundStyle } from "./styles";

type Iinfo = {
    children?: JSX.Element[] | JSX.Element;
  }
  
// const [estado, setEstado] = useState();

const ModalSucesso :React.FC<Iinfo> = ({
    children,
}) => (
        <ModalBackgroundStyle>
            <ModalStyle>
                <img src="./assets/success.svg"></img>
                <h3>Operação concluida com sucesso</h3>
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default ModalSucesso;