let positionX = 60;
let speed = 4;
let bombes = [];
let lastBombe = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  fill('red');
  circle(positionX, 340, 30);
  positionX += speed;

  fill('yellow');
  if (bombes.length < 10 && lastBombe + 200 < millis()) {
    bombes.push({
      x: random(0, 600),
      y: 0,
    });
    lastBombe = millis();
  }
  for (bombe of bombes) {
    rect(bombe.x, bombe.y, 20, 30);
    if (bombe.y > 400) {
      bombe.x = random(0, 600);
      bombe.y = 0;
    } else {
      bombe.y += 5;
    }
    if (dist(bombe.x + 10, bombe.y + 15, positionX + 15, 355) < 30) {
      positionX = 60;
    }
  }
}

function mousePressed() {
  speed = -4;
}

function mouseReleased() {
  speed = 4;
}
