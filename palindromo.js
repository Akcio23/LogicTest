const palindromo = function (string){
    const array = string.split('')
    const reversed = array.reverse()
    const reversedString = reversed.join('')
    if (reversedString === string){
        console.log(`A palavra ${string} é um Palíndromo`)
    }else{
        console.log(`A palavra ${string} não é um Palíndromo`)
    }
}

palindromo('arara')
palindromo('casa')
palindromo('ele')