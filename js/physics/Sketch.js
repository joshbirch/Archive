var x;
var y;
function setup() {
  createCanvas(600,600);
  x = new Body(100,height/2,0.1,0,1)
  y = new Body(50,height/2,2,0,1)
}

function draw(){
  background(51);
  x.show();
  x.update();
  y.show();
  y.update();


  if (dist(x.pos.x,x.pos.y,y.pos.x,y.pos.y) == 0){
    console.log("Hit")
    mom = p5.Vector.add(x.momentum,y.momentum);
    mom.div(2)
    x.momentum = mom;
    y.momentum = mom;
  }


}
