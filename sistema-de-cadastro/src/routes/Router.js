import { Cadastro } from "../pages/cadastro/Cadastro";
import { ListaDeClientes } from "../pages/listadeclientes/ListaDeClientes";
import { EditeClientes } from "../pages/editeclientes/EditeClientes";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import GlobalStyle from "../globalStyles/globalStyles";

export const Router = () =>{

    return(
        <BrowserRouter>
        <GlobalStyle/>
            <Routes>
                <Route path="/*" element={<Cadastro/>}/>
                <Route  path="/listaDeClientes" element={<ListaDeClientes/>}/>
                <Route  path="editeClientes/:id" element={<EditeClientes/>}/>
                <Route path="*" element={"Erro na Pagina !"}/>
            </Routes>
        </BrowserRouter>
    )
}