function reg3(){
   let escolha = parseInt(prompt("Digite\n[1] para regra de 3 simples\n[2] para regra de 3 composta\n"));
   let x1, x2, y1, y2, z1, z2;

   switch(escolha){
      case 1:
         x1 = parseInt(prompt("Digite o valor do x1: "));
         y1 = parseInt(prompt("Digite o valor do y1: "));
         x2 = parseInt(prompt("Digite o valor do x2: "));

         y2 = (x2 / x1) * y1;
         alert(y2);
         break;
      case 2: 
         x1 = parseInt(prompt("Digite o valor do x1: "));
         y1 = parseInt(prompt("Digite o valor do y1: "));
         z1 = parseInt(prompt("Digite o valor do z1: "));
         x2 = parseInt(prompt("Digite o valor do x2: "));
         y2 = parseInt(prompt("Digite o valor do y2: "));

         z2 = ((x2 / x1) * (y2 / y1)) * z1;
         alert(z2);
         break;
   }
}