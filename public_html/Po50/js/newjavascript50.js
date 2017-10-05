$(document).ready(function () {
  $("#calculate").click(function () {
    let x = Number($("#number1").val());
    $("#1").text("Each employee will receive a value of $ " + (258320000 / x));
  });
  $("#calculate2").click(function () {
    let x = Number($("#number2").val());
    $("#2").text("The electrician earns per day $ " + (45000 * x - 20000));
  });
  $("#calculate3").click(function () {
    var feet = 5.280;
    var inches = 12;
    var centimeters = 2.54;
    $("#3").text("there are " + (centimeters * inches * feet) + " centimeters in one mile");
  });



});


