import React from "react";
import {useNavigate} from "react-router-dom"
import { goToPageCadastro, gotoPageEditeClientes, voltaUmaPage } from "../../routes/coordinator";
import { useState , useEffect } from "react";
import axios from "axios"
import { deletUsers, getAllUsers } from "../../componets/Url";
import { Aside, Button2, ButtonNav, Container, ContainerBuscarOrder, Footer, Hamburge, Header, Main, Nav } from "./StyleListClientes";
import Logo from "../../img/Logo.png"
import { FadeLoader } from "react-spinners";



export const ListaDeClientes = () =>{ 
const navigate = useNavigate()
const [listClients, setListClients]=useState([])
const [hanburge, setHanburge] = useState(false)
const [loadingSpinner, setLoadingSpinner] = useState(false)
const [buscar , setBuscar] = useState('')

const onchangeBuscar = (e) =>{
    setBuscar(e.target.value)
};
const OnHanburge = () =>{
    setHanburge(!hanburge)
};

useEffect(()=>{
   
    ordenar()

    setTimeout(() => {
        allUsers()  
    }, 800);
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
    .then((res)=>{setListClients(res.data.resultUsers)},
        setLoadingSpinner(!loadingSpinner)
    )
    .catch((error)=>{alert(error.response)})      
}; 

const filterUsers = listClients.filter((busca)=>busca.name.toLowerCase().includes(buscar.toLowerCase()));
 const lisClientsUers =  filterUsers.length > 0 && filterUsers.map((users)=>{
    return (
       
    <Aside key={users.id}>
       <span>
           <div>
               <h3>C L I E N T E</h3>
           </div>
       </span>    
       <span>
           <p>Nome: {users.name} </p>
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
});

const ordenar = () =>{ 
   const neyList =  [...listClients]
   neyList.sort((a , b)=>{
    if (a.name >  b.name ) {
      return 1;
    }else{
        if (a.name < b.name ) {
            return -1;
          } else{
            return 0;
        }   
    };
  });
  setListClients(neyList)    
};

return(

    <Container>

            <Header>
                <Nav >
                    <ButtonNav  hanburge={hanburge}  onClick={()=>{OnHanburge()}}>
                        <button onClick={()=> voltaUmaPage(navigate)} > Voltar </button>
                    </ButtonNav > 
                    <span>
                        <h1>L I S T A - D E - C L I E N T E S</h1>
                    </span>  
                    <ButtonNav hanburge={hanburge} onClick={()=>{OnHanburge()}}>
                        <button onClick={()=> goToPageCadastro(navigate)} > Criar Cadastro </button>
                        <Button2  hanburge={hanburge} onClick={()=> voltaUmaPage(navigate)} > Voltar </Button2>
                    </ButtonNav > 
                    <Hamburge hanburge={hanburge} onClick={()=>{OnHanburge()}} >
                        <span hanburge={hanburge}></span>
                        <span hanburge={hanburge}></span>
                        <span hanburge={hanburge}></span>
                    </Hamburge>
                </Nav>
                < ContainerBuscarOrder>
                   <div>
                        <input
                        value={buscar}
                        onChange={onchangeBuscar}
                        placeholder="Procurar"/>
                   </div>
                    <div>
                         <button onClick={()=>{ordenar()}} >Ordem alfabética</button>
                    </div>
                </ ContainerBuscarOrder>
            </Header >
        <Main>
            <div>
                {loadingSpinner ? lisClientsUers : <FadeLoader/> }
            </div>
        </Main>  
        <Footer>
           <span>
              <p>Desenvolvido por :  Ernandes Bitencourt @2022 </p> <img src={Logo} alt={ "Foto da logo S C | sitema de cadastro"} />
           </span>
        </Footer>

    </Container>
)

};