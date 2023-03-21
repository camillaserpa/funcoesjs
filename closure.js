/*clousure é o escopo criado quando definimos a funcao , esse escopo permite acesso as variaveis declaradas 
externas a função*/

const x = 'Global'

function fora() {
    const x = "Local"
    function dentro(){
        return x
    }
    return dentro
}
const minhafuncao = fora()
console.log(minhafuncao())
