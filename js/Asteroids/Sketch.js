
var asteroids = [];
var ship;
function setup(){
  createCanvas(windowWidth-20,windowHeight-20);
  for(var i = 0; i < 4;i++){
  asteroid = new Asteroid();
  asteroids.push(asteroid);
}
  ship = new Ship();
}

function draw(){
  background(1);
  for(var i = 0; i < asteroids.length;i++){
  asteroids[i].show();
  asteroids[i].update();
  asteroids[i].edges();
}

  ship.show();
  ship.update();
  push();
  map(ship.rotation,0,TWO_PI,0,360);

  rotate(ship.rotation);
  ship.thrust();
  pop();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    ship.change = -0.1;
  } else if (keyCode === RIGHT_ARROW) {
    ship.change = 0.1;
  } else if (keyCode === UP_ARROW){
    ship.thrusting = true;
  }
}
function keyReleased(){
  ship.change = 0;
  ship.thrusting = false;
}
