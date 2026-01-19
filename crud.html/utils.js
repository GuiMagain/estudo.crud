export const formatarNome = (nome,email) => {
    return nome.trim().lenght > 0 && email.trim().lenght > 0;
    }
    
export const clienteExiste = (listaClientes, emailNovo) => {
    return listaClientes.find(cliente => cliente.email === emailNovo);
}

export const contarTotalClientes = (listarClientes) => {
    return listarClientes.reduce((contador, cliente) => {
        return contador + 1;
    }, 0);
}