# CRUD - To-Do List Backend
Nesse projeto usamos NodeJS, Prisma, Express, PostgreSQL e Docker, com esse CRUD podemos
fazer o de sempre, criar, ler, atualizar e deletar uma tarefa.

## Repo do frontend: https://github.com/AndersonD4vid/crud-todo-frontend

## Tecnologias
- Vite + React
- Prisma
- Node.Js
- Express
- PostgreSQL
- Docker

[![My Skills](https://skillicons.dev/icons?i=vite,react,prisma,nodejs,express,postgresql,docker,&perline=10)](https://skillicons.dev)


## Dependências
- Express: Para criar o servidor 
- Nodemon: É um utilitário que monitora as mudanças nos arquivos do seu projeto e reinicia automaticamente o servidor Node.Js quando necessário. Assim, você não precisa parar e iniciar o servidor manualmente a cada modificação
- CORS: O que é CORS? Ele é essencial para garantir a navegação segura ao usuário, evitar a ação de crackers e o acesso de websites maliciosos.
- Prisma (ORM): Define o modo como os dados serão mapeados entre os ambientes, como serão acessados e gravados. Isso diminui o tempo de desenvolvimento, uma vez que não é necessário desenvolver toda essa parte.
- @prisma/client: Fazer alterações no banco de dados

## Rotas da API
- POST http://localhost/todos criar uma nova tarefa
- GET http://localhost/todos listar todas as tarefas
- PUT http://localhost/todos editar uma tarefa
- PUT http://localhost/todos/:id deletar uma tarefa


## Guia de instalação do docker no windows
- https://docs.docker.com/desktop/install/windows-install/
  
## Guia de instalação do docker no Linux
- https://docs.docker.com/engine/install/ubuntu/

# Iniciar o Docker
- Primeiro, você precisa iniciar o Docker
- Segundo, vá para raiz do projeto, abra o CMD e rode o comando docker-compose up -d . ou o nome_do_arquivo_docker up -d

# Criando arquivo .env 
- Dentro da pasta raiz do projeto crie um arquivo .env e adicione a variável abaixo
- DATABASE_URL="postgresql://admin:admin@localhost:5432"

- # Iniciar o servidor
- Yarn dev ou npm run dev
