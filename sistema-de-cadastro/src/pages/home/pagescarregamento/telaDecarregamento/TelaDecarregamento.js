import React from "react";
import TelaDeCarregamento1 from "../../../../img/TelaDeCarregamento1.gif";
import { Container, LogoPretoImg } from "./StyledTeladeCarregamento";


export const TelaDecarregamento = () =>{

    return(
        <Container>
           <LogoPretoImg src={TelaDeCarregamento1} alt="Tela de carregamento" />
        </Container>
    )

}
