
var txt1 = 'Hello';
var txt2 = 'World';

console.log(txt1.length);

console.log(txt1.concat(" ", txt2));

console.log(txt1.concat(" ", txt2).charAt(7));
console.log(txt2[4]);

var message = 'This is a big text that shows how to transform a text to an Array';
var arrayMessage = message.split(' ');
console.log(arrayMessage);
console.log(arrayMessage[3]);
