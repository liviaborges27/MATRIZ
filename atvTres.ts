/*3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas.
Nome: Lívia Borges n° 19*/

console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: number [][] = [];// declarando matriz

let linha: number = 5; 
let coluna: number = 2;

for(let z = 0; z < linha; z++){
    minhaMatriz[z] = [];
    for(let x = 0; x < coluna; x++){
        let numero: number = parseInt(teclado (`Digite o numero que vai estar no endereço [${z}, ${x}]: `));

        minhaMatriz[z][x] = numero;

    }
}
console.log(minhaMatriz);