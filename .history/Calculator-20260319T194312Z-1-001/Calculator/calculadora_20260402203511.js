let continuar = true;
while(continuar){
    let ope = parseInt(prompt("Digite\n[0] para sair\n[1] para soma\n[2] para subtração\n[3] para multiplicação\n[4] para divisão\n[5] para converção de valores\n[6] para bhaskara\n[7] para porcentagem\n[8] para regra de 3\n[9] para trigonometria\n[10] para estatistica\n"));
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
            convertor();
            break;
        case 6:
            bhaskara();
            break;
        case 7:
            porc();
            break;
        case 8:
            reg3();
            break;
        case 9:
            trigo();
            break;
        case 10:
            esta();
            break;
        case 0:
            continuar = false;
            break;
    }
}