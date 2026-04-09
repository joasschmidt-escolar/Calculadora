let continuar = true;
while(continuar){
    let ope = parseInt(prompt("Digite\n[0] para sair\n[1] para soma\n[2] para subtração\n[3] para multiplicação\n[4] para divisão\n[5] para radiciação\n[6] para potenciacão\n[7] para converção de valores\n[8] para bhaskara\n[9] para porcentagem\n[10] para regra de 3\n[11] para trigonometria\n[12] para estatistica\n"));
    let num, num1;

    switch(ope){
        case 1:
            num = parseFloat(prompt("Digite um número: ")), num1 = parseFloat(prompt("Digite outro numero: "));
            let soma =  num + num1;
            alert(num + "+" + num1 + "=" + soma)
            break;
        case 2:
            num = parseFloat(prompt("Digite um número: ")), num1 = parseFloat(prompt("Digite outro numero: "));
            let sub = num - num1;
            alert(num + "-" + num1 + "=" + sub);
            break;
        case 3:
            num = parseFloat(prompt("Digite um número: ")), num1 = parseFloat(prompt("Digite outro numero: "));
            let multi = num * num1;
            alert(num + "*" + num1 + "=" + multi);
            break;
        case 4:
            num = parseFloat(prompt("Digite um número: ")), num1 = parseFloat(prompt("Digite outro numero: "));
            let divi = num / num1;
            alert(num + "/" + num1 + "=" + divi);
            break;
        case 5:
            
            break;
        case 6:
            break;
        case 7:
            convertor();
            break;
        case 8:
            bhaskara();
            break;
        case 9:
            porc();
            break;
        case 10:
            reg3();
            break;
        case 11:
            trigo();
            break;
        case 12:
            esta();
            break;
        case 0:
            continuar = false;
            break;
    }
}