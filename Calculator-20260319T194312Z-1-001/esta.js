function esta(){
    let tipo = parseInt(prompt("Digite\n[1] para média\n[2] para mediana\n[3] para moda\n"));
    let tam = parseInt(prompt("Digite o tamanho da lista: "));
    let soma = 0, meio = 0, par = 0, moda = 0, x = 0;
    let lista = new Array(tam);
    
    for(cont = 0; cont < lista.length; cont++){
        lista [cont] = parseFloat(prompt("Digite um número: "));
        soma += lista [cont];
    }    

    switch(tipo){
        case 1:
            let media = 0;
            media = soma / lista.length;
            alert("Média = " + media)
            break;
        case 2:
            lista.sort((a, b) => a - b);

            if(lista.length % 2 == 0){
                meio = lista.length / 2;
                par = (lista[meio] + lista[meio -1]) / 2;
                alert("Mediana = ", par);
            } else{
                meio = Math.floor(lista.length / 2);
                alert("Mediana = ", lista[meio]);
            }
            break;
        case 3:
            for(let cont = 0; cont < lista.length; cont++){
                let quantR = 0;
                for(let contT = 0; contT < lista.length; contT++){
                    if(lista[cont] == lista[contT]){
                        quantR ++;
                    } 
                }
                if(quantR > x){
                    moda = lista[cont];
                    x = quantR;
                }
            }
            alert("Moda = ", moda);
            break;
    }
}