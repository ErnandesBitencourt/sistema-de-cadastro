import React, { useEffect, useState } from "react";
import GifLogonPage from "../../img/GifLogonPage.gif"
import { Container, Div, Main } from "./StyledHomePage";
import {useNavigate} from "react-router-dom"
import { goToPageCadastro, gotoPageListaDeClientes } from "../../routes/coordinator";
import { TelaDecarregamento } from "./pagescarregamento/telaDecarregamento/TelaDecarregamento";

export const HomePage = () => {
    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },2700 )
       
    },[])

    return (
       <>
       { loading  ? <TelaDecarregamento/> :
        <Container>
              :
            <Main>
                <div>
                    <img src= {GifLogonPage} alt={"Logo da empresa: S C ,Sistema de Cadastro "} />
                </div>

                <Div>
                    <span>
                        <button onClick={()=>{goToPageCadastro(navigate)}}>Criar cadastro</button> 
                    </span>
                    <span>
                        <button onClick={()=>{gotoPageListaDeClientes(navigate)}}>Lista de Clients</button>
                    </span>
                </Div>


            </Main>

        </Container>}
        </>
    )


}