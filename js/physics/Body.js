function Body(x,y,xVel,yVel,mass){
  this.pos = createVector(x,y);
  this.vel = createVector(xVel,yVel);
  this.mass = mass;
  this.momentum = 0

  Body.prototype.show = function () {
    ellipse(this.pos.x,this.pos.y,20,20)
  };

  Body.prototype.update = function () {
    this.momentum = p5.Vector.mult(this.vel,this.mass);
    this.vel = p5.Vector.div(this.momentum,this.mass);
    this.pos.add(this.vel);
  };






}
