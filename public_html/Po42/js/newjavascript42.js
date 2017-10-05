$(document).ready(function () {
  $("#div1").click(function () {
    var math = Math.pow(50, 10);
    $('#1').text('50 to 10 is ' + math).hide(5000).show(1000);
  });
  $("#div2").click(function () {
    var math1 = Math.pow(10, 50);
    $('#2').text('10 to 50 is ' + math1).hide(5000).show(1000);
  });
 $("#multi").click(function () {
    var multiplication = (50 * 10);
    $('#3').text('10 * 50 is ' + multiplication).hide(5000).show(1000);
  });
  $("#divisi").click(function () {
    var division = (50 / 10);
    $('#4').text('50 / 10 is ' + division).hide(5000).show(1000);
  });
  $("#divisi1").click(function () {
    var division1 = (50 / 10);
    $('#5').text('10 / 50 is ' + division1).hide(5000).show(1000);
  });
  $("#mod").click(function () {
    var mod = (50 % 10);
    $('#6').text('10 % 50 is ' + mod).hide(5000).show(1000);
  });
  $("#sub").click(function () {
    var subtraction = (50 - 10);
    $('#7').text('10 - 50 is ' + subtraction).hide(5000).show(1000);
  });
  $("#sum").click(function () {
    var sum = (50 + 10);
    $('#8').text('10 + 50 is ' + sum).hide(5000).show(1000);
  });
});


