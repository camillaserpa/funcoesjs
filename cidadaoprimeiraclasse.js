// função em js é first-class object (citizens)
// Higher-order function

// função literal
function fun1() {}

// armazenar em uma variavl 
const fun2 = function() {}

// armazenar em um array 
const array = [function(a,b) {return a + b}]
console.log(array[0](2,3))
 
// armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

// passar função como parametro
function run(fun) {
    fun()
    }
run(function() {console.log('executando...')})

// uma função pode retornar ou conter outra função
function soma(a,b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)