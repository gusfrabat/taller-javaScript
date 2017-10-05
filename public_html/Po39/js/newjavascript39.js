$(document).ready(function () {
  $("#send").click(function () {
    $(this).hide(4000).show(4000);
    var h = $("#name").val();
    $('#hello').text("Hello, I am " + h + " and I am happy to be learning JavaScript using jQuery.");

  });
});
