'use strict';
'use strict';

/* DOM: Document Object Model */
/* The DOM allows us to use JavaScript to access HTML elememts and styles in order to manipulate them*/

/***** DOM Manipulation *************************************/
console.log(document.querySelector('.message').textContent);

// Manipulate the text messages
document.querySelector('.message').textContent = 'New Player!';
document.querySelector('.number').textContent = '?';
document.querySelector('.score').textContent = 0;
document.querySelector('.guess').value = 0;


/***** Events **********************************************/
/**  Getting user input **/
// create function for which we want to perform certain envent on the web page
function getInput (ranNum)
{
  // read uesr's number selection 
  console.log(document.querySelector('.guess').value);

  // check user input and its data type
  const guess = Number(document.querySelector('.guess').
  value); 
  console.log(guess, typeof guess)  
  
// display accurate text based on the game rule
  if (guess === ranNum) {
    document.querySelector('.message').textContent = 'Correct Number. You Win!';
    document.querySelector('.number').textContent = ranNum;
  }
  else if (guess < ranNum) {
    document.querySelector('.message').textContent = 'It is higher than that number!';
    
  }
  else if (guess > ranNum) {
    document.querySelector('.message').textContent = 'It is lower than that number!';
    
  }
  

}

// method '.addEventListener' need function as a second parameter.
// It adds certain event on the webpage based on the condition which the second function argument has
// In below case, it log the user entered value when the button '.check' is clicked 
let ranNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = ranNum;
document.querySelector('.check').addEventListener('click', function() {getInput(ranNum)});


/*
 

*/