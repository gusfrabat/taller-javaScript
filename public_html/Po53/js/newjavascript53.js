$(document).ready(function () {
  $("#calculate").click(function () {
    var a = Number($("#number1").val());
    var b = Number($("#number2").val());
    var c = Number($("#number3").val());
    $("#1").text("The result of the rule of 3 is " + (b * c / a));
  
  });
  
});

