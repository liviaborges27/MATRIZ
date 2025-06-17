/*7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
Lívia Borges Matos n°19*/

console.clear();
let matriz: number [][] = [];


for(let z = 0; z < 3; z++){
    matriz[z] = [];
    for(let x = 0; x < 3; x++){
        let numero: number = Math.floor(Math.random() * 4);

        matriz[z][x] = numero;

    }
}
console.log(matriz);

