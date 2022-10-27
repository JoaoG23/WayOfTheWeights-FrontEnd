import React from "react";
import { ModalStyle, ModalBackgroundStyle } from "./styles";

type Props = {
    children?: JSX.Element[] | JSX.Element;
  }
  
// const [estado, setEstado] = useState();

const ModalSucesso :React.FC<Props> = ({
    children,
}) => (
        <ModalBackgroundStyle>
            <ModalStyle>
                <img src="/assets/success.svg"></img>
                <h3>Operação concluida com sucesso</h3>
                {children}
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default ModalSucesso;