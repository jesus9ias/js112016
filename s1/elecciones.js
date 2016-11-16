
//var votos = 1000000;
var ganador = 'hilary';
var buena_onda = false;

function eleccionesUS(ganador, buena_onda) {
  if (ganador == 'trump' && buena_onda) {
    console.log('Economia mejora');
  }
  if (ganador == 'trump' && !buena_onda) {
    console.log('Se contrulle muro');
  }
  if (ganador == 'hilary' && buena_onda) {
    console.log('Visas para todos');
  }
  if (ganador == 'hilary' && !buena_onda) {
    console.log('Servidores web y guerras');
  }
}

eleccionesUS(ganador, buena_onda);
