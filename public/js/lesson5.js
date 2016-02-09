
    //Lets change some content and a little styles

    //Let's get ahold of all of these elements
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var socialInput = document.getElementById('social');
    var button = document.querySelector('button.btn.btn-primary');
    var emailOutput = document.querySelector('#email-output');
    var passwordOutput = document.querySelector('#password-output');
    var socialOutput = document.querySelector('#social-output');
    //Let's write a handling function for the button click
    function clickHandler(){

      var emailValue = emailInput.value;
      var passwordValue = passwordInput.value;
      var socialValue = socialInput.value;
        //use the elements from the form and get their values
    emailOutput.innerText = emailValue;
    passwordOutput.innerText = passwordValue;
    socialOutput.innerText = socialValue;
        //apply that value as the innerText for the output respective output portions
        //add a little styling
    emailOutput.style.backgroundColor = 'red';
    passwordOutput.style.backgroundColor = 'red';
    socialOutput.style.backgroundColor = 'black';
    socialOutput.style.color = 'red';
      }
    //Let's attach an eventListener to the button for the click event
    button.addEventListener('click', clickHandler);


    // Assignment:
    //     - Add another form input of your choice... Maybe age or name?
    //     - Get a reference to the DOM element and assign that a variable
    //     - Add code to the click handler so that you achieve the following:
    //             - You update a value in the output section of your page
    //             - You alter the styles of the output for your field with the following
    //                 --> Your font color is red
    //                 --> Your element has a black background color
    //                 --> The element is added using JavaScript to your page under the already present output portions.
