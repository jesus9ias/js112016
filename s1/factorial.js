
function factorial(num, i) {
  if (typeof i == 'undefined') {
    var i = num;
  }
  i--;
  if (i > 0) {
    var mul = num * i;
    return factorial(mul, i);
  } else {
    return num;
  }
}

console.log(factorial(5));
