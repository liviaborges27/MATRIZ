/*8- Crie uma matriz 3x3 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.
Lívia Borges Matos n° 19*/

console.clear();
let matriz: number [][] = [];
let maior: number = 0;
let linha: number = 0;
let coluna: number = 0;


for(let z = 0; z < 3; z++){
    matriz[z] = [];
    for(let x = 0; x < 3; x++){
     let numero: number = Math.floor(Math.random() * 21);

     matriz[z][x] = numero;

     if(numero > maior){
        maior = numero;
        linha = z;
        coluna = x;
     }
    }
}

console.log(matriz);
console.log(maior);
console.log(linha);
console.log(coluna);