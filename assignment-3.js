// 1.Write a function calculate that takes three arugments from the user, say num1 , num2, and operation(1==add, 2==subtract, 
//     3==multiply, 4==divide ).Don`t use switch statement or if else statements
     
//     1.add,
//     2.subtract,
//     3.multiply,
//     4.divide 
    
//     write the calc function for all the operations


function calc(n1 , n2 , operation) {
    function add(n1,n2) {
        return n1 + n2;
    }
    function subtract(n1 , n2) {
        return n1 - n2;
    }
    function multiply(n1,n2) {
        return n1 * n2;
    }
    function divide(n1,n2) {
        return n1 / n2;
    }
    operation = operation + "";
    var obj = {"1":add , "2":subtract , "3":multiply , "4":divide};
    console.log(obj[operation](n1,n2));
}

calc(2,3,3);

//-------------------------------------------------------------------------------


// 2 . Create a function Named Triangle which takes 3 parameters, say A, B and C denoting the 3 sides of a triangle.
// Use Callback function, create a method to check if the triangle is Equilateral or not.


// Output:
// "true" if the triangle is equilateral and "false" if its not.


function check(a,b,c,fn) {
    fn(a,b,c);   
}

function equiCheck(a,b,c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    if (a == b && b == c) {
        console.log("It is an equilateral triangle");
    }
    else {
        console.log("Not an equilateral triangle");
    }
}


var a = prompt("Enter first side of triangle");
var b = prompt("Enter second side of triangle");
var c = prompt("Enter third side of triangle");
check(a,b,c,equiCheck);


//-------------------------------------------------------------------------------------------


// 3.Given two strings, return true if they are anagrams of one another
// For example: Mary is an anagram of Army


function checkAnagram(s1 , s2) {
    var obj = {};
    for (var i = 0 ; i < s1.length ; i++) {
        var char = s1.charAt(i);
        if (char in obj) {
            obj[char] = obj[char] + 1;
        }
        else {
            obj[char] = 1;
        }
    }
    for (var i = 0 ; i < s2.length ; i++) {
        var char = s2.charAt(i);
        if (char in obj) {
            obj[char] = obj[char] - 1;
            if (obj[char] < 0) {
                return false;
            }
        }
        else {
            return false;
        }
    }
    for (var key in obj) {
        if (obj[key] != 0) {
            return false;
        }
    }
    return true;
}


var s1 = prompt("Enter first string").toLowerCase();
var s2 = prompt("Enter second string").toLowerCase();
checkAnagram(s1,s2);


                                            // OR

function ana(s1 , s2) {
    var str1 = s1.split('').sort().join('');
    var str2 = s2.split('').sort().join('');
    if (str1 === str2) {
        console.log("strings are anagram");
    }
    else {
        console.log("strings are not anagram");
    }
} 

ana("mary","army");


//-----------------------------------------------------------------------------------------------------------


// 4. Create a function Employee, having id, name, basic_Salary as arguments.
// Compute HRA, DA, TA, GS, NS.
// HRA is 30% of Basic Salary.
// DA is 10% of Basic Salary.
// TA is 20% of Basic Salary.
// GS = Basic Salary + HRA + DA + TA;
// TAX DEDUCTION is 10% of GS.
// NS = GS - TAX DEDUCTION.
// NOte : Use Basic Salary in Lexical Scope 
// Print salary slip of the employee.


function Employee(id , name , basic_sal) {
    function HRA() {
        return basic_sal * 0.3;
    }
    function DA() {
        return basic_sal * 0.1;
    }
    function TA() {
        return basic_sal * 0.2;
    }
    function GS() {
        return basic_sal + HRA() + DA() + TA();
    }
    function NS() {
        return GS() - GS() * 0.1;
    }
    function printSalarySlip() {
        console.log(` HRA : Rs ${HRA()}
DA : Rs ${DA()}
TA : Rs ${TA()}
GS : Rs ${GS()}
NS : Rs ${NS()}`);
    }
    return printSalarySlip;
}

Employee("a","yugal",60000)();


//------------------------------------------------------------------------------------------------------


// 15. Write a function to find the maximum and minimum elements in an array.
// arr = [10,3,15,-1,9,6]

// output = maxno. : 15
// 		 minno. : -1


function findMaxMin(arr) {
    var max = arr[0];
    var min = arr[0];
    for (var ele of arr) {
        if (ele > max) {
            max = ele;
        }
        if (ele < min) {
            min = ele;
        }
    }
    return {"max":max , "min":min};
}

findMaxMin([10,3,15,-1,9,6]);