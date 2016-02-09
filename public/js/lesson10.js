
  //Lets change some content and a little styles

  //Let's get ahold of all of these elements
  var emailInput = $('#email');
  var passwordInput = $('#password');
  var emailOutput = $('#email-output');
  var passwordOutput = $('#password-output');
  var button = $('button.btn.btn-primary');

  function doSomthingFunction(){
    var emailVal = emailInput.val();
    var passwordVal = passwordInput.val();
    console.log(emailVal);

    emailOutput.text(emailVal);
    passwordOutput.text(passwordVal);

    emailOutput.css('background-color', 'green');
    passwordOutput.css('background-color', 'red');

  }

  button.on('click',doSomthingFunction);
  //Let's write a handling function for the button click
      //use the elements from the form and get their values
      //apply that value as the innerText for the output respective output portions
      //add a little styling
  //Let's attach an eventListener to the button for the click event

  /*
  Assignment:
      - Add another form input of your choice... Maybe age or name?
      - Get a reference to the DOM element and assign that a variable
      - Add code to the click handler so that you achieve the following:
              - You update a value in the output section of your page
              - You alter the styles of the output for your field with the following
                  --> Your font color is red
                  --> Your element has a black background color
                  --> The element is added using JavaScript to your page under the already present output portions.
  */
