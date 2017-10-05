$(document).ready(function () {
  $("#send").click(function () {
    var name = $("#name").val();
    var type = $("#id").val();
    var number = $("#number").val();
    $('#1').text('Hello, my name is ' + name);
    $('#2').text('My number ' + type + ' is ' + number);
  });
});
