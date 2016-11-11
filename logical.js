
console.log(true && false);
console.log(true || false);
console.log(!false);
console.log(!0);

var x = !4;
var y = 0;
console.log(typeof [2,3]);

var objeto = {
  x: 5,
  f: "hola",
  hola: function() {
    console.log('Hola!!!');
  }
}

var lista = [function() {
  console.log('hola');
}]


lista[0]();

//console.log(console.log("hola"));
//objeto.hola()
//objeto.hola();
