var prompt = require('prompt');
var log = require('./logWrapper.js');
var numbers = require('./numbers.js');
var strings = require('./strings.js');


log("What operation do you want to do?");
log("1 - numeric");
log("2 - string");
log("3 - date");

prompt.start();

prompt.get(['opType'], function(err, operation) {
  log('You selected: ' + operation.opType);

  if (operation.opType == 1) {

    log('Now write the operation and the numbers');
    log('1 - add');
    log('2 - substract');
    log('3 - multiplies');
    log('4 - divide');

    prompt.get(['op', 'num1', 'num2'], function(err, nums) {
      if (nums.op == 1) {
        log(numbers.add(nums.num1, nums.num2));
      }
      if (nums.op == 2) {
        log(numbers.substract(nums.num1, nums.num2));
      }
      if (nums.op == 3) {
        log(numbers.multiplies(nums.num1, nums.num2));
      }
      if (nums.op == 4) {
        log(numbers.divide(nums.num1, nums.num2));
      }
    });
  }

  if (operation.opType == 2) {
    log('Now write the operation and the text');
    log('1 - split');

    prompt.get(['op', 'text', 'param1'], function(err, txt) {
      if (txt.op == 1) {
        log(strings.split_text(txt.text, txt.param1));
      }

    });
  }

  /*if (result.opType === 1) {

  }

  console.log(numbers.add(n1, n2));*/

});
