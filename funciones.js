
var animal = {
  nombre: '',
  especie: 'animal'
};

function perro(a) {
  a.especie = 'perro';
  return a;
}

function gato(a) {
  a.especie = 'gato';
  return a;
}

function nombre(a, name) {
  a.nombre = name;
  return a;
}

var firulais = perro(animal);
var pelusa = gato(animal);

firulais = nombre(firulais, 'Firulais');
pelusa = nombre(pelusa, 'Pelusa');

console.log(animal);
console.log(firulais);
console.log(pelusa);
