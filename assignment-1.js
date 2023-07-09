// 1.  Write a JavaScript program to display the current day and time in the following format.
// Today is : wednesday.
// Current time is : 10 PM : 30 : 38


var date = new Date;
var currDay = date.getDay();
var days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
console.log("Today is : " + days[currDay]);

var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var unit;
if (hr > 12) {
    hr %= 12;
    unit = "PM";
}
else {
    hr %= 12;
    unit = "AM";
}

console.log(`current time : ${hr} ${unit} : ${min} : ${sec}`);


// -----------------------------------------------------------------------------------


// 2.Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


var date = new Date;
var year = date.getFullYear();
var month = date.getMonth();
var dat = date.getDate();
if (dat < 10) {
    dat = "0" + dat;
}
if (month < 10) {
    month = "0" + month;
}
console.log(`${dat}-${month}-${year}`);
console.log(`${dat}/${month}/${year}`);
console.log(`${month}-${dat}-${year}`);
console.log(`${month}/${dat}/${year}`);

//---------------------------------------------------------------------------


// 3.WAP to print area and perimeter of rectangle , taking input from the user , using prompt


var len = parseInt(prompt("Enter the length of a rectangle "));
var bre = parseInt(prompt("Enter the breadth of a rectangle "));     // prompt will work on browser
console.log(`The Area of the rectangle is : ${len * bre}`);
console.log(`The Perimeter of the rectangle is : ${2 * (len + bre)}`);


//---------------------------------------------------------------------------------


// 4.WAP to rotate the string ‘brainmentors in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
// input  = brainmentors
// output = sbrainmentor


var str = "brainmentors";
var len = str.length;
for (let i = 0 ; i < len ; i++) {
    var char = str.charAt(len - 1);
    var rot = char + str.substring(0,len-1);
    console.log(rot);
    str = rot;
}

//-------------------------------------------------------------------------------------


//5.WAP to find out if 1st January will be a Sunday between 2000 and 2030



for (var i = 2000 ; i <=2030 ; i++) {
    var currDate = new Date(`${i}-01-01`);
    if (currDate.getDay() == 0) {
        console.log("sunday is in year : "+ i);
    }
}