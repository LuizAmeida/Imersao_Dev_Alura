let cardContainer = document.getElementById('cards-wrapper');
let campoBusca = document.querySelector("header input");
let introSection = document.getElementById('intro');
let resultsSection = document.getElementById('results');
let resultsTitle = document.querySelector('.results-title');
let dados = [];

async function iniciarBusca() {
    const termoBusca = campoBusca.value.trim().toLowerCase();
    
    if (termoBusca === '') {
        mostrarMensagem('Por favor, digite algo para buscar.');
        return;
    }

    // Se os dados ainda não foram carregados, busca do JSON
    if (dados.length === 0) {
        try {
            mostrarCarregamento();
            let resposta = await fetch("data.json");
            dados = await resposta.json();
        } catch (error) {
            console.error("Falha ao buscar dados:", error);
            mostrarMensagem('Erro ao carregar os dados. Tente novamente.');
            return;
        }
    }

    const dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) || 
        dado.descricao.toLowerCase().includes(termoBusca) ||
        dado.diretor.toLowerCase().includes(termoBusca) ||
        dado.tags.some(tag => tag.toLowerCase().includes(termoBusca))
    );

    mostrarResultados(dadosFiltrados, termoBusca);
}

function mostrarCarregamento() {
    introSection.style.display = 'none';
    resultsSection.style.display = 'block';
    cardContainer.innerHTML = '<div class="loading">Buscando filmes...</div>';
}

function mostrarResultados(dadosFiltrados, termoBusca) {
    introSection.style.display = 'none';
    resultsSection.style.display = 'block';
    
    if (dadosFiltrados.length === 0) {
        resultsTitle.textContent = `Nenhum resultado para "${termoBusca}"`;
        cardContainer.innerHTML = `
            <div class="no-results">
                <p>Nenhum filme encontrado para "<strong>${termoBusca}</strong>"</p>
                <p>Tente buscar por:</p>
                <ul>
                    <li>Nome do filme (ex: "Matrix", "Titanic")</li>
                    <li>Diretor (ex: "Christopher Nolan", "Quentin Tarantino")</li>
                    <li>Gênero (ex: "ação", "drama", "ficção científica")</li>
                    <li>Ano (ex: "1994", "2010")</li>
                </ul>
            </div>
        `;
        return;
    }
    
    resultsTitle.textContent = `${dadosFiltrados.length} resultado(s) para "${termoBusca}"`;
    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = '';
    
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <div class="card-header">
                <h2>${dado.nome}</h2>
                <span class="ano">${dado.ano_lancamento}</span>
            </div>
            <div class="card-content">
                <p class="diretor"><strong>Diretor:</strong> ${dado.diretor}</p>
                <p class="descricao">${dado.descricao}</p>
                <div class="tags">
                    ${dado.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${dado.link_oficial}" target="_blank" class="saiba-mais">Ver detalhes no IMDb</a>
            </div>
        `;
        cardContainer.appendChild(article);
    }
}

function mostrarMensagem(mensagem) {
    // Poderia ser implementado um toast ou alerta mais elegante
    alert(mensagem);
}

// Permitir busca ao pressionar Enter
campoBusca.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        iniciarBusca();
    }
});

// Focar no campo de busca quando a página carregar
window.addEventListener('load', function() {
    campoBusca.focus();
});