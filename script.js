const right = [" ", "d"];
const left = [" ", "k"];
const double = [" ", " ", "h", "g"];
const baseSequence = [right, left, double];
if (localStorage.getItem("highestScore") === null) {
  localStorage.setItem("highestScore", 0);
}

/*----- state variables -----*/
let iteration;
let score;
let currentSequence;

/*----- cached elements  -----*/
const banner = document.getElementById("banner");
const scoreBoard = document.getElementById("score");
const highestBoard = document.getElementById("highest");
const d = document.getElementById("d");
const g = document.getElementById("g");
const h = document.getElementById("h");
const k = document.getElementById("k");
const spacebar = document.getElementById("spacebar");
const highestScore = localStorage.getItem("highestScore");
const restartButton = document.getElementById("play-again");

const elements = {
  d: d,
  g: g,
  h: h,
  k: k,
  spacebar: spacebar,
};

/*----- functions -----*/
initialize();

function initialize() {
  document.addEventListener("keydown", checkKey);
  restartButton.addEventListener("click", restart);
  restartButton.style.display = "none";
  iteration = 1;
  score = iteration - 1;
  currentSequence = getSequence(iteration);
  scoreBoard.innerText = `score: ${score}`;
  highestBoard.innerText = `highest: ${highestScore}`;
  banner.innerText = "";
}

function restart() {
  initialize();
}

function setHighest() {
  if (parseInt(highestScore) < score) {
    localStorage.setItem("highestScore", score);
    highestBoard.innerText = `highest: ${highestScore}`;
  }
}

function checkKey(event) {
  event.preventDefault();
  let key = event.key.toLowerCase();
  jump(key);
  if (currentSequence.length == 0) {
    iteration++;
    currentSequence = getSequence(iteration);
    score++;
    scoreBoard.innerText = score;
  }
  if (key === currentSequence[0]) {
    currentSequence.shift();
    playSound(1);
    banner.innerText = "good";
    return currentSequence;
  } else {
    gameOver(key);
    return false;
  }
}

function gameOver(key) {
  let word = key === " " ? "spacebar" : key;
  banner.innerHTML = `You clicked <span style="color: orange;">${word}</span> instead of <span style="color: #FF1493;">"${currentSequence[0]}"</span>`;
  playSound(0);
  setHighest();
  document.removeEventListener("keydown", checkKey);
  restartButton.style.display = "block";
}

function playSound(move) {
  let sound = move ? "good" : "fail";
  sound = document.getElementById(sound);
  sound.currentTime = 0;
  sound.play();
}

function jump(key) {
  if (key === " ") key = "spacebar";
  let elem = elements[key];

  if (elem) {
    elem.src = `./images/${key}2.png`;
    elem.classList.add("jump");

    setTimeout(() => {
      elem.classList.remove("jump");
      elem.src = `./images/${key}1.png`;
    }, 500);
  }
}

function getSequence(iteration) {
  let currentSequence = [];
  for (let i = 0; i < baseSequence.length; i++) {
    for (let j = 0; j < iteration; j++) {
      currentSequence.push(...baseSequence[i]);
    }
  }
  return currentSequence;
}
