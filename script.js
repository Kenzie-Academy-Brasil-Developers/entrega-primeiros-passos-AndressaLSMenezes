let precoRefrigerante =  parseFloat(prompt("Digite o valor do Refrigerante"));
let quantidadeRefrigerante = parseInt(prompt("Quantas Unidades ?"));
let refrigerante = precoRefrigerante * quantidadeRefrigerante;

alert(`Valor total a ser pago: ${refrigerante}`)

let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão"));
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"));
let macarrao = precoMacarrao * quantidadeMacarrao;

alert(`Valor total a ser pago: ${macarrao}`)

let precoErvilha = parseFloat(prompt("Digite o valor do ervilha"));
let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"));
let ervilha = precoErvilha * quantidadeErvilha;

alert(`Valor total a ser pago: ${ervilha}`)

let precoArroz = parseFloat(prompt("Digite o valor do arroz"));
let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"));
let arroz = precoArroz * quantidadeArroz;

alert(`Valor total a ser pago: ${arroz}`)

let precoFeijao = parseFloat(prompt("Digite o valor do feijão"));
let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"));
let feijao = precoFeijao * quantidadeFeijao;

alert(`Valor total a ser pago: ${feijao}`)

let precoVinho = parseFloat(prompt("Digite o valor do vinho"));
let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"));
let vinho = precoVinho * quantidadeVinho;

alert(`Valor total a ser pago: ${vinho}`)

let totalSemVinho = refrigerante + macarrao + ervilha + arroz + feijao;

let total = refrigerante + macarrao + ervilha + arroz + feijao + vinho;
alert(`Valor total a ser pago: ${total}`)
console.log("O valor total a ser pago é " + total)

if(total % 2 == 0){
    let metadeSemVinho = totalSemVinho / 2
    let voce = metadeSemVinho
    let amigo = metadeSemVinho + vinho; 

    alert(`Deu par você paga ${voce} e seu amigo paga ${amigo}.`);
    console.log("O valor total a ser pago é " + total + ". Você terá que pagar "+ voce + "e seu amigo o valor de " + amigo)
  }else{
    let metade = total / 2
    let voce = metade;
    let amigo = metade;
    alert(`Deu ímpar você paga ${voce} e seu amigo paga ${amigo}.`);
    console.log("O valor total a ser pago é " + total + ". Você terá que pagar "+ voce + " e seu amigo o valor de " + amigo)
  }
