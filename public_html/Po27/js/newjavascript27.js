var personalinf = '';
var familyref = '';
var laborref = '';
var profetionalporf = '';
op = 0;

do {
  function menu() {

    var option = prompt('Select an option to enter your data.\n\
1. Personal information\n\
2. Family reference\n\
3. Labor reference\n\
4. Description of professional profile\n\
5. Print resume\n\
0. Quit the program');

    return parseInt(option);
  }

  var result = menu();

  function personal() {

    personalinf = {

      name: '',
      lastname: '',
      phonenumber: '',
      address: '',
      email: '',
      civilstatus: ''
    };

    personalinf.name = prompt('What is your name');
    personalinf.lastname = prompt('What is your lastname');
    personalinf.phonenumber = prompt('What is your phonenumber');
    personalinf.address = prompt('What is your address');
    personalinf.email = prompt('What is your email');
    personalinf.civilstatus = prompt('What is your civilstatus');
  }

  function family() {

    familyref = {

      name: '',
      lastname: '',
      phonenumber: '',
      address: '',
      email: ''
    };

    familyref.name = prompt('What is the name of your family');
    familyref.lastname = prompt('What is the lastname of your family');
    familyref.phonenumber = prompt('What is the phone number of your family');
    familyref.address = prompt('What is the address of your family');
    familyref.email = prompt('What is the email of your family');
  }

  function labor() {
    laborref = {

      companyname: '',
      position: '',
      duration: '',
      Bossname: '',
      Bossnumber: ''
    };

    laborref.companyname = prompt('What company do I work in');
    laborref.position = prompt('What was your position at work');
    laborref.duration = prompt('How long have you been in office');
    laborref.Bossname = prompt('What is the name of your boss');
    laborref.Bossnumber = prompt('What is his boss number');
  }

  function profetional() {

    profetionalporf = {

      profper: ''
    };

    profetionalporf.profper = prompt('What is your professional profile');
  }

  function print() {
    op = 1;
    console.log('           \\\ personal information ///       ');

    console.log('Your name is          ' + personalinf.name);
    console.log('Your last name is     ' + personalinf.lastname);
    console.log('Your phone number is  ' + personalinf.phonenumber);
    console.log('Your address is       ' + personalinf.address);
    console.log('your email is         ' + personalinf.email);
    console.log('ypur civil status is  ' + personalinf.civilstatus);


    console.log('            \\\ Family reference ///          ');

    console.log('The name of your relative is         ' + familyref.name);
    console.log('The last name of your relative is    ' + familyref.lastname);
    console.log('The phone number of your relative is ' + familyref.phonenumber);
    console.log('The address of your relative is      ' + familyref.address);
    console.log('The email of your relative is        ' + familyref.email);

    console.log('           \\\ Labor reference ///            ');

    console.log('Company in which I work        ' + laborref.companyname);
    console.log('Position held                  ' + laborref.position);
    console.log('Duration in the workplace      ' + laborref.duration);
    console.log('Name of your boss              ' + laborref.Bossname);
    console.log('Your boss number               ' + laborref.Bossnumber);

    console.log('           \\\ professional profile ///            ');

    console.log('Your professional profile is   ' + profetionalporf.profper);
  }

  switch (result) {
    case 1:
      personal();
      break;
    case 2:
      family();
      break;
    case 3:
      labor();
      break;
    case 4:
      profetional();
      break;
    case 5:
      print();
      break;
    case 0:
      op = 1;
      console.log('bye');
      break;
    default:

      break;
  }
} while (op === 0)
{

}