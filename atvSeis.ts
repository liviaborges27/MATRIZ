/*6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
Lívia Borges Matos n°19*/

console.clear();
let teclado = require(`prompt-sync`)();
let matriz: number [][] = [];


for(let z = 0; z < 3; z++){
    matriz[z] = [];
    for(let x = 0; x < 3; x++){
        let numero: number = parseInt(teclado (`Digite o numero que vai estar no endereço [${z}, ${x}]: `));
        if(numero <= 9){
            matriz[z][x] = numero;
        }
        else{
            console.log(`Digite um número menor que 9`)
        }
        

    }
}
console.log(matriz);