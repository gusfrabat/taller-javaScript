alert (" Program that depending on number of hours calculates the weeks and days "); 
var hours = prompt ("What is the number of hours you want to calculate .... ");
var week = 0.00595238 * hours ;
var day = 0.0416667 * hours ;
console.log ("In " + hours + " hours there are " + week + " weeks " + day + " days ");