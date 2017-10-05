$("#form1").hide();
$("#form2").hide();
$("#form3").hide();
$("#form4").hide();
$("#form5").hide();

var personalinf = '';
var familyref = '';
var laborref = '';
var profetionalporf = '';

$(document).ready(function () {
  $("#personal").click(function () {
    $("#formhide").hide("slow");
    $("#form1").show("slow");

    $("#send1").click(function () {

      personalinf = {

        name: '',
        lastname: '',
        phonenumber: '',
        address: '',
        email: ''
      };

      personalinf.name = $("#name").val();
      personalinf.lastname = $("#lastname").val();
      personalinf.phonenumber = $("#phone").val();
      personalinf.address = $("#address").val();
      personalinf.email = $("#email").val();

    });

    $("#back").click(function () {
      $("#form1").hide("slow");
      $("#1").hide("slow");
      $("#formhide").show("slow");

    });

  });

  $("#family").click(function () {
    $("#formhide").hide("slow");
    $("#form2").show("slow");

    $("#send2").click(function () {

      familyref = {

        name: '',
        lastname: '',
        phonenumber: '',
        address: '',
        email: ''
      };

      familyref.name = $("#namef").val();
      familyref.lastname = $("#lastnamef").val();
      familyref.phonenumber = $("#phonef").val();
      familyref.address = $("#addressf").val();
      familyref.email = $("#emailf").val();
    });

    $("#back2").click(function () {
      $("#form2").hide("slow");
      $("#formhide").show("slow");
    });
  });

  $("#work").click(function () {
    $("#formhide").hide("slow");
    $("#form3").show("slow");

    $("#send3").click(function () {

      laborref = {

        companyname: '',
        position: '',
        duration: '',
        Bossname: '',
        Bossnumber: ''
      };

      laborref.companyname = $("#company").val();
      laborref.position = $("#position").val();
      laborref.duration = $("#duration").val();
      laborref.Bossname = $("#Bossname").val();
      laborref.Bossnumber = $("#Bossnumber").val();
    });

    $("#back3").click(function () {
      $("#form3").hide("slow");
      $("#formhide").show("slow");
    });
  });

  $("#professional").click(function () {
    $("#formhide").hide("slow");
    $("#form4").show("slow");

    $("#send4").click(function () {

      profetionalporf = {

        profper: ''
      };

      profetionalporf.profper = $("#profile").val();
    });

    $("#back4").click(function () {
      $("#form4").hide("slow");
      $("#formhide").show("slow");
    });
  });

  $("#print").click(function () {
    $("#formhide").hide("slow");
    $("#form5").show("slow");

    $("#div1").html("<h1> CURRUCULUM VITAE </h1> <br><h2> Personal information </h2> <br> <b> Your name is : </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + personalinf.name + " <br> \n\
<b> Your lastname is : </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + personalinf.lastname + " <br> \n\
<b> Your phone number is : </b> &nbsp;&nbsp;" + personalinf.phonenumber + " <br> \n\
<b> Your address is : </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + personalinf.address + " <br> \n\
<b> your email is : </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + personalinf.email + "<br><hr> \n\
<h2> Family reference </h2>  <br> \n\
<b> The name of your relative is : </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + familyref.name + " <br> \n\
<b> The lastname of your relative is : </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + familyref.lastname + " <br> \n\
<b> The phone number of your relative is : </b> &nbsp;&nbsp;" + familyref.phonenumber + " <br> \n\
<b> The address of your relative is : </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + familyref.address + " <br> \n\
<b> The email of your relative is : </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + familyref.email +"  <hr>\n\
<h2> Labor reference </h2>  <br> \n\
<b> Company in which I work : </b> &nbsp;&nbsp;&nbsp;" + laborref.companyname + " <br> \n\
<b> Position held : </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + laborref.position + " <br> \n\
<b> Duration in the workplace : </b> &nbsp;&nbsp;&nbsp;" + laborref.duration + " <br> \n\
<b> Name of your boss : </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + laborref.Bossname +  " <br> \n\
<b> Your boss number : </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + laborref.Bossnumber + " <hr> \n\
<h2> professional profile </h2> <br> \n\
<b> Your professional profile is : </b> <br>" + profetionalporf.profper);


    $("#back5").click(function () {
      $("#form5").hide("slow");
      $("#formhide").show("slow");
    });
  });


});

