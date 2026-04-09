function porc(){
    let opitions = parseInt(prompt("Digite\n[1] para porcentagem\n[2] para desconto\n[3] para acrescimo: "));
    let porcentagem, num;

    switch(opitions){
        case 1:
            porcentagem = parseInt(prompt("Digite o valor em porcentagem sem o simbulo (%): "));
            num = parseFloat(prompt("Valor para a saber a porcentagem: "));

            let resultado = num * (porcentagem/100);
            alert(resultado);
            break;
        case 2:
            porcentagem = parseInt(prompt("Digite o valor em porcentagem sem o simbulo (%) que deseja : "))
    }

    
}