$(document).ready(function () {
  $("#send").click(function () {
    var x = '*';
    var i = 0;
    var t = '';
    do {
      t = t + x;
      $("#1").append(t, "<br>");
      i++;
      if (x === '******') {
        var x = 6;
      }
    } while (i <= 5)
 


  });

});


