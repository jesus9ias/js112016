"use strict";
const log = require('./logWrapper');

//----
let num = 10;
let x = () => {
  return num++;
}
log(x());
log(num);

//----
for ( let i = 0; i <= 5; i++) {
  log(i);
}
log(i);

//----
const person = {
  gender: 'male',
  age: 25,
  birthday: '1990-10-10',
  resident: 'Monterrey'
};
let {gender, resident} = person;
log(gender);
