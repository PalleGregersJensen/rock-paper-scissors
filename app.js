window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  document.querySelector("#rock-button").addEventListener("click", chooseRock);
  document.querySelector("#paper-button").addEventListener("click", choosePaper);
  document.querySelector("#scissors-button").addEventListener("click", chooseScissors);
}

function chooseRock() {
    console.log("Rock chosen");
    document.querySelector
}

function choosePaper() {
  console.log("Paper chosen");
}

function chooseScissors() {
  console.log("Scissors chosen");
}
