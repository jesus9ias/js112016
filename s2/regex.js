
var reg = /ab+c/;
var email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

var txt = "abc";

console.log(reg.test(txt));

if (process.argv[2]) {
  console.log(process.argv[2]);
  console.log(email.test(process.argv[0]));
}
