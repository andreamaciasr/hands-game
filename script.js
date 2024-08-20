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
const d = document.getElementById("d");
const g = document.getElementById("g");
const h = document.getElementById("h");
const k = document.getElementById("k");
const spacebar = document.getElementById("spacebar");

const elements = {
  d: d,
  g: g,
  h: h,
  k: k,
  spacebar: spacebar,
};

/*----- event liste   ners -----*/
document.addEventListener("keydown", checkKey);

/*----- functions -----*/
initialize();

function initialize() {
  scoreBoard.innerText = iteration - 1;
}
initialize();

function initialize() {
  scoreBoard.innerText = iteration - 1;
}

function checkKey(event) {
  let key = event.key.toLowerCase();
  if (key === " ") key = "spacebar";
  jump(key);
  if (currentSequence.length == 0) {
    iteration++;
    currentSequence = getSequence(iteration);
    scoreBoard.innerText = iteration - 1;
    scoreBoard.innerText = iteration - 1;
  }
  if (key === currentSequence[0]) {
    currentSequence.shift();
    banner.innerText = "good";
    console.log(currentSequence);
    return currentSequence;
  } else {
    banner.innerText = "fail";
    // document.removeEventListener("keydown", checkKey);
    return false;
  }
}

function playSound() {
  let sound = document.getElementById("sound");
  sound.currentTime = 0;
  sound.play();
}

function jump(key) {
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
  console.log(currentSequence);
  return currentSequence;
}
