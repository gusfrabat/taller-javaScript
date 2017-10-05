$(document).ready(function () {
  $("#calculate").click(function () {
    var x = Number($("#number1").val());
    if (x < 0) {
      var result = (x * -1);
      $("#1").text('Positive number ' + result);
    } else {
      $("#1").text('You must enter a number less than zero');
    }

  });

});

