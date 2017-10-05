$(document).ready(function () {
  $("#calculate").click(function () {
    var salary = Number($("#number1").val());
    var retention = Number($("#number2").val());
    $("#1").text("He is being held $ " + (salary *  retention / 100) + " You will be paid in full $ " + (salary - (salary *  retention / 100)) );
  
  });
  
});

