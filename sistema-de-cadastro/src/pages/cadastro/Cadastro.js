import React from "react";
import {useNavigate} from "react-router-dom"
import { createUsers } from "../../componets/Url";
import { gotoPageListaDeClientes } from "../../routes/coordinator";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { Container,Main } from "./StyleCadastro";


export const Cadastro = () =>{ 
    
const navigate = useNavigate()
const {form, onChange,clear} = useForm({name: "" ,age:"",email: "",address: "", house: ""})



const createClienteUsers =  (e) =>{
    e.preventDefault()
    const body= {
        name:form.name,
        age:form.age,
        email:form.email,
        address:form.address,
        house:form.house
    }
    axios
    .post(createUsers,body)
    .then(()=>{alert("Cadastrado com sucesso!")}) 
    clear()
    .catch(()=>{alert("Cep não pertence ao 'AM'")}
    )
    
}


return(
    <Container>
        <Main>
            <span>
                <header>
                    <h1>
                        C A D A S T R E - S E
                    </h1>
                </header>
                    <form onSubmit={createClienteUsers} >
                        <div>
                            <label>Nome</label>
                            <input 
                            type={"text"}
                            name={"name"}                           
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
                            onChange={onChange}
                            value={form.email}
                            title={"obrigatorio email valido"}
                            required
                            />
                        </div>
                        <div>
                            <label>Cep</label>
                            <input type={"text"}                           
                            name={"address"}
                            placeholder={"Somente CEP do 'AM'"}
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
                                onChange={onChange}
                                value={form.house}
                                title={"obrigatorio n° da casa"}
                                required
                                />
                        </div>

                        <div>
                            <button type="submit">Criar</button>
                        </div>
                    </form>
                </span>
            <footer>
                <button onClick={()=>gotoPageListaDeClientes(navigate)}>Lista de clientes</button>
            </footer>
        </Main>
    </Container>
)

}