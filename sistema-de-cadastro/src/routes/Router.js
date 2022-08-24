import { Cadastro } from "../pages/cadastro/Cadastro";
import { ListaDeClientes } from "../pages/listadeclientes/ListaDeClientes";
import { EditeClientes } from "../pages/editeclientes/EditeClientes";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import GlobalStyle from "../globalStyles/globalStyles";
import { HomePage } from "../pages/home/HomePage";

export const Router = () =>{

    return(
        <BrowserRouter>
        <GlobalStyle/>
            <Routes>
                <Route path="/*" element={<HomePage/>}  />
                <Route path="/cadastrar-cliente" element={<Cadastro/>}/>
                <Route  path="/listaDeClientes" element={<ListaDeClientes/>}/>
                <Route  path="editeClientes/:id" element={<EditeClientes/>}/>
                <Route path="*" element={"Erro na Pagina !"}/>
            </Routes>
        </BrowserRouter>
    )
};