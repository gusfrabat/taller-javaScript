function option() {
  var menu = prompt('              1. Make a sum\n\
              2. Perform a subtraction\n\
              3. Perform a multiplication \n\
              4. Make a division \n\
              0. Quit the program ');
  return parseInt(menu);
}

var result = option();

function sum() {
  var num1 = parseInt(prompt('Say a number'));
  var num2 = parseInt(prompt('Say a number'));
  console.log(`the result of the sum is : ${ num1 + num2 }`);
}
function subtraction() {
  var num1 = parseInt(prompt('Say a number'));
  var num2 = parseInt(prompt('Say a number'));
  console.log(`the result of the subtraction is : ${ num1 - num2 }`);
}
function multiplication() {
  var num1 = parseInt(prompt('Say a number'));
  var num2 = parseInt(prompt('Say a number'));
  console.log(`the result of the multiplication is : ${ num1 * num2 }`);
}
function division() {
  var num1 = parseInt(prompt('Say a number'));
  var num2 = parseInt(prompt('Say a number'));
  console.log(`the result of the division is : ${ num1 / num2 }`);
}
switch (result) {
  case 1:
    sum();
    break;
  case 2:
    subtraction();
    break;
  case 3:
    multiplication();
    break;
  case 4:
    division();
    break;
  case 0:
    console.log('bye');
    break;
  default:

    break;
}