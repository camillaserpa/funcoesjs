function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.25
    }
}
console.log(criarProduto('notebook', 2945.00))
console.log(criarProduto('celular', 1239))