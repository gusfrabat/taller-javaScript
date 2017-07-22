var x = prompt ('Type the value of variable 1');
var y = prompt ('Type the value of variable 2');

var math = Math.pow ( x,y) ;
var math1 = Math.pow ( y,x );
var multiplication = ( x * y );
var division = (x / y);
var division1 = (y / x);
var mod = (x % y);

console.log(x + ' to ' + y + ' is : ' + math);
console.log(y + ' to ' + x + ' is : ' + math1);
console.log('The multiplication between ' + x + ' and ' + y + ' is : ' + multiplication);
console.log('The division between ' + x + ' and ' + y + ' is : ' + division);
console.log('The division between ' + y + ' and ' + x + ' is : ' + division1);
console.log('The module of the division between ' + x + ' and ' + y + '  is : ' + mod);
