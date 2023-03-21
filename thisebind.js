const pessoa = {
saudaçao: "Bom dia",
falar() {
    console.log(this.saudaçao
        )
}
}
pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


function Pessoa() {
    this.idade = 0

    //const self = this
    setInterval(function()  {
        this.idade++
        console.log(this.idade) // substituir this por self
    }.bind(this), 1000)
}
new Pessoa()

console.log(typeof this)