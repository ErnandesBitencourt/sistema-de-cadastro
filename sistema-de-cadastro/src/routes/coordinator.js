export const goToPageCadastro = (navigate) =>{
    navigate("/")
};

export const gotoPageListaDeClientes =(navigate) =>{
    navigate("/listaDeClientes/")
};

export const gotoPageEditeClientes =(navigate,id) =>{
    navigate(`/editeClientes/${id}`)
};

export const voltaUmaPage = (navigate) =>{
    navigate(-1)
}

