
# Vehicle CRUD API

Esta é uma API para gerenciar veículos, incluindo funcionalidades de **CRUD** (Create, Read, Update, Delete). O projeto foi desenvolvido utilizando o **NestJS**, com foco em arquitetura limpa (**Clean Architecture**) e **Domain-Driven Design** (DDD). A API utiliza um banco de dados **MySQL** e está configurada para rodar em **Docker** com suporte ao **docker-compose**.

---

## Tecnologias Utilizadas

- **NestJS**
- **TypeScript**
- **MySQL**
- **TypeORM**
- **Docker**.
- **Docker Compose**
- **Chai e Sinon**

---

## Arquitetura do Projeto

A aplicação segue uma abordagem **DDD** e **Clean Architecture**, com separação de responsabilidades em camadas distintas:

- **Domain**: Contém as entidades e regras de negócio principais.
  - Exemplo: `Vehicle` (entidade que representa os veículos).
- **Application**: Camada de aplicação com os casos de uso da API.
  - Exemplo: `VehicleUseCase` (casos de uso para criar, listar, atualizar e excluir veículos).
- **Infrastructure**: Gerencia a integração com o mundo externo, como o banco de dados.
  - Exemplo: `VehicleRepositoryImpl` (implementação do repositório usando TypeORM).
- **Interfaces**: Camada que expõe a API para o mundo externo.
  - Exemplo: Controladores HTTP (`VehicleController`).

---

## Funcionalidades

- **CRUD de Veículos**:
  - Criar veículo
  - Listar todos os veículos
  - Buscar veículo por ID
  - Atualizar veículo
  - Excluir veículo

- **Atributos do Veículo**:
  - `id` (UUID)
  - `placa` (string, única)
  - `chassi` (string)
  - `renavam` (string)
  - `modelo` (string)
  - `marca` (string)
  - `ano` (número)

---

## Pré-requisitos

- **Node.js** (v18 ou superior)
- **Docker** e **Docker Compose**
- **MySQL** (opcional, se não for usar Docker)

---

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DB_TYPE=mysql
DB_HOST=db
DB_PORT=3306
DB_USERNAME=vehicle_user
DB_PASSWORD=vehicle_password
DB_DATABASE=vehicle_crud
```

---

## Rodando o Projeto em Desenvolvimento

### Instalar Dependências

1. Instale as dependências do projeto:
   ```bash
   npm install
   ```

2. Certifique-se de que o MySQL está configurado e em execução.

### Executar o Projeto

1. Inicie a aplicação em modo de desenvolvimento:
   ```bash
   npm run start:dev
   ```

2. A API estará disponível em **http://localhost:3000**.

### Testes Unitários

1. Execute os testes unitários:
   ```bash
   npm run test
   ```

---

## Rodando com Docker

### Build e Inicialização

1. Construa e inicie os contêineres:
   ```bash
   docker-compose up --build
   ```

2. Acesse a API em **http://localhost:3000**.

### Parar os Contêineres

1. Para parar os contêineres:
   ```bash
   docker-compose down
   ```

---

## Estrutura do Projeto

```
src/
├── application/
│   ├── dtos/            # Data Transfer Objects (DTOs)
│   ├── usecases/        # Casos de uso
├── domain/
│   └── entities/        # Entidades de domínio
│    └── repositories/   # Interfaces
├── infrastructure/
│   ├── database/        # Integração com o banco de dados
│   ├── modules/        # Serviços externos
│   └── config/          # Configuração do TypeORM
├── interfaces/
│   ├── controllers/     # Controladores HTTP
```

---

## Configuração do Banco de Dados

O banco de dados é configurado para ser inicializado automaticamente com o seguinte:

- **Usuário**: `vehicle_user`
- **Senha**: `vehicle_password`
- **Banco de Dados**: `vehicle_crud`

Se necessário, acesse o banco diretamente com:

```bash
docker exec -it vehicle_crud_db mysql -u vehicle_user -pvehicle_password
```

---

## Endpoints da API

- **POST /vehicles**: Cria um novo veículo.
- **GET /vehicles**: Lista todos os veículos.
- **GET /vehicles/:id**: Busca um veículo pelo ID.
- **PUT /vehicles/:id**: Atualiza um veículo pelo ID.
- **DELETE /vehicles/:id**: Exclui um veículo pelo ID.

---

## Próximos Passos

- Adicionar autenticação (JWT).
- Melhorar a documentação com Swagger.
- Implementar logs estruturados.

---
