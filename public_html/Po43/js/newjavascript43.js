$(document).ready(function () {
  $("#send").click(function () {
    var x = $("#number1").val();
    var y = $("#number2").val();
    var math = Math.pow(x, y);
    var math1 = Math.pow(y, x);
    var multiplication = (x * y);
    var division = (x / y);
    var division1 = (y / x);
    var mod = (x % y);
    $('#1').text( x + " to " + y + " is " + math);
    $('#2').text( y + " to " + x + " is " + math1);
    $('#3').text( x + " * " + y + " is " + multiplication);
    $('#4').text( x + " / " + y + " is " + division);
    $('#5').text( y + " / " + x + " is " + division1);
    $('#6').text( x + " mod " + y + " is " + mod);

  });

});


