// 1. Find Occurance of a target value in given array;
// arr= [19, 22, 18, 19, 16, 18, 19, 21, 24];
// target = 19;


var arr = [19,22,18,19,16,18,19,21,24];
var target = 19;
arr.filter(ele=>ele==target).length;

//-------------------------------------------------------------------------------------


// 2 . Reverse a given string using reverse() method 
// input = "BrainMentors"
// output = "srotnemniarB"

var str = prompt("Enter a string");
var ar = str.split('').reverse().join('');
console.log(ar);

//-------------------------------------------------------------------------------------


// 3. Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// Count of vowels in string;
// ex:- str = "brainmentors"
// 		output: count = 4

function count(str) {
    var c = str.split('').filter(ele=>ele=='a'||ele=='e'||ele=='i'||ele=='o'||ele=='u').length;
    console.log("count : "+c);
}
count(prompt("enter the string").toLowerCase());


//---------------------------------------------------------------------------------------------


// 4. Write a function to find the sum of all elements in an array.
// ex:- arr = [1,2,3,4,5];

// output = 15;


arr.reduce((acc , ele)=> acc+ ele , 0);

//---------------------------------------------------------------------------------------------


// 5.Write a function to reverse the order of elements in an array.
// don't Use reverse() Method 
// ex:- var arr = ['a','b','c','d','e','f']
			
// 		output = ['f','e','d','c','b','a']


function reverse(ar) {
    var rev = ar.reduce((acc,ele)=>{
        acc.unshift(ele);
        return acc;
    },[]);
    console.log(rev);
}
reverse(['a','b','c','d','e','f']);


//-------------------------------------------------------------------------------------------


// 6. Write a function to remove a specific element from an array.

// 	arr = [1,2,3,4,5];
// 	remove = 3

// 	output :- [1,2,4,5]


function remove(ar,rem) {
    var ans = ar.filter(ele=>ele!=rem);
    console.log(ans);
}
remove(arr,19);


//--------------------------------------------------------------------------------------------


// 7. Write a function to find the second largest number in an array.

// ex:- var arr = [12,4,6,9,2,15,3,9];
		
// 		output second largest : 12


function findSecLarg(a) {
    a.sort((fv,sv)=>fv-sv);
    if (a.length == 0) return; 
    var l = a[a.length - 1];
    var ans = a.filter(ele=>ele!=l);
    console.log(ans[ans.length - 1]);
}
var a = [12,4,15,6,9,2,15,3,9];
findSecLarg(a);


//------------------------------------------------------------------------------------------

// 8.Write a function to rotate an array by a given number of steps to the right.
// ex:- arr = [1,2,3,4,5];
// 		step = 2;

//  output = [5,4,1,2,3]


function rot(ar , step) {
    step = step % ar.length;
    var ans = [];
    for (var i = ar.length - step ; i < ar.length ; i++) {
        ans.push(ar[i]);
    }
    for (var i = 0 ; i < ar.length - step ; i++) {
        ans.push(ar[i]);
    }
    console.log(ans);
}
rot([1,2,3,4,5] , 2);


//-----------------------------------------------------------------------------------------------------


// 9.Write a function to find the intersection of two arrays (common elements between the two arrays).

// ex:- arr1 = [2,4,1,7,4,2] , arr2 = [5,1,4,7,3,1];

// output = [1,4,7]


var ar1 = [2,4,1,7,4,2];
var ar2 = [5,1,4,7,3,1];

var ans = ar1.filter(ele=>ele==ar2.find(e=>e==ele));
var set = new Set(ans);                                        // convert array to set
console.log(Array.from(set));                                  //convert set to array


//-----------------------------------------------------------------------------------------------------


// 10.Write a function to remove duplicate elements from an array while preserving the original order.
// 	ex:- arr = [1,2,5,2,5,1,6,7,7]

// 		output:- [1,2,5,6,7]



function remDup(arr) {
    var set = new Set(arr);
    return Array.from(set);
}
console.log(remDup([1,2,5,2,5,1,6,7,7]));