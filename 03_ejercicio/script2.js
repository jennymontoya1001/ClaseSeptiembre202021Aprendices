
//leer 6 números e imprimir solamente los números positivos

let num = 0;

for(let i = 1; i<=6; i++){
   num = Number(prompt('Ingrese número'));
   if(num > 0){
     alert(`El número ${num} es positivo`)
   }
}