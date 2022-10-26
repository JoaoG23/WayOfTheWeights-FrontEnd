import React from "react";
import { ModalStyle, ModalBackgroundStyle } from "./styles";

type Iinfo = {
    children?: JSX.Element[] | JSX.Element;
  }
  

const ModalQuestiomento :React.FC<Iinfo> = ({
    children,
}) => (
        <ModalBackgroundStyle>
            <ModalStyle>
                <img src="./assets/question.svg"></img>
                <h3>Tem certeza que quer realizar a operacão</h3>
                { children }
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default ModalQuestiomento;