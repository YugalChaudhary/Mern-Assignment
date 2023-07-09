// Q6. Write a JavaScript function that Print Sum of Even Place and Odd Place Digit

// E.g num = 2914
// O/p Even Place (9+4)
// Odd Place 2+1


function evenOddSum(x) {
    var arr = x.split('');
    var eSum = 0;
    var oSum = 0;
    for (var idx in arr) {
        var val = parseInt(arr[idx]);
        if (idx % 2 == 0) {
            oSum += val;
        }
        else {
            eSum += val;
        }
    }
    console.log(oSum);
    console.log(eSum);
}

evenOddSum(prompt("Enter value"));


//----------------------------------------------------------


//Q7. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : ‘learn javascript from brain mentors’
// Expected Output : ‘Learn Javascript From Brain Mentors


function firstLetterToUpper(str) {
    var arr = str.split(' ');
    var ans = "";
    for (var idx in arr) {
        var curr = arr[idx];
        curr = curr.charAt(0).toUpperCase() + curr.substring(1).toLowerCase() + " ";
        ans = ans + curr;
    }
    console.log(ans);
}

firstLetterToUpper("hello hOW are YOU");


//---------------------------------------------------------------------------------------


//Q8. Write a JS Function to validate Phone Number 
// Only number and must be 10 digit long


function validateMobile(num) {
    if (num.length != 10) {
        console.log("Number is not valid");
        return;
    }
    num = parseInt(num);
    num = num + "";
    if (num.length == 10) {
        console.log("Number is valid");
    }
    else {
        console.log("Number is not valid");
    }
}

validateMobile(prompt("enter your mobile number"));


//-----------------------------------------------------------------------------------------


//Q9. Write a JS Function to validate Email Address
// Must contains @
// Must ends with .com/.org/.edu

function validateEmail(str) {
    str = str.toLowerCase();
    if (str.includes('@')) {
        str.replace('@','');
        if (str.endsWith('.com') || str.endsWith('.org') || str.endsWith('.edu')) {
            str = str.substring(0,str.length - 4);
            if (str.includes('.com') || str.includes('.org') || str.includes('.edu') || str.includes('@')) {
                console.log("Email is not valid");
                return;
            }
            console.log("Email is valid");
        }
        else {
            console.log("Email is not valid");
        }
    }
    else {
        console.log("Email is not valid");
    }
}

validateEmail(prompt("Enter your main id"));


//-----------------------------------------------------------------------------------------------------------------------


//Q10. Write a JS Function to find the occurrence of each character in JS
// Input : “brain mentors”
// O/P : b 1
// r 2
// A 1
// I 1
// N 2
// M 1
// E 1
// T 1
// O 1
// S 1


function findOccurence(str) {
    var obj = {};
    for (var i = 0 ; i < str.length ; i++) {
        var char = str.charAt(i);
        if (char in obj) {
            obj[char] = obj[char] + 1;
        }
        else {
            obj[char] = 1;
        }
    }
    console.log(obj);
}

findOccurence(prompt("enter string"));


//------------------------------------------------------------------------------------------


// 1. Weakly Type in Function
// e.g add() - 0
// add(10,20) 30
// add(10,20,30) 60
// add(10,20,30,40,50,60)
// add(10,”20”,30,”four”, “one”)
// add(10,[20,”30”,one],”40”,”four”,five)


function add() {
    var sum = 0;
    for (var i = 0 ; i < arguments.length ; i++) {
        if (arguments[i] instanceof Array) {
            var arg = arguments[i];
            for (var i = 0 ; i < arg.length ; i++) {
                if (arg[i] instanceof Array) {
                    add(arg);
                }
                if (typeof arg[i] === "function") {
                    arg[i] = arg[i]();
                }
                sum = sum + (isNaN(parseInt(arg[i])) ? 0 : parseInt(arg[i]));
            }
        }
        if (typeof arguments[i] === "function") {
            arguments[i] = arguments[i]();
        }
        sum = sum + (isNaN(parseInt(arguments[i])) ? 0 : parseInt(arguments[i]));
    }
    return sum;
}

add(1,2,"3","four");     //6

add(1,2,[3,4,"3"],5,6);   //24