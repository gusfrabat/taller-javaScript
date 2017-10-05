$(document).ready(function () {
  $("#send").click(function () {
    var x = Number($("#number").val());
    var result = result1(x);

    function result1(x) {
      if (x % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }
    }
    $("#1").text("The number " + x + " is " + result);


  });

});


