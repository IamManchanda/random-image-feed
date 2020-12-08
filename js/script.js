const loadText = document.getElementById("loading-text");
const bg = document.getElementById("bg");
const container = document.getElementById("container");

const unsplashURL = "https://source.unsplash.com/random/";
const rows = 5;
const columns = 6;
const interval = setInterval(blurring, 30);
let load = 0;

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 30) + 300;
}

for (let i = 0; i < rows * columns; i++) {
  const img = document.createElement("img");
  console.log(getRandomSize());
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

function blurring() {
  load++;
  if (load > 99) clearInterval(interval);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(num, inMin, inMax, outMin, outMax) {
  // Source: https://stackoverflow.com/a/23202637/3301436
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
