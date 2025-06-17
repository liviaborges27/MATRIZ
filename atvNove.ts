/*9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.
Lívia Borges Matos n° 19*/

console.clear();
let teclado = require(`prompt-sync`)();
let matriz: number [][] = [];
let somaMatriz: number = 0;

for(let z = 0; z < 3; z++){
    matriz[z] = [];
    for(let x = 0; x < 3; x++){
        let numero: number = parseInt(teclado (`Digite o numero que vai estar no endereço [${z}, ${x}]: `));

        matriz[z][x] = numero;

        if(z % 2== 0){
            somaMatriz += numero;
        }
    }
}


console.log(matriz);
console.log(somaMatriz);