"use strict";

let computerPoints = 0;
let playerPoints = 0;

window.addEventListener("load", start);

// ======== start function =======
function start() {
  console.log("JS kører");
  document.querySelector("#start-game-button").addEventListener("click", startGameClicked);
}

// ======== start game function clicked =======
function startGameClicked() {
  document.querySelector("#rock-button").classList.remove("hidden");
  document.querySelector("#paper-button").classList.remove("hidden");
  document.querySelector("#scissors-button").classList.remove("hidden");
  document.querySelector("#rock-button").addEventListener("click", chooseRock);
  document.querySelector("#paper-button").addEventListener("click", choosePaper);
  document.querySelector("#scissors-button").addEventListener("click", chooseScissors);
}

// ======== rock chosen in game =======
function chooseRock() {
  console.log("Rock chosen");
  document.querySelector("#rock-headline-player").classList.remove("hidden");
  document.querySelector("#rock-image-player").classList.remove("hidden");
  document.querySelector("#rock-button").classList.add("hidden");
  document.querySelector("#paper-button").classList.add("hidden");
  document.querySelector("#scissors-button").classList.add("hidden");
  computerChosenWhatToPlay();
}

// ======== paper chosen in game =======
function choosePaper() {
  console.log("Paper chosen");
  document.querySelector("#paper-headline-player").classList.remove("hidden");
  document.querySelector("#paper-image-player").classList.remove("hidden");
  document.querySelector("#rock-button").classList.add("hidden");
  document.querySelector("#paper-button").classList.add("hidden");
  document.querySelector("#scissors-button").classList.add("hidden");
  computerChosenWhatToPlay();
}

// ======== scissors chosen in game =======
function chooseScissors() {
  console.log("Scissors chosen");
  document.querySelector("#scissors-headline-player").classList.remove("hidden");
  document.querySelector("#scissors-image-player").classList.remove("hidden");
  document.querySelector("#rock-button").classList.add("hidden");
  document.querySelector("#paper-button").classList.add("hidden");
  document.querySelector("#scissors-button").classList.add("hidden");
  computerChosenWhatToPlay();
}

// ======== computer chooses in game 0 is rock, 1 is paper and 2 is scissors =======
function computerChosenWhatToPlay() {
  let computerNumber = Math.random();
  computerNumber = Math.floor(computerNumber * 3);
  console.log(computerNumber);
  if (computerNumber === 0) {
    document.querySelector("#rock-headline-computer").classList.remove("hidden");
    document.querySelector("#rock-image-computer").classList.remove("hidden");
  } else if (computerNumber === 1) {
    document.querySelector("#paper-headline-computer").classList.remove("hidden");
    document.querySelector("#paper-image-computer").classList.remove("hidden");
  } else if (computerNumber === 2) {
    document.querySelector("#scissors-headline-computer").classList.remove("hidden");
    document.querySelector("#scissors-image-computer").classList.remove("hidden");
  }
}
