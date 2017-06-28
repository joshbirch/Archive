function Wheel(mov){
  this.mov = mov;
  this.dir = 0

  this.pos = createVector(this.mov,height);
  this.vel = createVector();
  this.acc = createVector();

  gravity = createVector(0,0.5);

  this.show = function(){
    ellipse(this.pos.x,this.pos.y,20,20);

  }

  this.update = function(){
    this.mov += this.dir

    this.pos = createVector(this.mov,height);

    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);

    if (this.pos.y >= terrain.points[this.mov*2+1]-8){
      this.pos.y = terrain.points[this.mov*2+1]-12;
    }
  }

  this.applyForce = function(x){
    this.acc.add(x);
  }



}
