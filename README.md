# Sistema de Agendamento de Transferências Financeiras

## Descrição

Este é um sistema para agendamento de transferências financeiras, desenvolvido como parte do desafio prático para avaliação de habilidades em desenvolvimento de software. A aplicação permite que os usuários:

1. Agendem transferências financeiras com dados como conta de origem, conta de destino, valor, data de transferência e data de agendamento.
2. Visualizem o extrato completo de todas as transferências agendadas.
3. Calculem automaticamente a taxa de acordo com as regras especificadas.

## Decisões Arquiteturais

### Backend

- **Tecnologia**: Desenvolvido em Java 11 utilizando o framework **Spring Boot**.
- **Banco de Dados**: Utiliza um banco de dados em memória (**H2**) para persistência dos dados, garantindo simplicidade durante o desenvolvimento e execução.
- **Estrutura**: Segue os princípios de arquitetura REST para organização das APIs.
- **Validações**: Foram implementadas regras de negócio para o cálculo de taxas e validação de dados (como formato das contas e datas).

### Frontend

- **Tecnologia**: Desenvolvido em **Angular**, devido à sua robustez e familiaridade.
- **Design**: Utiliza estilos simples e modernos baseados no **Bootstrap 5** para uma interface limpa e responsiva.
- **Funcionalidades**: Permite interações como cadastro de transferências, listagem de agendamentos e exibição de erros/alertas.

## Ferramentas Utilizadas

- **Java 11**
- **Spring Boot**
- **H2 Database**
- **Angular**
- **Bootstrap 5**

## Instruções para Configuração e Execução

### Backend

1. Clone o repositório do backend:
   ```bash
   git clone <https://github.com/rafaelduartejv/Desafio-ATF-Tokio-Marine>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd Desafio-ATF-Tokio-Marine
   ```
3. Compile e inicie a aplicação:
   ```bash
   ./mvnw spring-boot:run
   ```
4. A API estará disponível em: `http://localhost:8080`

### Frontend

1. Clone o repositório do frontend:
   ```bash
   git clone <https://github.com/rafaelduartejv/Desafio-ATF-Tokio-Marine-Front>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd Desafio-ATF-Tokio-Marine-Front
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
5. A aplicação estará disponível em: `http://localhost:4200`

## Regras de Negócio para Cálculo de Taxas

A taxa é calculada com base na diferença entre a data de agendamento e a data da transferência, conforme a tabela:

| Dias de Transferência | Taxa Fixa | Taxa Variável |
| --------------------- | --------- | ------------- |
| 0                     | R\$ 3,00  | 2,5%          |
| 1 - 10                | R\$ 12,00 | 0%            |
| 11 - 20               | R\$ 0,00  | 8,2%          |
| 21 - 30               | R\$ 0,00  | 6,9%          |
| 31 - 40               | R\$ 0,00  | 4,7%          |
| 41 - 50               | R\$ 0,00  | 1,7%          |

> Observação: Caso não haja taxa aplicável, a transferência não será permitida.

## Estrutura do Projeto

### Backend

- **Controller**: Gerencia as requisições e respostas.
- **Service**: Contém a lógica de negócio.
- **Repository**: Responsável por interagir com o banco de dados.

### Frontend

- **Componentes**: Dividem a interface em partes reutilizáveis (login, registro, agendamento, extrato).
- **Serviços**: Gerenciam a comunicação com a API backend.
- **Estilos**: Baseados em Bootstrap, ajustados para manter uma experiência limpa e responsiva.

## Exemplo de Uso

1. Acesse a página inicial e efetue login ou registre-se.
2. Preencha os campos do formulário para agendar uma nova transferência.
3. Visualize o extrato de transferências realizadas ou agendadas.
4. Caso alguma validação falhe, mensagens de erro serão exibidas.

## Funcionalidades do Sistema

### Tela de Login
Acesse a tela de login para autenticação no sistema.

![Tela de Login](src/imagens/Tela%20de%20login.PNG)

### Tela de Registro
Cadastre-se como novo usuário para utilizar o sistema.

![Tela de Registro](src/imagens/Tela%20de%20registro.PNG)

### Tela de Agendamento
Agende transferências financeiras com facilidade.

![Tela de Agendamento](src/imagens/tela%20de%20agendamento.PNG)

### Tela de Extrato e Agendamento
Visualize os agendamentos realizados e o extrato completo.

![Tela de Extrato e Agendamento](src/imagens/tela%20de%20agendamento2.PNG)

### Geração de PDF
Exporte os agendamentos e extratos para um arquivo PDF.

![Geração de PDF](src/imagens/tela%20de%20agendamentoPDF.PNG)

---

## Considerações Finais

Este projeto foi desenvolvido levando em consideração a clareza do código, boas práticas e a eficiência das soluções implementadas.
