"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const bodyColor = document.querySelector("body");
const scoreAll = document.querySelector(".score");
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message.textContent = "No number ⛔";
  } else if (guess === secretNumber) {
    message.textContent = "Correct Number 🎉";
    number.textContent = secretNumber;
    bodyColor.style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    message.textContent = "Too high! 📈";
    score--;
    if (score < 0) {
      return (message.textContent = "you lose");
    }
  } else if (guess < secretNumber) {
    message.textContent = "Too low! 📉";
    score--;
    if (score < 0) {
      return (message.textContent = "You lost the game 😔");
    }
  }
  scoreAll.textContent = score;
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";
  scoreAll.textContent = score;
  number.textContent = "?";
  bodyColor.style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
