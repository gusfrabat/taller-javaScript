$(document).ready(function () {
  $("#send").click(function () {
    var x = '*';
    var space = '----';
    var z = '';
    var f = '';
    var t = '-';
    for (var i = 0; i < 13; i++) {
      if (i === 0) {
        $("#1").append(z = space + x, "<br>");
      }
      if (i >= 1 && i <= 3) {
        if (i === 2) {
          f = z;
        }
        $("#1").append(z = z.slice(1) + x + x, "<br>");
      }
      if (i === 4) {
        $("#1").append(f, "<br>");
      }
      if (i === 5) {
        $("#1").append(f, "<br>");
      }
      if (i >= 6 && i <= 8) {
        $("#1").append(f = f.slice(1) + x + x, "<br>");
      }
      if (i > 8) {
        $("#1").append(f = t + f.slice(0, -2), "<br>");
      }
    }

  });

});


