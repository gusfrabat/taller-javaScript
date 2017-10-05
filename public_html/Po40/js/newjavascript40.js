$(document).ready(function () {
  $("#send").click(function () {
    var name = $("#name").val();
    var type = $("#id").val();
    var number = $("#number").val();
    var sex = $("#mf").val();
    var height = $("#told").val();
    var life = $("#life").val();
    $('#1').text('Hello, my name is ' + name);
    $('#2').text('My number ' + type + ' is ' + number);
    $('#3').text('Biological gender : ' + sex);
    $('#4').text('My height is : ' + height + ' mts');
    $('#5').text('Is it true that I live in Cartago? ' + life);
  });
});
