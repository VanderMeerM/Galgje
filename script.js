// Initialize ALL global variables here
const allWords = ["vis","toeter","developer","telefoon","moeder","snoer","geeuw"];
let tries = 0;

// This code here selects a random word

const wordPicker = function (list) {
  let index = Math.floor(Math.random() * list.length);
   return list[index];
};


//let inputs;
const wordGuessed = function (word, inputs) {
  // remove all letters from word that are already guessed
  // We can do this with a for loop too.
  let remaining = word.filter(function (letter) {
    // If the letter is guessed return true (we want to remove that right away)
    return !inputs.includes(letter);
  });
  // If we have letters left, right?
  return remaining.length === 0;
};


let gameOver;
const winTheGame = function () {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};

const loseTheGame = function () {
  // when losing 3 times, this has to happen
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

const showIncorrectLetters = function (word, inputs) {
  let wrongLetters = inputs.filter(function (letter) {
    // If the letter is in the word return.... false/true (we want to remove that then)
    return !word.includes(letter);
  });
  document.querySelector(".wrong_letters").innerHTML = wrongLetters.join(" ");
};

const showCurrentWord = function (word, inputLetterWords) {
    let display = word.map(function (letter) {
    if (inputLetterWords.includes(letter)) {
      console.log(inputLetterWords);
      console.log(letter);
      return letter;
    } else {
      return "_";
     
    }
    });
               
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

const guessLetter = function () {
 /* if (gameOver) {
    return;
  }*/
  const input = document.querySelector("input").value;
  document.querySelector("input").value = "";

  if (!word.includes(input)) {
    tries++;
    document.querySelector(".lives span").innerHTML = 5 - tries;
  }

  inputs.push(input);
  showCurrentWord(word, inputs);
  showIncorrectLetters(word, inputs);

  if (wordGuessed(word, inputs)) {
    winTheGame();
  } else if (tries >= 5) {
    loseTheGame();
  }
};


function startGame() {
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";


  word = wordPicker(allWords).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
  word;

  //tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;

  inputs = [];
  showCurrentWord(word, inputs);
  showIncorrectLetters(word, inputs);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document.querySelector(".restart").addEventListener("click", startGame);
    startGame();
});


module.exports = { wordPicker, wordGuessed, guessLetter, showCurrentWord };


