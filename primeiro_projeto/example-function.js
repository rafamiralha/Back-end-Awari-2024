const ERROR = 'ERROR';
const MENSAGEM_ERROR = "Resultado invalido";
// function adicao(num1,num2){
//     let soma = num1 + num2;
//     return soma;
// }
// function subtracao(num1,num2){
//     let subtracao = num1 - num2;
//     return subtracao;
// }
// function multiplicacao(num1,num2){
//     let multiplicacao = num1 * num2;
//     return multiplicacao;
// }
// function divisao(num1,num2){
//     let divisao = num1 / num2;
//     if(num2 === 0 ){
//        return "Error"
//     }
//     return divisao;
// }
// made with arrow function
const adicao = (num1, num2) => Number(num1)+ Number(num2);
const subtracao = (num1, num2) => {
    if(num1 < num2){
        return ERROR
    }
     return Number(num1)- Number(num2);
}
const multiplicacao = (num1, num2) => Number(num1)* Number(num2);
const divisao = (num1, num2) => {
         if(num2 === 0 ){
            return ERROR
         }
         return    Number(num1)/ Number(num2);
}

let resultadoAdicao = adicao(4,5);
let resultadoSubtracao = subtracao(145,250);
resultadoSubtracao = resultadoSubtracao !== ERROR ? resultadoSubtracao : 
MENSAGEM_ERROR


let resultadoMultiplicacao = multiplicacao(4,5);
let resultadoDivisao = divisao(4,4);

resultadoDivisao = resultadoDivisao !== ERROR ? resultadoDivisao : 
MENSAGEM_ERROR

console.log(` O resultado é ${resultadoAdicao}`)
console.log(` O resultado é ${resultadoSubtracao}`)
console.log(` O resultado é ${resultadoMultiplicacao}`)
console.log(` O resultado é ${resultadoDivisao}`)