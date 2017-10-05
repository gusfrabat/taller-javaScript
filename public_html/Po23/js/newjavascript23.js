var date1 = new Date(prompt('Please enter a date in this format (YYYY,MM,DD)'));
var date2 = new Date(prompt('Please enter a date in this format (YYYY,MM,DD)'));
var daysDif = date2.getTime() - date1.getTime();
var days = Math.round(daysDif / (1000 * 60 * 60 * 24));
console.log(' Difference between the two dates ' + days / 365 + ' years ' + days / 30 + ' months ' + days + ' days ');
