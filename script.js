'use strict';
'use strict';

/* DOM: Document Object Model */
/* The DOM allows us to use JavaScript to access HTML elememts and styles in order to manipulate them*/

/***** DOM Manipulation *************************************/
console.log(document.querySelector('.message').textContent);

// Manipulate the text messages
document.querySelector('.message').textContent = 'New Player!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;


/***** Events **********************************************/
// Getting user input
function getInput ()
{
  console.log(document.querySelector('.guess').value);
}

// method '.addEventListener' need function as a second parameter.
// It adds certain event on the webpage based on the condition which the second function argument has
// In below case, it log the user entered value when the button '.check' is clicked 
document.querySelector('.check').addEventListener('click', getInput);
