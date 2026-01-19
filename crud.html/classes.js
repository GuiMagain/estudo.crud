export class Cliente {
    construtor(nome, email, id = null) {
        this.nome = nome;
        this.email = email;
        this.id = id;
    }
}

export class ClienteService {
    construtor() {
        this.url = 'https://crudcrud.com/api/f2b8f724ceb74fabbe7edd0fcaadadde/clientes';
    }

    async listar() {
        const resposta = await fetch(this.url)
        return await resposta.json();
    }

    async adicionar(cliente) {
        const resposta = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: cliente.nome,
                email: cliente.email
            })
        });
        return await resposta.json();
    }

    async remover(id) {
        const resposta = await fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        });
        return resposta.ok;
    }
}