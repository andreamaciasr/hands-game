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
let banner2 = document.querySelector("h2");

/*----- event listeners -----*/
document.addEventListener("keydown", (event) =>
  checkKey(event, currentSequence)
);

/*----- functions -----*/

function checkKey(event) {
  let key = event.key;
  if (currentSequence.length == 0) {
    iteration++;
    currentSequence = getSequence(iteration);
  }
  if (key === currentSequence[0]) {
    currentSequence.shift();
    banner.innerText = "good";
    banner2.innerText = currentSequence[0];
    console.log(currentSequence);
    return currentSequence;
  } else {
    banner.innerText = "fail";
    return false;
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
