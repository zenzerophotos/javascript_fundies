//So when you click there is an event fired. To handle clicks then you need to write a click handler function and attach it to a button
var clickyButton = document.getElementById('clicky-button');
//Get the clicky-button and store that in a variable
clickyButton.addEventListener('click', ageInput);

//Add an event listener to the button so that it is waiting for a click on the button to run
function ageInput(){
var age = prompt ('How old are you?');
console.log('you are'+age+"years old");

}

//Refactor to have the function that is run during the click as a separate function --> separation

/******************************************************************/

// Assignment:
//     A. Create a div with the id of second and class of row under the div with the id of first

//     B. Add a button inside that div with the id of button and the classes btn and btn-success

//     C. Grab the element using the id and assign that to a variable called myButton.
var mybutton = document.getElementById('mybutton');
//     D. Create a function expression that uses the prompt feature from JavaScript asking for the user's name. Assign the return value to the variable name. Alert the name back to the user.
mybutton.addEventListener('click', nameInput);
// myButton.addFocusListener('')

function nameInput(){
  var name = prompt ("what's your name?")
  console.log("what's" +name+ "your name?")
}
//     E. Add a click listener to the button that is listening for a click and runs the function expression when clicked.

//     CHALLENGE: Create an input field with the id of name-input. Create and add a focus listener to that input field that alerts the user they have "focused" or clicked inside the input box.
