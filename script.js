//function listaNumeros() {
//    let inNumero = document.getElementById('inNumero');
//    let outReposta = document.getElementById('outResposta');
//
//    let numero = Number(inNumero.value);
//
//    if (numero == 0 || isNaN(numero)) {
//        alert("Informe um número válido...");
//        inNumero.focus();
//        inNumero.value = ""
//
//    }
//    let resposta = "Entre " + numero + " e 1: ";
//
//    for(let i = numero; i > 0; i = i -10) {
//
//        resposta = resposta + i + ", ";
//    }
//    outReposta.textContent = resposta + "acabou!";
//}
//let btDecrescer = document.getElementById("btDecrescer");
//btDecrescer.addEventListener("click", listaNumeros);

    let npessoas;
    let maiorpeso = 0;
    let totalpessoas;
    let maiorcem;
    let peso;

    for(let i = 1; i<=8 ; ++){
        let peso = Number(prompt('Digite o peso da  ' + i+ 'º pessoa'))
        npessoas++

        if (peso > maiorpeso) {
            maiorpeso = peso 
        }
        total = total + peso

        if(peso > 100)
        maiorcem++
    }

        alert("O maior peso é " +maiorpeso);
        alert("A quantidade de pesos maiores que 100 é" +maiorcem);








//function lista() {
//    //cria referência aos elementos da página
//    let inNumero = document.getElementById('inNumero');
//    let outTabuada = document.getElementById('outTabuada');
//
//    // converte conteudo do campo inNumero
//    let numero = Number(inNumero.value);
//
//    // cria uma variavel do tipo String, que irá concatenar a resposta
//    let resposta = "";
//
//    // cria um laço de repetição
//    for (let i = 1 ; i <= 10; i++); {
//
//    // a variavel resposta vai acumulando os novos conteúdos
//    resposta = resposta + numero + " X" + i + " = " + numero * i + "/n";
//}
//
//    // o conteúdo da tag pre é alterado para exibir a tabuada do num
//    outTabuada.textContent = resposta;
//
//{
//    //cria referência ao botão e após associa function ao evento click
//    let btMostrar = document.getElementById('btMostrar');
//    
//}
//
//let num1 = prompt("Digite um número:");
//
//let num2 = prompt("Digite outro número:");
//
//let op = prompt("Digite a operação matemática");
//
//let soma;
//
//if(op == "+"){
//    soma = Number(num1) + Number(num2);
//}else if(op == "-"){
//    soma = Number(num1) - Number(num2);
//}else if(op == "*"){
//    soma = Number(num1) * Number(num2);
//}else if(op == "/"){
//    soma = Number(num1) / Number(num2);
//}else{
//    alert('Informe uma op válida');
//}

//alert('O resultado da op é'+soma);


//let dist = prompt ("Digite a distância percorrida");
//let total;
//if (dist <= 200) {
//    total = Number(dist)*0.50;
//}else{
//    total = Number(dist)*0.45;
//}
//
//alert("Total a pagar: ${total}"+total)



//alert ('Informe os quatro valores:');
//
//let num1 = prompt("Digite um número:");
//let num2 = prompt("Digite outro número:");
//let num3 = prompt("Digite outro número:");
//let num4 = prompt("Digite outro número:");
//
//
//let calc;
//
//
//    calc = (Number(num1) + Number(num2) + Number(num3) + Number(num4)) / 4;
//
//
//
//
//
//alert('A média dos numeros são: '+calc);

//let km = prompt("Informe quantos Km foram percorridos");
//let dias = prompt("Informe a quantidade de dias");
//
//let vltotal = Number (km)*0.20 + Number(dias)*90;
//
//
//alert('O valor total dos km é:' +vltotal);

//alert("Digite aqui suas notas")
//
//let nota1 = prompt("digita a sua primeira nota")
//let nota2 = prompt("digita a sua segunda nota")
//
//let notamedia
//let divisor
//
//notamedia = (Number(nota1) + Number(nota2)) / 2;
//
//
//if (notamedia < 4.9) {
//    alert('Reprovado')
// }else if (notamedia < 5 && notamedia < 6.9) {
//    alert('Recuperação')
// }else{
//    alert('Aprovado')
// }
//
//alert(' ' + notamedia)
//

//if(media>=5 && media <=7)

//let nome = prompt("Digite seu nome")
//let sal = prompt("Digite seu salário")
//let temp = prompt ("Digite há quantos anos você trabalha na empresa:")
//let conv, salf;

//if (temp <= 3) {
//    conv = Number(sal) * 0.03
//    
//}
//else if (temp >= 4 && temp <= 10) {
//    conv = Number(sal) * 0.125
//}
//else{
//    conv = Number(sal) * 0.2
//    salf = Number(conv) + Number(sal)
//
//}
//
//alert(nome + "seu salario teve um aumento de:" + conv + "R$" + "e seu novo salario é de:" + salf + "R$");

//let larg = prompt("Digite a largura do terreno:");
//let comp = prompt("Digite o comprimento do terreno:");
//let calc = comp * larg;
//
//if (calc < 100) {
//    alert('Terreno Popular: ' + Number(calc) + 'm²');
//}else if (calc >= 100 && calc <= 500) {
//    alert('Terreno Master: ' + Number(calc) + 'm²');
//}else if (calc > 500) {
//    alert('Terreno Vip: ' + Number(calc) + 'm²');
//}

//let horas = prompt("Informe quantas horas teve de atividade por mes");
//let pontos = 1;
//let calc = horas * pontos;

//if (horas <= 10) {
   // P2 = Number (calc) * 2
    //P2D = Number(P2) * 0.05
    //RST = Number(P2D) + Number(P2)
   // alert('Pontos: ' + Number(RST));
//}else if (horas > 10 && horas < 20) {
    //P5 = Number (calc) * 5
    //P5D = Number (P5) * 0.05
    //RST = Number(P5D) +  Number(P5)
   // alert('Pontos: ' + Number(RST));
//}else if (horas > 20) {
    //P10 = Number(calc) * 10
    //P10D = Number(P10) * 0.05
   // RST = Number(P10D) + Number(P10)
    //alert('Pontos: ' + Number(RST));
//}

//let peso = prompt("Informe seu peso");
//let altura = prompt("Informe sua altura");
//
//let peso2 = Number(peso);
//let peso3 = Number(altura);
//
//let calc = Number(peso) / Number(altura) * Number(altura);
//
//if (calc < 18.5) {
//    alert('Abaixo do peso');
//}else if (calc >= 18.50 && calc < 25) {
//    alert('Peso ideal');
//}else if (calc > 25 && calc < 30) {
//    alert('Sobrepeso');
//}else if (calc > 30 && calc < 40) {
//    alert('Obesidade');
//}else if (calc > 40) {
//    alert('Obesidade Morbida');
//}
// >= maior  igual
// <= menor igual
// = igual
// == comparação