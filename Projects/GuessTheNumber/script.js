let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess =  1;

let playgame = true;

if(playgame){
        submit.addEventListener('click', function(e){
         e.preventDefault();
         const guess = parseInt(userInput.value);
         validateguess(guess)
        });

}

function validateguess(guess){
if(isNaN(guess)){
        alert('Please enter a valid Input');
        return;
}
else if(guess < 1){
        alert('please choose Number between 1 to 100');
}
else if(guess > 100){
        alert('please choose number between 1 to 100');
}
else{
        prevGuess.push(guess);
        if(numGuess === 11){
                
                displayGuess(guess);
                displayMessage(`game Over. The Number was ${randomNumber}`);
                endgame();
        }else{
                displayGuess(guess);
                checkGuess(guess);
        }
}
}

function checkGuess(guess){
        if(guess === randomNumber){
                displayMessage(`Congo! You have guessed the right number`);
                endgame();
                
        }
        else if(guess > randomNumber){
                displayMessage(`You have guessed TOO High Value`);
        }
        else if(guess < randomNumber){
                displayMessage(`You have guessed TOO Low value`);
        }
                 
}
function displayGuess(guess){
        userInput.value = '';
        guessSlot.innerHTML += `${guess}  ,  `;
        numGuess++;
        remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endgame(){
        userInput.value = '';
        userInput.setAttribute('disabled', '');
        p.classList.add('button');
        p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
        startOver.appendChild(p);
        playgame = false;
        startgame();

}

function startgame(){
        const newGameButton = document.querySelector('#newGame');
        newGameButton.addEventListener('click', function (e) {
          randomNumber = parseInt(Math.random() * 100 + 1);
          prevGuess = [];
          numGuess = 1;
          guessSlot.innerHTML = '';
          remaining.innerHTML = ``;
          p.innerHTML = `<h2>Game Restart</h2>`;
          userInput.removeAttribute('disabled');
          startOver.removeChild(p);
      
          playgame = true;
        });
      }