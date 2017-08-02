alert('Program to calculate the hypotenuse of a rectangular triangle\n\
\n\
 the hypotenuse is the longest side of a right triangle and is also the side opposite the right angle');

var a = prompt('What is the length of the leg a');
var b = prompt('What is the length of the leg b');
var hypotenuse =  Math.hypot(a,b);

console.log(' (a^2+b^2)^(1/2) The hypotenuse of the triangle rectangle is ' + hypotenuse );

