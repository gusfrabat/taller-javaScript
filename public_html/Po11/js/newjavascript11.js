var x = '*';
var i = 0;
var t = '';
do {
  t = t + x;
  console.log(t);
  i++;
  if (x === '******') {
    var x = 6;
  }
} while (i <= 5)