
var number = prompt("Write the integer");
 
var result = result1(number);

function result1(number) {
  if(number % 2 === 0) {
    return "pair";
  }
  else {
    return "odd";
  }
}
console.log("The number " + number + " is "+ result);

