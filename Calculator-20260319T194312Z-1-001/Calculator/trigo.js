function trigo(){
    let escolha1 = parseInt(prompt("Digite\n[1] para seno\n[2] para cosseno\n[3] para tangente"));
    let co, h, ca;

    switch(escolha1){
        case 1:
            co = parseFloat(prompt("Digite o valor do cateto oposto: "));
            h = parseFloat(prompt("Digite o valor da hipotenusa: "));

            let sen = co / h;
            alert("Seno = " + sen);
            break;
        case 2:
            ca = parseFloat(prompt("Digite o valor do cateto adjascente: "));
            h = parseFloat(prompt("Digite o valor da hipotenusa: "));

            let cos = ca / h;
            alert("Cosseno = " + cos);
            break;
        case 3:
            co = parseFloat(prompt("Digite o valor do cateto oposto: "));
            ca = parseFloat(prompt("Digite o valor do cateto adjascente: "));

            let tg = co / ca;
            alert("Tangente = " + tg);
            break;
    }
}