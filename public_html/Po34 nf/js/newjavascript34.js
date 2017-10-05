//papeleria 
op = 0;
do {

  function menu() {

    var option = prompt('   /  Papelereta \\  \n\
\n\
1. Enter the product\n\
2. Find producer by name\n\
3. Search for producer by code\n\
0. Quit the program');

    return parseInt(option);
  }

  var result = menu();

  function product() {
    var nombre = prompt('Digite su nombre');
    var codigo = prompt('Digite su codigo');
    var dato = {
      nombre,
      codigo
    };
    var contacto = JSON.parse(localStorage.getItem('contacto'));
    if (contacto === null) {
      var contacto = [
        dato
      ];
    } else {
      contacto.push(dato);
    }
    localStorage.setItem('contacto', JSON.stringify(contacto));
  }

  function searchseq() {
    var nameP = prompt('Name of the product you want to search');
    var flag = false;
    for (var i = 0; i < Array.length; i++) {
      if (Array[i] === nameP) {
        console.log('the number ' + nameP + ' Is in position ' + i);
        flag = true;
      }
    }
    if (flag === false) {
      console.log('the numbernum ' + nameP + ' Not in the array');
    }
  }

  function searchd() {
    var idP = Number(prompt('Product code number you want to search'));
    var flag = false;
    for (var i = 0; i < Array.length; i++) {
      if (Array[i] === idP) {
        console.log('the number ' + idP + ' Is in position ' + i);
        flag = true;
      }
    }
    if (flag === false) {
      console.log('the numbernum ' + idP + ' Not in the array');
    }
  }



  function print() {
    console.log(Array);
  }

  switch (result) {
    case 1:
      product();
      break;
    case 2:
      searchseq();
      break;
    case 3:
      searchd();
      break;
    case 0:
      op = 1;
      console.log('bye');
      break;
    default:
      alert('Enter a number from 0 to 3');
      break;
  }
} while (op === 0)
{

}
