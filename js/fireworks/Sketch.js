var firework;
function setup() {
  createCanvas(600,600);
  firework = new Firework();
}

function draw() {
    background(51);
    fill(0,255,0);
    noStroke();
    rect(0,height-100,width,100)
    fill(200,60,130)
    firework.update();
    firework.draw();
}
