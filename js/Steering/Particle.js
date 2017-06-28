function Particle(x,y){
  this.pos = createVector();
  this.target = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.maxSpeed = 10;
  this.maxForce = 1;


  this.updatePos= function(x,y){
    oldX = this.pos.x;
    oldY = this.pos.y;
    this.target = createVector(x,y);
    if (this.target.x == oldX && this.target.y == oldY){
      this.target = createVector()
    }
  }


  this.behaviours = function(){
    var arrive = this.steer(this.target)
    var mouse = createVector(mouseX,mouseY);
    var flee = this.flee(mouse);
    flee.mult(5);
    this.applyForce(arrive)
    this.applyForce(flee);
  }

  this.applyForce = function(f){
    this.acc.add(f);
  }

  this.update = function(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }
  this.show = function(){
    point(this.pos.x,this.pos.y);
  }

  this.steer = function(desired){
    desiredV = p5.Vector.sub(desired,this.pos);
    d = desiredV.mag();
    speed = this.maxSpeed;
    if (d < 100){
      speed = map(d,0,100,0,this.maxSpeed);
    }
    desiredV.setMag(speed);
    var steer = p5.Vector.sub(desiredV,this.vel);
    steer.limit(this.maxForce);
    return steer;
  }

  this.flee = function(desired){
    var desiredV = p5.Vector.sub(desired, this.pos);
    var d = desiredV.mag();
    if (d < 50) {
      desiredV.setMag(this.maxSpeed);
      desiredV.mult(-1);
      var steer = p5.Vector.sub(desiredV, this.vel);
      steer.limit(this.maxForce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }
}
