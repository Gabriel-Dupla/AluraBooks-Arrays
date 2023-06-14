function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    }) 
    return livrosComDesconto

}

//desconto - para definir a quantia de desconto
//no .map - aplica desconto em cada livro. Return para apenas alterar certas propriedades do objeto. 
//Os ... copia o array seguinte e faz uma mudança em uma parte específica
// vai retornar o objeto com desconto para depois exibir