function Particle(x,y,xVel,yVel){
  this.pos = createVector(x,y);
  this.vel = createVector(xVel,yVel);
  this.acc = createVector();


  this.show = function(){
    stroke(255)
    strokeWeight(5)
    point(this.pos.x,this.pos.y)
  }

  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }


}
