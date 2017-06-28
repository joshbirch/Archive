var terrain;
var wheel1;
var wheel2;

function setup() {
  createCanvas(600,600);
  terrain = new Terrain();
  wheel1 = new Wheel(30);
  wheel2 = new Wheel(110);
}

function draw(){
  background(70, 64, 158)
  terrain.getPoints();
  terrain.show();
  noFill();
  wheel1.update();
  wheel2.update();
  wheel1.applyForce(gravity);
  wheel2.applyForce(gravity);
  wheel1.show();
  wheel2.show();
  terrain.showGround();

  fill(245, 236, 24)
  strokeWeight(1);
  beginShape();
  vertex(wheel2.pos.x,wheel2.pos.y);
  vertex(wheel1.pos.x,wheel1.pos.y);
  vertex(wheel1.pos.x,wheel1.pos.y-40);
  vertex(wheel2.pos.x,wheel2.pos.y-40);

  endShape();


}
function keyPressed() {

  if (keyCode === LEFT_ARROW) {
    wheel1.dir -= 10;
    wheel2.dir -= 10;

  } else if (keyCode === RIGHT_ARROW) {
    wheel1.dir += 10;
    wheel2.dir += 10;
  }
}

function keyReleased() {
    wheel1.dir = 0;
    wheel2.dir = 0;
  }
