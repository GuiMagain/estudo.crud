import { ClienteService } from './classes.js';
import {Cliente} from './classes.js';
import { validarEntradas, clienteExiste, contarTotalClientes } from './utils.js';

const servico = new ClienteService();

// Selecione os elementos aqui:
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const botaoAdicionar = document.getElementById('adicionar');
const listaClientes = document.getElementById('lista-clientes');

const atualizarTela = async () => {
    const clientes = await servico.listar();

    const total = contarTotalClientes(clientes);
    console.log('Total de clientes: ${total}');

    listaClientes.innerHTML = '';

    clientes.map(cliente => {

        const li = document.createElement('li');
        li.textContent = `${cliente.nome} - ${cliente.email}`;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', async () => {
            await servico.remover(cliente._id);
            atualizarTela();
        });

        listaClientes.appendChild(li);
        li.appendChild(botaoRemover);
    })
}

botaoAdicionar.addEventListener('click', async () => {
    const nome = inputNome.value;
    const email = inputEmail.value;

    if (!validarEntradas(nome, email)) {
        alert('Por favor, preencha ambos os campos de nome e email.');
        return;
    }
    const clienteExistente = await servico.listar().then(clientes => clienteExiste(clientes, email));

    if (clienteExistente) {
        alert('Cliente com este email já existe.');
        return;
    }   

    const novoCliente = new Cliente(nome, email);
    await servico.adicionar(novoCliente);
    atualizarTela();
    inputNome.value = '';
    inputEmail.value = '';
});

atualizarTela();