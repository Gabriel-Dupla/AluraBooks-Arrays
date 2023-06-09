let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()
//faz requisição e busca livros
const elementoParaInserirLivros = document.getElementById('livros')

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    console.table(livros)    
    exibirOsLivrosNaTela(livros)

}
//função assíncrona para apenas quando a função receber todos os livros daquele endpoint ela rodar (promessa)
//res = resposta, realiza a requisição e posteriormente atribuimos em livros, json() pra transformar em json
//await nos livros é para dar tempo de montar a resposta em json

function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += 
        `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
            ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco}</p>
            <div class="tags">
                <span class="tag">R$${livro.categoria}</span>
            </div>
        </div>
        `

    })

}
//receberá uma lista de livros em que para cada livro dentro dessa lista, tenha o seu conteúdo adicionado na seção livros
