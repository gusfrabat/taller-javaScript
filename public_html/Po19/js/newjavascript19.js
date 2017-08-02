var x = prompt('Write a whole number');
if (x < 0) {
  var result = (x * -1);
  console.log('Positive number ' + result);
} else {
  console.log('You must enter a number less than zero');
}