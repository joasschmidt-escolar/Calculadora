function bhaskara(){
//Definindo valores
let a = Number(prompt("Digite o valor de a: "));
let b = Number(prompt("Digite o valor de b: "));
let c = Number(prompt("Digite o valor de c: "));

//Calculando o delta
let  delta = (b * b) - (4 * a * c);

//Calculando o x' e o x"
let x1 = (-b + (delta ** 0.5)) / (2 * a);
let x2 = (-b - (delta ** 0.5)) / (2 * a);

//printando no console
alert("Delta: " + delta);
alert("x1: " + x1);
alert("x2: " + x2); 
}