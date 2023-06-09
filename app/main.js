let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()
//faz requisição e busca livros

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)

}
//função assíncrona para apenas quando a função receber todos os livros daquele endpoint ela rodar (promessa)
//res = resposta, realiza a requisição e posteriormente atribuimos em livros, json() pra transformar em json
//await nos livros é para dar tempo de montar a resposta em json


