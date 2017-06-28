var x;
function setup() {
  createCanvas(600,600);
  x = new Circle(300,300,100)
}

function draw(){
  background(0);
  x.show()
  x.update();
}

function mousePressed() {

  if (x.contains()){
    x.moving = true
  }
}


function mouseReleased(){
  x.moving = false
}
