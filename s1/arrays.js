
var colores = ["rojo", "amarillo", "verde", "azul"];

var i;
var total = colores.length;

for (i = 0; i < total; i++) {
  console.log(colores[i]);
}

x = 11;

while (x <= 10) {
  console.log(x);
  x++;
}

do {
  x++;
  console.log(x);
} while(x <= 10);

colores.push('Morado');
colores[colores.length] = 'Violeta';

console.log(colores);
