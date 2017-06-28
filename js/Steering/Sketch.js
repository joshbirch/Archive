var particles = [];
var font;
var backg = 51;
function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function resetFont(word){

  var points = font.textToPoints(word, 50, 175, 150, {
    sampleFactor: 0.5
  });
  for (var i = 0;i < points.length;i++){

    particles[i].target = createVector(points[i].x,points[i].y);
  }
  for (var i = points.length-1;i < particles.length - point.length;i++){
    ran = random(width)
    particles[i].updatePos(ran,sin(ran)*(height));
  }
}

function setup() {
  createCanvas(600,600);
  stroke(255);
  strokeWeight(7);

  var points = font.textToPoints('HELLO!!!', 50, 175, 120, {
    sampleFactor: 0.5
  });
  for (var i = 0;i < points.length;i++){
    pt = points[i];
    var x = new Particle(pt.x,pt.y);
    particles.push(x);
  }
}

function draw(){
  background(backg);
  for (var i = 0;i<particles.length;i++){
    p = particles[i];
    p.behaviours();
    p.update();
    p.show();
}
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    stroke(255);
    backg = 51;

    resetFont("TRAIN");
  }else if (keyCode === RIGHT_ARROW) {
    stroke(252, 33, 184);
    backg = 255;
    resetFont("LOVE");


  }else if (keyCode === UP_ARROW) {
    stroke(255);
    backg = 51;

    resetFont("HI");
  }else if (keyCode === DOWN_ARROW) {
    stroke(255);
    backg = 51;

    resetFont("<3");
  }
}
