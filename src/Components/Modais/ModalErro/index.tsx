import React from "react";
import { ModalStyle, ModalBackgroundStyle } from "./styles";

type Props = {
    children?: JSX.Element[] | JSX.Element;
  }
  
// const [estado, setEstado] = useState();

const ModalErro :React.FC<Props> = ({
    children,
}) => (
        <ModalBackgroundStyle>
            <ModalStyle>
                <img src="/assets/error.svg"></img>
                <h3>Houve algum erro na operação </h3>
                {children}
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default ModalErro;