/*----- constants -----*/

/*----- state variables -----*/
let keys = {};
/*----- cached elements  -----*/
let score = document.querySelector("h1");

/*----- event listeners -----*/
document.addEventListener("keydown", function (event) {
  let key = event.key.toLowerCase();
  keys[key] = true;

  checkAS();
  checkDFHJ();
  checkKL();
  checkSpaceBar();
});

document.addEventListener("keyup", function (event) {
  keys[event.key] = false;
});

/*----- functions -----*/

function checkDFHJ() {
  if (keys["d"] && keys["f"] && keys["h"] && keys["j"]) {
    console.log('The "d", "f", "h", and "j" keys were pressed simultaneously');
  }
}

function checkAS() {
  if (keys["a"] && keys["s"]) {
    console.log('The "a", "s", keys were pressed simultaneously');
  }
}

function checkKL() {
  if (keys["k"] && keys["l"]) {
    console.log('The "s", "l", keys were pressed simultaneously');
  }
}

function checkSpaceBar() {
  if (keys[" "]) {
    console.log("Spacebar");
  }
}
