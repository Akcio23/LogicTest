const number = 10
const Arraypar = []
const coutPar = function(number){
    for(i = 1; i <= number; i++) {
        if(i % 2 == 0) {
            Arraypar.push(i)
        }}
    return console.log(Arraypar)
}
coutPar(number)