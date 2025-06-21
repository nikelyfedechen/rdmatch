# RDmatch – Recomendador de Produtos RD Station

Este projeto faz parte do **teste técnico** para a vaga de **desenvolvedora front-end** na RD Station. O objetivo é implementar uma funcionalidade de recomendação de produtos em uma aplicação web React já existente.

### 🎯 Missão

Criar uma experiência de recomendação personalizada, implementando a lógica que permite aos usuários selecionarem suas **preferências** e receberem **sugestões de produtos** com base nas escolhas feitas.

### 🧩 Contexto

A estrutura da aplicação já está pronta em React.js e utiliza:

- **Tailwind CSS** para o layout
- **json-server** para simular uma API RESTful com os dados dos produtos

O foco será conectar essa base a uma lógica de recomendação clara, funcional e fluida.

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React.js** – estrutura base do front-end  
- 🖼️ **Tailwind CSS** – para a estilização responsiva  
- 🗃️ **json-server** – simulação de API RESTful  
- 🧪 **Jest/Testing Library** – para testes unitários

## 🔧 Pré-requisitos

### 📦 Node.js (versão 18.3 ou superior)

> Não tem essa versão? Sem problema! Aqui vão duas formas de instalar:

#### Usando `n` (Node Version Manager):
```bash
npm install -g n
n 18.3
```

#### Usando `nvm`:
```bash
nvm install 18.3
nvm use 18.3
```
## 🧠 Desenvolvimento

A lógica principal do desafio gira em torno destes arquivos:

1. **`App.js`**  
   Onde a mágica acontece: aqui atualiza a lista de recomendações quando o formulário mudar.

2. **`Form.js`**  
   Responsável por processar as preferências do usuário e disparar a recomendação.

3. **`recommendation.service.js`**  
   Aqui entra a lógica de negócio! Retornar os produtos recomendados com base nas preferências selecionadas.

## ✅ Requisitos do Desafio

- Implementar a lógica de recomendação com base nas **preferências** do usuário
- Utilizar **React.js** para o desenvolvimento da interface
- Consumir a API simulada via `json-server`
- Manter um código limpo e organizado
- Escrever **testes unitários** (opcional, mas bem-vindo)

## 🧪 Critérios de Aceite

- O formulário deve permitir que o usuário informe **preferências e funcionalidades desejadas**
- O sistema deve retornar:
  - 🟩 **Um produto** (modo `SingleProduct`)
  - 🟦 **Vários produtos** (modo `MultipleProducts`)
- Em caso de empate, retornar o **último produto** que atenda aos critérios
- Suporte a diferentes combinações de preferências
- A lógica deve ser modular e preparada para evoluções futuras

## 🚀 Como Executar

1. Clonar o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Instalar as dependências:
   ```bash
   yarn install
   ```

3. Instalar o projeto com o script:
   ```bash
   ./install.sh
   ```

4. Iniciar o projeto:
   ```bash
   yarn start
   ```

## 👩‍💻 Autor

Desenvolvido com dedicação por **Nikely Fedechen**.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
