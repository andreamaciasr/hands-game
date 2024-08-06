const right = [" ", "d"];
const left = [" ", "k"];
const double = [" ", " ", "h", "g"];
const baseSequence = [right, left, double];
Object.freeze(baseSequence);

/*----- state variables -----*/
let score = 0;
let iteration = 1;
let currentSequence = getSequence(iteration);

/*----- cached elements  -----*/
let banner = document.querySelector("h1");
let scoreBoard = document.getElementById("score");
let highestScore = document.getElementById("highest-score");

/*----- event listeners -----*/
document.addEventListener("keydown", checkKey);

/*----- functions -----*/
initialize();

function initialize() {
  scoreBoard.innerText = iteration - 1;
}

function checkKey(event) {
  event.preventDefault();
  let key = event.key.toLowerCase();
  changeImage(key);
  playSound();
  if (currentSequence.length == 0) {
    iteration++;
    currentSequence = getSequence(iteration);
    scoreBoard.innerText = iteration - 1;
  }
  if (key === currentSequence[0]) {
    currentSequence.shift();
    banner.innerText = "good";
    console.log(currentSequence);
    return currentSequence;
  } else {
    banner.innerText = `You clicked ${key} instead of "_${currentSequence[0]}_"`;
    document.removeEventListener("keydown", checkKey);
    return false;
  }
}

function playSound() {
  let sound = document.getElementById("sound");
  sound.currentTime = 0;
  sound.play();
}

function changeImage(key) {
  switch (key) {
    case "d":
      document.getElementById("d").src = "./images/d2.png";
      document.getElementById("g").src = "./images/g1.jpg";
      document.getElementById("h").src = "./images/h1.png";
      document.getElementById("k").src = "./images/k1.png";
      document.getElementById("spacebar").src = "./images/spacebar1.png";
      break;
    case "g":
      document.getElementById("d").src = "./images/d1.png";
      document.getElementById("g").src = "./images/g2.jpg";
      document.getElementById("h").src = "./images/h1.png";
      document.getElementById("k").src = "./images/k1.png";
      document.getElementById("spacebar").src = "./images/spacebar1.png";
      break;
    case "h":
      document.getElementById("d").src = "./images/d1.png";
      document.getElementById("g").src = "./images/g1.jpg";
      document.getElementById("h").src = "./images/h2.png";
      document.getElementById("k").src = "./images/k1.png";
      document.getElementById("spacebar").src = "./images/spacebar1.png";
      break;
    case "k":
      document.getElementById("d").src = "./images/d1.png";
      document.getElementById("g").src = "./images/g1.jpg";
      document.getElementById("h").src = "./images/h1.png";
      document.getElementById("k").src = "./images/k2.png";
      document.getElementById("spacebar").src = "./images/spacebar1.png";
      break;
    case " ":
      document.getElementById("d").src = "./images/d1.png";
      document.getElementById("g").src = "./images/g1.jpg";
      document.getElementById("h").src = "./images/h1.png";
      document.getElementById("k").src = "./images/k1.png";
      document.getElementById("spacebar").src = "./images/spacebar2.png";
      break;
  }
}

function getSequence(iteration) {
  let currentSequence = [];
  for (let i = 0; i < baseSequence.length; i++) {
    for (let j = 0; j < iteration; j++) {
      currentSequence.push(...baseSequence[i]);
    }
  }
  console.log(currentSequence);
  return currentSequence;
}
