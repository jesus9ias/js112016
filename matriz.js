
var matriz = [
  [1,6,4],
  [5,6,7],
  [7,2,7]
];

var total = matriz.length;
var suma = 0;
for (i = 0; i < total; i++) {
  suma += matriz[i][i];
}

console.log(suma);
