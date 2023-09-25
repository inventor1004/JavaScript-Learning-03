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
document.querySelector('.guess').value = '';
document.querySelector('.highscore').value = 0;



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

    if ( score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }

  }
  else if(guess !== ranNum ) {
    if (score > 0){
      document.querySelector('.message').textContent = guess < ranNum ? 'It is higher than that number!' : 'It is lower than that number!';

      --score;
      document.querySelector('.score').textContent = score;
    }
  }
  
  
  if (score === 0)
  {
    document.querySelector('.message').textContent = "You lost the game. Let's try again!";
  }

}


function newGame() {
  // initialzing the properties
  score = 20;
  ranNum = Math.trunc(Math.random() * 20) + 1;
  console.log('New random number ' + ranNum);
  // initialzing the text messages
  document.querySelector('.message').textContent = 'New Player!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
}
// method '.addEventListener' need function as a second parameter.
// It adds certain event on the webpage based on the condition which the second function argument has
// In below case, it log the user entered value when the button '.check' is clicked 

// ganerating the random number
let ranNum = Math.trunc(Math.random() * 20) + 1;
console.log(ranNum);

// declare the variable score
let score = Number(document.querySelector('.score').value);

let highScore = 0;

// add the event which perform the guessing game
document.querySelector('.check').addEventListener('click', function() {getInput(ranNum)});

// add the event which perform play again the game when the user selects the 'Again!' button
document.querySelector('.again').addEventListener('click',function() {newGame()});


/***** CSS Manipukation *************************************/
// change the background color
document.querySelector('body').style.backgroundColor = '#60b347';
// change the class properties' style and color
document.querySelector('.number').style.width = '30rem';
document.querySelector('.number').style.color = 'black';

document.querySelector('.message').style.fontSize = '3rem';

