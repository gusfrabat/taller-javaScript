$(document).ready(function () {
  $("#calculate").click(function () {
    var month = 12 * 15;
    var day = 365 * 15;
    var hour = 8760 * 15;
    var minute = 525600 * 15;
    var second = 31536000 * 15;
    $("#1").text("in 15 years there are " + month + " months " + day + " days " + hour + " hours " + minute + " minutes " + second + " seconds ");
  });

});

