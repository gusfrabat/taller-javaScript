var salary2017 = prompt("Write the minimum wage in 2017 .... ");
var salary = prompt("Write your current salary .... ");
var salaryd = parseInt(salary / 30);
var days = prompt("How many days I work .... ");
var salaryp = (salaryd * days);
if (salary <= (salary2017 * 2)) {

  var help = prompt("What is the transport aid .... ");
  var salaryaux = (salaryp + help);
  console.log("You work " + days + " you will be paid per day .... " + salaryp);
  console.log("You have transportation assistance that is $ " + help + " you will be paid in total .... $ " + salaryaux);

} else if ((salary >= salary2017 * 4) && (salaryp >= salary2017 * 4)) {

  var ret = prompt("Enter % of retention at source .... ");
  var salaryret = (salaryp * (ret / 100));
  console.log("Retention at source is  " + ret);
  console.log("You work " + days + " you will be paid $ " + salary + " less $ " + salaryret + " you will be paid in total .... $ " + (salaryp - salaryret));
} else {

  console.log("You do not have transportation help you will be paid .... $ " + salaryp);
}
