const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio(); 
const elementoMenorValor = document.getElementById('menor-valor'); 
const elementoMaiorValor = document.getElementById('maior-valor');



elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;
console.log(numeroSecreto);

function gerarNumeroAleatorio(){
    return parseInt((Math.random() * maiorValor + 1));
    
}
