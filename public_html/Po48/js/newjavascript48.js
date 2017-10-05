$(document).ready(function () {
  $("#send").click(function () {
    var x = ("-----*");
    var i = 0;
    var t = '*';
    var z = ' ';
    while (i <= 5) {
      if (i === 0) {
        $("#1").append(`-----${t}`, "<br>");
      } else {
        $("#1").append(x = x.slice(1) + t, "<br>");
      }
      i++;

    }

  });

});


