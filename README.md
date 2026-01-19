# 📋 Gerenciador de Clientes (CRUD)

Este projeto é uma aplicação web para gerenciamento de clientes, permitindo listar, adicionar e remover registros através de uma API REST.

O projeto passou por uma refatoração completa para modernizar a base de código, saindo de JavaScript procedural para uma arquitetura modular baseada em **ES6 Modules** e **Orientação a Objetos**.

## 🚀 Tecnologias e Conceitos Aplicados

- **JavaScript (ES6+)**
- **Modularização:** Uso de `import` e `export` para separar responsabilidades.
- **POO (Programação Orientada a Objetos):** Criação de Classes para Modelos e Serviços.
- **Assincronismo:** Uso de `async/await` e `Fetch API` para comunicação com o backend.
- **Programação Funcional:**
  - `.map()`: Para renderizar a lista de clientes no DOM.
  - `.reduce()`: Para calcular o total de clientes cadastrados.
  - `.find()`: Para validar se um e-mail já existe antes do cadastro.

## 📂 Estrutura do Projeto

O código foi organizado na pasta `/js` da seguinte forma:

- **`app.js`**: O ponto de entrada. Gerencia os eventos do DOM (cliques, formulários) e integra os serviços.
- **`classes.js`**: Contém a classe `Cliente` (modelo de dados) e `ClienteService` (lógica de conexão com a API).
- **`utils.js`**: Funções auxiliares puras para validações e cálculos matemáticos.

## 📦 Como rodar o projeto

Como o projeto utiliza **Módulos ES6**, ele precisa ser executado através de um servidor local (para evitar erros de CORS/Protocolo de arquivo).

1. Clone o repositório.
2. Abra a pasta do projeto no VS Code.
3. Instale a extensão **Live Server**.
4. Clique em "Go Live" no canto inferior direito do VS Code.

---
Desenvolvido para fins de estudo em JavaScript Moderno.
