const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))
//para cada botão uma determinada ação

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    //pegamos o id do elemento clicado e depois o seu valor como categoria
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade) : livros.filter(livro => livro.categoria == categoria)
    //armazenamos os livros em uma variável
    //todo livro especifico vai ter uma ação específica (=>). Pegamos todos os livros com a categoria front-end, filtrando esse conteúdo e armazenando
    exibirOsLivrosNaTela(livrosFiltrados)


}

//Antigo código apenas para livros de front

// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront')
// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivros)
// //pegando informação do botão e adicionando uma ação

// function filtrarLivros() {
//     let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end')
//     //armazenamos os livros em uma variável
//     //todo livro especifico vai ter uma ação específica (=>). Pegamos todos os livros com a categoria front-end, filtrando esse conteúdo e armazenando
//     console.table(livrosFiltrados)


// }

