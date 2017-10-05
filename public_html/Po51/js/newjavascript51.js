$(document).ready(function () {

  $("#ruma").text("RUMAEstereo");
  $("#msj").text("The best reventón in the world do not miss it just for adults");

  $("#calculate").click(function () {
    var age = Number($("#number1").val());
    if (age >= 18) {
      $("#1").text('You can enter the reventon');
    } else {
      $("#1").text('Can not enter because you are a minor');
    }
  });




});


