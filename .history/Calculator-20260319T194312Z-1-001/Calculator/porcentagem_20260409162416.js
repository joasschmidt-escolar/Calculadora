function porc(){
    let opitions = parseInt(prompt("Digite\n[1] para "))

    let porcentagem = parseInt(prompt("Digite o valor em porcentagem sem o simbulo (%): "));
    let num = parseFloat(prompt("Valor para a saber a porcentagem: "));

    let resultado = num * (porcentagem/100);
    alert(resultado);
}