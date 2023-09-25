'use strict';

/* DOM: Document Object Model */
/* The DOM allows us to use JavaScript to access HTML elememts and styles in order to manipulate them*/

/***** DOM Manipulation *************************************/
console.log(document.querySelector('.message').textContent);

// Manipulate the text messages
document.querySelector('.message').textContent = 'New Player!';
document.querySelector('.number').textContent = '?';
document.querySelector('.score').value = 20;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 0;


/***** Events **********************************************/
/**  Getting user input **/
// create function for which we want to perform certain envent on the web page
function getInput (ranNum)
{
  // check user input and its data type
  const guess = Number(document.querySelector('.guess').
  value); 
  console.log(guess, typeof guess)  

  // display accurate text based on the game rule
  if (guess === ranNum) {
    document.querySelector('.message').textContent = 'Correct Number. You Win!';
    document.querySelector('.number').textContent = ranNum;

    document.querySelector('.highscore').textContent = score;
  }
  else if (guess < ranNum) {
    if (score > 0){
      document.querySelector('.message').textContent = 'It is higher than that number!';

    --score;
    document.querySelector('.score').textContent = score;
    }
  }
  else if (guess > ranNum) {
    if (score > 0){
      document.querySelector('.message').textContent = 'It is lower than that number!';

      --score;
      document.querySelector('.score').textContent = score;
    }
  }
  
  if (score === 0)
  {
    document.querySelector('.message').textContent = "You lost the game. Let's try again!";
  }

}

// method '.addEventListener' need function as a second parameter.
// It adds certain event on the webpage based on the condition which the second function argument has
// In below case, it log the user entered value when the button '.check' is clicked 
let ranNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = ranNum;
let score = Number(document.querySelector('.score').
value); 

document.querySelector('.check').addEventListener('click', function() {getInput(ranNum)});



/***** CSS Manipukation *************************************/
// change the background color
document.querySelector('body').style.backgroundColor = '#60b347';
// change the number properties' style and color
document.querySelector('.number').style.width = '30rem';
document.querySelector('.number').style.color = 'black';

