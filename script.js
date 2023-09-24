'use strict';
'use strict';

/* DOM: Document Object Model */
/* The DOM allows us to use JavaScript to access HTML elememts and styles in order to manipulate them*/

console.log(document.querySelector('.message').textContent);

// Manipulate the text messages
document.querySelector('.message').textContent = 'New Player!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

// Getting user input
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
