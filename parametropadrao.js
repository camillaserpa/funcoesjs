function gerarConsole (nomeFuncao = 'Nome da função não foi informado', funcao) {
        return console.log(nomeFuncao, funcao)
}

function multiplicar(a, b = 1) {
    return a * b;                               //documentacao
}
console.log(multiplicar(5))



function soma(a = 1, b = 1, c = 1) {
    return a + b + c
}  
gerarConsole('Linha 15, função soma ==>> ', soma(2, 3, 4))                                             //udemy novidade do ECMA Script




function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma(), soma(3), soma(2))