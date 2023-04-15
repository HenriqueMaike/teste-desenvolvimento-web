# teste-desenvolvimento-web
Teste para vaga dev desenvolvimento web

### DEPLOY PARA TESTE => [CHICK HERE](https://clinquant-palmier-18f423.netlify.app/) ou
https://clinquant-palmier-18f423.netlify.app/

## Getting Started Backend

Para instalação dos pacotes:

```bash
npm install
```
First, run the development server:

```bash
yarn dev
```

# backend desenvolvido utilizando banco de dados PostgreSQL

Para utilizar sera necessario realizar as alterações necessarias no arquivo .env de acordo com a documentação do ORM PRIMA
https://www.prisma.io/docs/concepts/database-connectors/postgresql

DATABASE_URL="postgresql://postgres:SUASENHA@localhost:5432/redfox?schema=public"

Apos a criação do banco no postgre, e a configuração do .env pode dar o comando para criar a tabela: 

```bash
yarn prisma migrate dev --name init para criação da tabela
```

# Exemplos de requisições possiveis

![7](https://user-images.githubusercontent.com/50559406/232187011-6efa4b16-8a58-490d-af30-99359fd2355c.png)
![8](https://user-images.githubusercontent.com/50559406/232187018-c8344d9e-cea4-4a0e-af3b-3fd9c34c029f.png)
![9](https://user-images.githubusercontent.com/50559406/232187025-1523fd99-5de1-4f86-9cda-a3125244c8c2.png)
![10](https://user-images.githubusercontent.com/50559406/232187040-9cc55e32-b1d0-426c-b49b-495223f29e99.png)
![11](https://user-images.githubusercontent.com/50559406/232187049-18171efd-bfb7-4e70-95da-81d2f76c878a.png)
