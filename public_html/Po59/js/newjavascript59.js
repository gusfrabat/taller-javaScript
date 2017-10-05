$(document).ready(function () {
  $("#calculate").click(function () {
//    var date1 = $("#date1").val().split('-');
//    console.log(date1);
//    date1 = new Date(date1[0], date1[1], date1[2]);
    var date1 = new Date($("#date1").val());
    var date2 = new Date($("#date2").val());
    var daysDif = date2.getTime() - date1.getTime();
    var days = Math.round(daysDif / (1000 * 60 * 60 * 24));
    $("#1").text('difference between the two dates ' + days / 365 + ' years ' + days / 30 + ' months ' + days + ' days ');
  });

});

