var particles = [];
var font;
var backg = 51;
function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}




function setup() {
  createCanvas(600,600);
  stroke(255);
  strokeWeight(3);

  var points = font.textToPoints('HI', 50, 175, 120, {
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
