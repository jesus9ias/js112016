var fecha_actual = new Date();

console.log(fecha_actual);


// Resta

var d1 = new Date();
setTimeout(function() {
  var d2 = new Date();
  console.log(d2 - d1);
}, 1000);

var d3 = Date.now();
console.log(d3);
