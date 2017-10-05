$(document).ready(function () {
  $("#send").click(function () {
    var x = Number($("#number").val());
    var i = 2;
    Prime = true ;
    while (i < x) {
      if (x % i === 0) {
        Prime = false;
      }
      i++;
    }
    if (Prime === true) {
      $("#1").text('The number ' + x + ' is prime');
    } else {
      $("#1").text("the number is not prime");
    }

  });

});


