$("#form1").hide();
$(document).ready(function () {
  $("#sum").click(function () {
    $("#formhide").hide("slow");
    $("#form1").show("slow");

    $("#send1").click(function () {
      var number1 = Number($("#number1").val());
      var number2 = Number($("#number2").val());
      $("#1").text("the result of te sum is " + (number1 + number2));
    });

    $("#back").click(function () {
      $("#form1").hide("slow");
      $("#formhide").show("slow");
    });

  });

  $("#subtraction").click(function () {
    $("#formhide").hide("slow");
    $("#form1").show("slow");

    $("#send1").click(function () {

      var number1 = Number($("#number1").val());
      var number2 = Number($("#number2").val());
      $("#1").text("the result of te subtraction is " + (number1 - number2));
    });

    $("#back").click(function () {
      $("#form1").hide("slow");
      $("#formhide").show("slow");
    });
  });

  $("#multiplication").click(function () {
    $("#formhide").hide("slow");
    $("#form1").show("slow");

    $("#send1").click(function () {

      var number1 = Number($("#number1").val());
      var number2 = Number($("#number2").val());
      $("#1").text("the result of te subtraction is " + (number1 * number2));
    });

    $("#back").click(function () {
      $("#form1").hide("slow");
      $("#formhide").show("slow");
    });
  });

  $("#division").click(function () {
    $("#formhide").hide("slow");
    $("#form1").show("slow");

    $("#send1").click(function () {

      var number1 = Number($("#number1").val());
      var number2 = Number($("#number2").val());
      $("#1").text("the result of te subtraction is " + (number1 / number2));
    });

    $("#back").click(function () {
      $("#form1").hide("slow");
      $("#formhide").show("slow");
    });
  });


});

