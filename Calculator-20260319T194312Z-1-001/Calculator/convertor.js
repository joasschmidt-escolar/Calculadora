function convertor(){
    let cod = parseInt(prompt("Digite [1] para dinheiro\n[2] para tamanho/distancias\n[3] para temperatura\n[4] para massa"));
    let valor

    switch(cod){
        case 1:
            let cod1 = parseInt(prompt("Digite [1] para real --> dólar\n[2] para real --> euro\n[3] para real --> yuan chinês"));
            switch(cod1){
                case 1:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num * 0.19;
                    alert(valor);
                    break;
                case 2:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num * 0.16;
                    alert(valor);
                    break;
                case 3:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num * 1.31;
                    alert(valor);
                    break;
            }
            break;
        case 2:
            let cod2 = parseInt(prompt("Digite [1] para cm --> m\n[2] para cm --> km\n[3] para km --> m\n[4] para km --> cm\n[5] para m --> cm\n[6] para m -->km"));
            switch(cod2){
                case 1:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num / 100;
                    alert(valor);
                    break;
                case 2:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num / 1000000;
                    alert(valor);
                    break;
                case 3:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num * 1000;
                    alert(valor);
                    break;
                case 4:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num * 1000000;
                    alert(valor);
                    break;
                case 5:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num * 100;
                    alert(valor);
                    break;
                case 6:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num / 1000;
                    alert(valor);
                    break;
            }
        case 3:
            let cod3 = parseInt(prompt("Digite [1] para C --> F\n[2] para C --> K"));
            switch(cod3){
                case 1:
                    num = parseFloat(prompt("Digite o valor: "));
                    if(num == 0){
                        valor = 33; 
                    } else{
                        valor = num * 33.8;
                    }
                    alert(valor);
                    break;
                case 2:
                    num = parseFloat(prompt("Digite o valor: "));
                    if(num == 0){
                        valor = 273.15;
                    } else{
                        valor = num * 274.15;
                    }
                    alert(valor);
                    break;
        case 4:
            let cod4 = parseInt(prompt("Digite [1] para mg --> g\n[2] para mg --> kg\n[3] para kg --> g\n[4] para kg --> mg\n[5] para g --> mg\n[6] para g -->kg"));
            switch(cod4){
                case 1:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num / 1000;
                    alert(valor);
                    break;
                case 2:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num / 1000000;
                    alert(valor);
                    break;
                case 3:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num * 1000;
                    alert(valor);
                    break;
                case 4:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num * 1000000;
                    alert(valor);
                    break;
                case 5:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num *  1000;
                    alert(valor);
                    break;
                case 6:
                    num = parseFloat(prompt("Digite o valor: "));
                    valor = num / 1000;
                    alert(valor);
                    break;
            }
            }
    }
}