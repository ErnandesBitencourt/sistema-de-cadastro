import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { editUsers, getAllUsers } from "../../componets/Url"
import { useForm } from "../../hooks/useForm"
import { voltaUmaPage } from "../../routes/coordinator";
import { Container, Main } from "../cadastro/StyleCadastro";



export const EditeClientes = () =>{
    const {form, onChange,clear} = useForm({ name: "" ,age:"",email: "",address: "", house: ""})
    const {list ,setList} = useState()
    const navigate = useNavigate()
    const {id} = useParams()

    console.log(id)

    useEffect(()=>{
        allUsers()
    },[id]) 
    const allUsers = () =>{
        axios.get(`${getAllUsers}/${id}`)
        .then((res)=>{setList(res.data.resultUsers)})
        .catch((error)=>{alert(error.response)})
        
    }; 

    console.log(list)
  
   

    const editeUsers = () => {
        
        const body= {
            id:id,
            name: form.name, 
            age: form.age, 
            email: form.emai ,
            address:form.address,
            house:form.house 
            
        } 
        axios
        .put(`${editUsers}/${id}`,body)
        .then(()=> alert("Atualizado!"))
        clear()
        .catch(()=> alert("Erro ao atualizar!"))
    }
      

  
    


    return(
        <Container>
            <Main>
                <span>
                    <form >
                        <header>
                            <h1>
                                A T U A L I Z A R 
                            </h1>
                        </header>
                        <div> 
                             <label>Nome</label>   
                            <input 
                            type={"text"}
                            name={"name"}
                            placeholder={"Nome completo"}
                            onChange={onChange}
                            value={form.name}
                            title={"Nome deve conter pelos menos 3 letas"}
                            required
                            />
                        </div>
                        <div>  
                            <label>Idade</label> 
                            <input type={"number"}
                            name={"age"}
                            placeholder={"Idade"}
                            onChange={onChange}
                            value={form.age}
                            title={"você deve ter a idade superior a 18"}
                            required
                            min={18}
                            />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type={"email"} 
                            name={"email"}
                            placeholder={"email"}
                            onChange={onChange}
                            value={form.email}
                            title={"obrigatorio email valido"}
                            required
                            />
                        </div>   

                        <div> 
                            <label>Cep</label>
                            <input type={"text"}
                            placeholder={"cep"}
                            name={"address"}
                            onChange={onChange}
                            value={form.address}
                            title={"obrigatorio cep valido"}
                            required
                            />
                        </div>  

                        <div>
                            <label>N°Casa</label> 
                            <input
                            type={"number"} 
                            name={"house"}
                            placeholder={"N° casa"}
                            onChange={onChange}
                            value={form.house}
                            title={"obrigatorio n° da casa"}
                            required
                            />
                        </div>
                        <div>
                             <button onClick={()=>editeUsers()}>Atualizar Cadastro</button>
                        </div>
                    </form>
                </span>
             <footer>

                    <button onClick={()=>{voltaUmaPage(navigate)}} >Voltar</button> 

             </footer>
                  
        </Main>
    </Container>

    )
};



