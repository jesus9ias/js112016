
var carro = {
  name: 'focus',
  modelo: 2010,
  categoria: 'normal',
  color: 'rojo',
  kilometraje: 200000,
  valor: 100000
}

var tenencia = 0;

if (carro.modelo < 2008) {
  tenencia = carro.valor * 0.05;
} else if (carro.modelo >= 2008
  && carro.categoria == 'normal'
) {
  tenencia = (carro.kilometraje < 50000)?
    carro.valor * 0.2
  :
    carro.valor * 0.15
  ;
} else if (carro.modelo >= 2008
  && carro.categoria == 'lujo'
) {
  tenencia = (carro.kilometraje < 40000)?
    carro.valor * 0.5
  :
    carro.valor * 0.25
  ;
} else {
  tenencia = carro.valor * 0.05;
}

console.log(tenencia);
