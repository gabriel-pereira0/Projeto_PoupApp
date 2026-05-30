# 💰 PoupApp

O **PoupApp** é um projeto desenvolvido em **React** com o objetivo de praticar a criação e organização de componentes reutilizáveis. O foco principal foi exercitar conceitos fundamentais da biblioteca, como componentização, separação de responsabilidades e estruturação de interfaces.

Este projeto não possui gerenciamento de estado dinâmico ou lógica avançada, pois foi criado apenas para fins de estudo e aprendizado. Por esse motivo, não foram utilizados **Hooks** do React, como `useState` ou `useEffect`.

## 🚀 Tecnologias Utilizadas

- React
- JSX
- CSS Modules
- JavaScript

## 📚 Objetivos do Projeto

- Praticar a criação de componentes React.
- Organizar a aplicação em componentes reutilizáveis.
- Utilizar CSS Modules para estilização isolada.
- Trabalhar com arquivos utilitários em JavaScript.
- Aplicar boas práticas de estruturação de projetos React.

## 📂 Estrutura do Projeto

O projeto é composto por:

- **Componentes React** desenvolvidos com JSX.
- **CSS Modules** para estilização dos componentes.
- **Arquivos utilitários (utils)** contendo:
  - Listas de dados utilizadas pela aplicação.
  - Função responsável por formatar valores monetários para o padrão brasileiro (BRL).

## 💵 Formatação de Valores

A aplicação utiliza uma função utilitária para converter valores numéricos para o formato monetário brasileiro:

```javascript
const valorFormatado = formatarValor(1500);
// Resultado: R$ 1.500,00
```

## 🎯 Finalidade

Este projeto foi desenvolvido exclusivamente para fins educacionais, servindo como prática dos conceitos iniciais do React, especialmente na criação e organização de componentes.

## ▶️ Como Executar o Projeto

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto:

```bash
cd PoupApp
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npm run dev
```

ou, dependendo da configuração:

```bash
npm start
```

5. Abra o navegador no endereço informado pelo terminal.

## 📖 Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos como:

- Componentização em React.
- Utilização de JSX.
- Estilização com CSS Modules.
- Organização de código em arquivos utilitários.
- Formatação de valores monetários utilizando JavaScript.
- Estruturação básica de aplicações React.

## 🔮 Melhorias Futuras

Este projeto foi desenvolvido inicialmente com foco na prática de componentização e organização de código em React. Novas funcionalidades serão implementadas futuramente, incluindo:

- Adição de regras de negócio e maior interatividade na aplicação.
- Implementação de gerenciamento de estado utilizando Hooks do React.
- Desenvolvimento de funcionalidades mais avançadas para tornar a aplicação mais dinâmica.
- Adaptação completa da interface para diferentes dispositivos por meio de técnicas de responsividade.

> **Observação:** O projeto continuará recebendo melhorias conforme a evolução dos estudos, com o objetivo de aplicar conceitos mais avançados do ecossistema React e aprimorar a experiência do usuário.
