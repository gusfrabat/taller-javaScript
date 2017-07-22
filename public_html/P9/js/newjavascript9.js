var x =  prompt ('Write the integer');
i = 2;
Prime = true ;  

while (i < x ) {
  if  (x % i === 0) {
    Prime = false;
  }
  i++;
}

if (Prime === true) {
  console.log('The number ' + x + ' is prime');
} else {  
  console.log('The number is not prime');
}


