const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');

const playerImage = new Image();
playerImage.src = 'gdicon.png';

const obstacleImage = new Image();
obstacleImage.src = 'obstacle.png';

const blockImage = new Image();
blockImage.src = 'block.png';

let player = {
  x: 50,
  y: 550,
  width: 50,
  height: 50,
  speedY: 0
};

let gravity = 0.9;
let jumpStrength = 15;
let obstacles = [];
let blocks = [];
let gameOver = false;

function generateMap() {
  // ... (rest of the generateMap function)
}

function update() {
  if (gameOver) {
    window.location.href = 'index.html'; // Redirect on game over
    return;
  }
  // ... (rest of the update function)
}

function draw() {
  // ... (rest of the draw function)
}

function handleKeyPress(event) {
  // ... (rest of the handleKeyPress function)
}

document.addEventListener('keydown', handleKeyPress);

startButton.addEventListener('click', function() {
  startButton.style.display = 'none';
  player.y = 550;
  player.speedY = 0;
  obstacles = [];
  blocks = [];
  generateMap();
  gameOver = false;
});

setInterval(function() {
  update();
  draw();
}, 1000 / 60);

generateMap();

let imagesLoaded = 0;
let totalImages = 3; // Total number of images to load

function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    startGame();
  }
}

playerImage.onload = imageLoaded;
obstacleImage.onload = imageLoaded;
blockImage.onload = imageLoaded;

function startGame() {
  // Attach event listeners and start the game loop
  document.addEventListener('keydown', handleKeyPress);
  startButton.addEventListener('click', startButtonHandler);
  setInterval(gameLoop, 1000 / 60);
  generateMap();
}

function startButtonHandler() {
  startButton.style.display = 'none';
  player.y = 550;
  player.speedY = 0;
  obstacles = [];
  blocks = [];
  generateMap();
  gameOver = false;
}

function gameLoop() {
  update();
  draw();
}
