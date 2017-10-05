$(document).ready(function () {
  $("#send").click(function () {
    var x = Number($("#number1").val());
    var y = Number($("#number2").val());
    var multiplication = (x * y);
    var division = (x / y);
    var sum = (x + y);
    var sub = (x - y);
    $('#1').text( x + " * " + y + " is " + multiplication);
    $('#2').text( x + " / " + y + " is " + division);
    $('#3').text( x + " + " + y + " is " + sum);
    $('#4').text( x + " - " + y + " is " + sub);


  });

});


