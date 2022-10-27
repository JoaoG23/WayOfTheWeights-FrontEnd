import React from "react";
import { ModalStyle, ModalBackgroundStyle } from "./styles";

type Props = {
    children?: JSX.Element[] | JSX.Element;
  }
  
// const [estado, setEstado] = useState();

const ModalCarregando :React.FC<Props> = ({
    children,
}) => (
        <ModalBackgroundStyle>
            <ModalStyle>
                {/* <img src="./assets/erro.svg"></img> */}
                <h2>Carregando .... </h2>
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default ModalCarregando;