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
  document.querySelector("#start-game-button").classList.add("hidden");
}

// ======== rock chosen in game =======
function chooseRock() {
  console.log("Rock chosen");
  let rockValue = this.value;
  document.querySelector("#rock-headline-player").classList.remove("hidden");
  document.querySelector("#rock-image-player").classList.remove("hidden");
  document.querySelector("#rock-button").classList.add("hidden");
  document.querySelector("#paper-button").classList.add("hidden");
  document.querySelector("#scissors-button").classList.add("hidden");
  computerChosenWhatToPlay(rockValue);
}

// ======== paper chosen in game =======
function choosePaper() {
  console.log("Paper chosen");
  let paperValue = this.value;
  document.querySelector("#paper-headline-player").classList.remove("hidden");
  document.querySelector("#paper-image-player").classList.remove("hidden");
  document.querySelector("#rock-button").classList.add("hidden");
  document.querySelector("#paper-button").classList.add("hidden");
  document.querySelector("#scissors-button").classList.add("hidden");
  computerChosenWhatToPlay(paperValue);
}

// ======== scissors chosen in game =======
function chooseScissors() {
  console.log("Scissors chosen");
  let scissorsValue = this.value;
  console.log(scissorsValue);
  document.querySelector("#scissors-headline-player").classList.remove("hidden");
  document.querySelector("#scissors-image-player").classList.remove("hidden");
  document.querySelector("#rock-button").classList.add("hidden");
  document.querySelector("#paper-button").classList.add("hidden");
  document.querySelector("#scissors-button").classList.add("hidden");
  computerChosenWhatToPlay(scissorsValue);
}

// ======== computer chooses in game 0 is rock, 1 is paper and 2 is scissors =======
function computerChosenWhatToPlay(playerValue) {
  let computerNumber = Math.random();
  computerNumber = Math.floor(computerNumber * 3);
  console.log(computerNumber);
  if (computerNumber === 0) {
    document.querySelector("#rock-headline-computer").classList.remove("hidden");
    document.querySelector("#rock-image-computer").classList.remove("hidden");
    if (playerValue === "scissors") {
      computerPoints++;
      console.log(computerPoints);
    } else if (playerValue === "paper") {
      playerPoints++;
      console.log(playerPoints);
    } else if (playerValue === "rock") {
    }
  } else if (computerNumber === 1) {
    document.querySelector("#paper-headline-computer").classList.remove("hidden");
    document.querySelector("#paper-image-computer").classList.remove("hidden");
    if (playerValue === "scissors") {
      playerPoints++;
      console.log(playerPoints);
    } else if (playerValue === "paper") {
    } else if (playerValue === "rock") {
      computerPoints++;
      console.log(computerPoints);
    }
  } else if (computerNumber === 2) {
    document.querySelector("#scissors-headline-computer").classList.remove("hidden");
    document.querySelector("#scissors-image-computer").classList.remove("hidden");
    if (playerValue === "scissors") {
    } else if (playerValue === "paper") {
      computerPoints++;
      console.log(computerPoints);
    } else if (playerValue === "rock") {
      playerPoints++;
      console.log(playerPoints);
    }
  }
  showPoints();
  document.querySelector("#next-challenge-button").classList.remove("hidden");
  document.querySelector("#next-challenge-button").addEventListener("click", nextGameClicked);
}

function showPoints() {
  document.querySelector("#computer-points").textContent = computerPoints;
  document.querySelector("#player-points").textContent = playerPoints;
}

function nextGameClicked() {
  document.querySelector("#rock-button").classList.remove("hidden");
  document.querySelector("#paper-button").classList.remove("hidden");
  document.querySelector("#scissors-button").classList.remove("hidden");

  document.querySelector("#rock-headline-player").classList.add("hidden");
  document.querySelector("#rock-image-player").classList.add("hidden");
  document.querySelector("#scissors-headline-player").classList.add("hidden");
  document.querySelector("#scissors-image-player").classList.add("hidden");
  document.querySelector("#paper-headline-player").classList.add("hidden");
  document.querySelector("#paper-image-player").classList.add("hidden");

  document.querySelector("#rock-headline-computer").classList.add("hidden");
  document.querySelector("#rock-image-computer").classList.add("hidden");
  document.querySelector("#scissors-headline-computer").classList.add("hidden");
  document.querySelector("#scissors-image-computer").classList.add("hidden");
  document.querySelector("#paper-headline-computer").classList.add("hidden");
  document.querySelector("#paper-image-computer").classList.add("hidden");

  document.querySelector("#rock-button").addEventListener("click", chooseRock);
  document.querySelector("#paper-button").addEventListener("click", choosePaper);
  document.querySelector("#scissors-button").addEventListener("click", chooseScissors);
  document.querySelector("#start-game-button").classList.add("hidden");
}
