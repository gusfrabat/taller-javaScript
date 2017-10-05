$(document).ready(function () {
  $("#calculate").click(function () {
    var b = Number($("#number1").val());
    var a = Number($("#number2").val());
    $("#1").text("height " + a + ' cm ' + b + ' cm perimeter of a rectangle is ' + (2* b + 2 * a) + " cm  area of a rectangle is " + (b * a) + " cm^2");
  
  });
  
});

