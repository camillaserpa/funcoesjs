function Pessoa(nome = 'Jeff') {
    this.nome = nome 

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
    
    }

const P1 = new Pessoa('Camilla')
const P2 = new Pessoa()
P1.falar()
P2.falar()