let ride = document.querySelector(".ride");

ride.addEventListener("click", () => {
  let rideSound = new Audio("./assets/ride.wav");
  rideSound.play();
})

let floorTom = document.querySelector(".floorTom");

floorTom.addEventListener("click", () => {
  let floorTom = new Audio("./assets/floor-tom.wav");
  floorTom.play();
})


let medTom = document.querySelector(".medTom");

medTom.addEventListener("click", () => {
  let medTom = new Audio("./assets/medium-tom.wav");
  medTom.play();
})

let hiTom = document.querySelector(".hiTom");

hiTom.addEventListener("click", () => {
  let hiTom = new Audio("./assets/high-tom.wav");
  hiTom.play();
})

let snare = document.querySelector(".snare");

snare.addEventListener("click", () => {
  let snare = new Audio("./assets/snare.wav");
  snare.play();
})



let bass = document.querySelector(".bass");

bass.addEventListener("click", () => {
  let bassSound = new Audio("./assets/bass.wav");
  bassSound.play();
})

let hiHat = document.querySelector(".hiHat");

hiHat.addEventListener("click", () => {
  let hiHat = new Audio("./assets/hi-hat.wav");
  hiHat.play();
})



let crash = document.querySelector(".crash");

crash.addEventListener("click", () => {
  let crashSound = new Audio("./assets/crash.wav");
  crashSound.play();
})


document.onkeydown = function (r) {
  let keyCode = r.key;
  if (keyCode === 'r') {
    ride();
  }
}

