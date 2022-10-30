import React from "react";
import { ModalStyle, ModalBackgroundStyle } from "./styles";

type Props = {
    children?: JSX.Element[] | JSX.Element;
  }
  

const ModalErro :React.FC<Props> = ({
    children,
}) => (
        <ModalBackgroundStyle>
            <ModalStyle>
                <img src="/assets/error.svg" alt="error"></img>
                <h2>Ops! Há algo errado na operação</h2>
                {children}
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default ModalErro;