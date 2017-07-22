var salary = prompt('What is your salary ?');
var retention = prompt('What is the percentage of retention in the source ?');
var retention1 = (salary *  retention / 100);
var pay = (salary - retention1);
console.log('He is being held $ ' + retention1 + ' You will be paid in full $ ' + pay );