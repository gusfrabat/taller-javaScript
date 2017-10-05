$("#form1").hide();
$("#form2").hide();
$("#form5").hide();
$("#fillhide").hide();
var array = [];
var alert = 0;

$(document).ready(function () {
//llenar arreglo
  $("#fill").click(function () {
    $("#formhide").hide("slow");
    $("#form1").show("slow");
    $("#send").click(function () {
      if (alert === 0) {
        array = [];
        max = $("#max").val();
        for (var i = 0; i < max; i++) {
          array.push(Math.round(Math.random() * 10));
          $("#1").text("Genered Numbers : " + array);
          $("#fillhide").hide();

        }
      } else if (alert === 1) {
        $("#fillhide").show();
        $("#fillhide").click(function () {
          array = [];
          max = $("#max").val();
          for (var i = 0; i < max; i++) {
            array.push(Math.round(Math.random() * 10));
            $("#1").text("Genered Numbers : " + array);
            alert = 0;
          }
        });

      }

    });

    $("#back").click(function () {
      $("#form1").hide("slow");
      $("#formhide").show("slow");

    });

  });
//Buscar elemento por método de búsqueda secuencial
  $("#sequential").click(function () {
    $("#formhide").hide("slow");
    $("#form2").show("slow");

    $("#send1").click(function () {
      var num = Number($("#num").val());
      var flag = false;
      for (var i = 0; i < max; i++) {
        if (array[i] === num) {
          $('#2').after("the number " + num + " Is in position " + i + "<br>");
          flag = true;
        }
      }
      if (flag === false) {
        $("#2").text('the numbernum ' + num + ' Not in the array');
      }

    });

    $("#back1").click(function () {
      $("#form2").hide("slow");
      $("#formhide").show("slow");
    });
  });
//Aplicar método de ordenamiento de burbuja
  $("#bubble").click(function () {
    alert = 1;
    for (i = 0; i < array.length - 1; i++) {
      for (j = 1; j < array.length; j++) {
        if (array[j] < array[j - 1]) {
          g = array[j];
          array[j] = array[j - 1];
          array[j - 1] = g;
          j++;
        }
      }
    }
    return array;

  });

//Aplicar método de ordenamiento de burbuja bidirec
  $("#bidibubble").click(function () {
    alert = 1;
    for (i = 0; i < array.length - 1; i++) {
      for (j = i + 1; j < array.length; j++) {
        if (array[j] < array[i]) {
          k = array[i];
          array[i] = array[j];
          array[j] = k;
        }
      }
    }
    return array;

  });

  $("#insertion").click(function () {
    alert = 1;
    for (i = 1; i < array.length; i++) {
      for (j = i - 1; j >= 0 && (array[j] > array[i]); i++) {
        r = array[i];
        array[i] = array[j];
        array[j] = r;
      }
    }
    return array;
  });

  $("#print").click(function () {
    $("#formhide").hide("slow");
    $("#form5").show("slow");

    $("#delete").click(function () {
      $("#printa").text("");
    });

    $("#printar").click(function () {
      $("#printa").text("Numbers in the array : " + array);
    });

    $("#back5").click(function () {
      $("#form5").hide("slow");
      $("#formhide").show("slow");
    });
  });


});

