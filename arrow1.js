let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {            // arrow
    return 2 * a
}

dobro = a => 2 * a          // return está implicito
console.log(dobro(Math.PI))




let ola = function() {
    return 'Olá'
}
   console.log(ola())


   ola = () => 'Olá'
console.log(ola())