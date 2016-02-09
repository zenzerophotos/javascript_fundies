var a = 2;
var b = 2.0;

var c = true;
var d = false;

var x = 'bacon';
var y = "bacon";

var z = [1, true, 'hammer'];
var obj = {firstName:'Justin', lastName: 'Dennisin'};
var objAlso = { 'firstName': 'Justin', 'lastName': 'Dennison'};

console.log(a+b);
console.log(c && d);
console.log(x+y+x);
console.log(z[2]);
z[2] = 'crowbar';
console.log(z);
console.log(obj.firstName);
console.log(objAlso["firstName"]);
obj.firstName = "MC";
console.log(obj.firstName);

//Talk about data types

//How does one use if/else/elseif

//for loops

//Arrays

//Objects


// Assignment: Create a variable for each of the following data types-
//             A. number
var aNumber = 7;
console.log('aNumber' + aNumber);
var aa = 35;
var ab = 12;
console.log(aa + ab);
//             B. string

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log(pos);

//             C. boolean
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean('');
var bfalse = new Boolean(false);
//             D. array

//                 i. Create an array with three numbers in it.
//             E. object

//                 i. You must have two properties name and age
//                 ii. You can set those properties to values of any type, but you must have a value
//
//     A. Using the number and MDN documentation/others that you can console.log the results of various math operations: *, /, +, -, square root, floor, ceil, and a random number between 0 and 1.
//     B. Using the string variable console.log each of the following:
//             - Add the word "Hey" to the end of your string variable
//             - The second letter of your string variable's value
//             - The index of the letter 'e' in your string
//             - The first three letters of your string
//     C. Use your boolean [called bool in these instructions] print the results of your boolean expressions for the following:
//             - !bool
//             - bool || false
//             - bool || true
//             - bool && false
//             - bool && true
//             - !(bool || false)
//             - !(bool && false)
//     D. Console.log the following:
//         - The last element of the array WITHOUT changing the array
//         - The last element of the array WITH changing the array
//         - Log the array after adding an element to the end of the array
//         - Log the array after adding an element to the second position
//         - Log the array after removing an element from the third position
//     E. Console.log the following:
//         - The value of the name property of the object
//         - The value of the name property in a different way than you did initially
//         - Change the age property of the object and log the object
//         - Change the age property of the object and log the object but use a different method
//
    // CHALLENGE: Print the elements of your array from D one at a time using a for loop.
    // Let's define some variables and use those variables to write
    // to the console.
    // Define variables: a,b,c,x,y,z to different data types
