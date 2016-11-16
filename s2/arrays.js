
var ford = ['focus', 'fiesta', 'lobo', 'mustang'];

var chevrolet = ['chevy', 'malibu', 'spark', 'aveo', 'sonic'];

console.log(chevrolet.join(", "));

ford.push('figo');
ford.pop();
console.log(ford.shift());
ford.unshift('figo');
//delete ford[2];
var fords = ford.splice(2,1);
console.log(fords);

console.log(ford);
