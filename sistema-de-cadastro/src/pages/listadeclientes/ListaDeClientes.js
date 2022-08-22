import React from "react";
import {useNavigate} from "react-router-dom"
import { goToPageCadastro, gotoPageEditeClientes } from "../../routes/coordinator";
import { useState , useEffect } from "react";
import axios from "axios"
import { deletUsers, getAllUsers } from "../../componets/Url";
// import { DelUsers } from "../../endpoints/DelUsers";
import { Aside, Container, Main } from "./StyleListClientes";


export const ListaDeClientes = () =>{ 
const navigate = useNavigate()
const [listClients, setListClients] =useState([])

useEffect(()=>{
    allUsers()
},[])

const DelUsers = (id) => {

    axios
    .delete (`${deletUsers}/${id}`)
    .then(()=>
    allUsers(),
    alert("Excluido com sucesso!")
    )
    .catch(()=>alert("Error ao excluir"))
  }; 

const allUsers = () =>{
    axios.get(getAllUsers)
    .then((res)=>{setListClients(res.data.resultUsers)})
    .catch((error)=>{alert(error.response)})
}; 



 const lisClientsUers = listClients.map((users)=>{
    return (
        <Aside key={users.id}>
            <span>
                <div>
                    <h3>C L I E N T E</h3>
                </div>
            </span>    
            <span>
                <p>Nome:{users.name} </p>
            </span>
            <span>
                 <p>Idade: {users.age}</p>
            </span>
            <span>
                <p>Email: {users.email}</p>
            </span>
            <span>
              <p>Endereço: {users.address}</p>
            </span>
            <span>
               <p>N° Casa: {users.house}</p>
            </span>
                   
           <footer>
                <button onClick={()=>DelUsers(users.id)} >excluir</button>
                <button onClick={()=>gotoPageEditeClientes(navigate,users.id)}>editar</button>
           </footer>
            
        </Aside>
    )
})
console.log(listClients)

return(
    <Container>
        <Main>
            <header>
                <nav>
                    <button onClick={()=> goToPageCadastro(navigate)} > Voltar </button>
                </nav> 
                <span>
                    <h1>L I S T A - D E - C L I E N T E S</h1>
                </span>  
                <nav>
                    <button onClick={()=> goToPageCadastro(navigate)} > Criar Cadastro </button>
                </nav> 

            </header>
            <div>
                {lisClientsUers} 
            </div>
             

            
        </Main>  
    </Container>
)

};