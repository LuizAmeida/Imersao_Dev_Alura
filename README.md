# 🎬 CineSearch - Base de Conhecimento de Filmes

![CineSearch](https://img.shields.io/badge/CineSearch-Film%20Database-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

Uma aplicação web moderna para explorar e buscar informações sobre filmes clássicos e contemporâneos.

## ✨ Características

- **🔍 Busca Inteligente**: Encontre filmes por título, diretor, gênero ou ano
- **📱 Design Responsivo**: Interface adaptável para desktop e mobile
- **🎨 Interface Moderna**: Design dark mode com animações suaves
- **⚡ Performance Otimizada**: Carregamento rápido e busca em tempo real
- **📚 Base Rica**: Mais de 35 filmes com informações detalhadas

## 🚀 Como Usar

### 1. Busca Básica
- Digite o nome de um filme na barra de pesquisa
- Pressione Enter ou clique em "Buscar"
- Veja os resultados filtrados

### 2. Busca Avançada
- **Por diretor**: "Christopher Nolan", "Quentin Tarantino"
- **Por gênero**: "ficção científica", "drama", "ação"
- **Por ano**: "1994", "2010", "2019"
- **Por país**: "brasileiro", "coreano", "francês"

### 3. Explorar Resultados
- Cada card mostra: título, ano, diretor, descrição e gêneros
- Clique em "Ver detalhes no IMDb" para mais informações
- Use as tags para entender melhor o filme

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Design**: CSS Grid, Flexbox, Animações CSS
- **Dados**: JSON estático com estrutura organizada
- **Responsividade**: Mobile-first approach

## 📦 Estrutura do Projeto

````
CineSearch/
│
├── index.html # Página principal
├── style.css # Estilos e design responsivo
├── script.js # Lógica da aplicação
├── data.json # Base de dados de filmes (35+ filmes)
└── README.md # Este arquivo
````

## 🎯 Funcionalidades

### Busca em Múltiplos Campos
- Título do filme
- Nome do diretor
- Gêneros e categorias
- Ano de lançamento
- Descrição e sinopse

### Interface do Usuário
- Tela inicial com instruções claras
- Resultados em grid responsivo
- Cards informativos detalhados
- Feedback visual durante a busca
- Mensagens para resultados vazios

### Dados dos Filmes
- Título completo
- Ano de lançamento
- Diretor
- Descrição detalhada
- Tags de gêneros
- Link para IMDb

## 🔧 Desenvolvimento

### Executar Localmente
```bash
# Abra o arquivo index.html no navegador
# ou use um servidor local:
(http://127.0.0.1:5501/index.html)
````

## Personalização
### Para adicionar novos filmes, edite o arquivo data.json:

````
{
    "nome": "Nome do Filme",
    "descricao": "Descrição detalhada...",
    "ano_lancamento": "2024",
    "diretor": "Nome do Diretor",
    "link_oficial": "https://www.imdb.com/title/...",
    "tags": ["gênero1", "gênero2", "gênero3"]
}
````

## 🎯 Funcionalidades
- Busca em tempo real por múltiplos critérios
- Interface limpa e intuitiva
- Cards informativos com detalhes completos
- Links para páginas oficiais no IMDb
- Design responsivo para todos os dispositivos

👨‍💻 Autor
Luiz Almeida
GitHub
