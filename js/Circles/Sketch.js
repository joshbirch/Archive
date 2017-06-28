var x;
var y;
var radius;
var total = 100;
var xoff= 0;
var inc = 0.0001;

function setup() {
  createCanvas(600,600);
}

function draw(){
  background(255);
  translate(300,300);
  fill(noise(xoff)*255,noise(xoff+0.1)*255,noise(xoff+0.2)*255,noise(xoff+0.3)*255);
  stroke(255);
  strokeWeight(4);
  beginShape();
  for (var a = 0;a < TWO_PI+0.1; a+=0.1){
    radius = noise(xoff)*200
    x = cos(a)*radius;
    y = sin(a)*radius;
    vertex(x,y);
    xoff += inc;
  }
  endShape();
}
