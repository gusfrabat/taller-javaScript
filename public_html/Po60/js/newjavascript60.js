$(document).ready(function () {
  $("#calculate").click(function () {
    var hours = $("#hours").val();
    var week = 0.00595238 * hours;
    var day = 0.0416667 * hours;
    $("#1").text("In " + hours + " hours there are " + week + " weeks " + day + " days ");
  });

});

