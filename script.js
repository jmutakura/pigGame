'use strict';

//start of the game
let score0_int = 0;
let score1_int = 0;

let score0_display = document.getElementById('score--0');
let score1_display = document.getElementById('score--1');
score0_display.innerHTML = score0_int;
score1_display.innerHTML = score1_int;

//getting the random number for the dice
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//button to roll dice
let dieRollButton = document.getElementById('btn--roll');
dieRollButton.onclick = () => {
  let randomDieRoll = getRandomInt(1, 7);
  let dice = document.getElementById('dice');
  dice.src = `dice-${randomDieRoll}.png`;
};
