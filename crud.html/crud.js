// Seleciona os elementos do DOM
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const botao = document.getElementById('adicionar');
const listaClientes = document.getElementById('lista-clientes');

botao.addEventListener('click', function() {
    const novoCliente = {
        nome: nome.value,
        email: email.value
    }; // Cria um objeto com os dados do novo cliente

    fetch('https://crudcrud.com/api/f2b8f724ceb74fabbe7edd0fcaadadde/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoCliente) // Converte o objeto para JSON
    })
        .then(resposta => {
            if (resposta.ok) {
                console.log('Cliente adicionado com sucesso!');
            } else {
                console.error('Erro ao adicionar cliente:', resposta.statusText);
            }
            return resposta.json(); // Retorna a resposta em JSON
        })
        .then(dados => {
                nome.value = "";
                email.value = "";

                listarClientes(); // Chama a função para listar os clientes ao carregar a página
            }); // Limpa os campos após adicionar o cliente

        })

            function listarClientes() {
                console.log("A função foi chamada! 🕵️‍♂️");
        fetch('https://crudcrud.com/api/f2b8f724ceb74fabbe7edd0fcaadadde/clientes')
            .then(resposta => resposta.json())
            .then(clientes => {
                listaClientes.innerHTML = ''; // Limpa a lista antes de adicionar os clientes
    
                clientes.forEach(cliente => {
                    const li = document.createElement('li');
                    li.textContent = `Nome: ${cliente.nome}, Email: ${cliente.email}`;

                    //Cria o botão de excluir
                const botaoDeletar = document.createElement('button');
                botaoDeletar.textContent = "Excluir";

                //Configura o clique para apagar na API
                botaoDeletar.addEventListener('click', () => {
                    fetch(`https://crudcrud.com/api/f2b8f724ceb74fabbe7edd0fcaadadde/clientes/${cliente._id}`, {
                        method: 'DELETE'
                    })
                    .then(resposta => {
                        if (resposta.ok) {
                            listarClientes(); // Atualiza a lista após apagar
                        }
                    });
                });

                //Adiciona o botão ao item da lista
                    li.appendChild(botaoDeletar);
                    listaClientes.appendChild(li); // Adiciona o cliente à lista
                });
            });
    }
   