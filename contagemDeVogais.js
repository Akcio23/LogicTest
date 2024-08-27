function contadorDeVogais(string) {
    const array = string.split(''); 
    const arrayDeVogais = array.filter(char => 'aeiouAEIOU'.includes(char));

    return arrayDeVogais.length; 
  }
  

  const string = "programming";
  const contagemVogal = contadorDeVogais(string);
  console.log(contagemVogal);
  