function Ship(){
  this.pos = createVector(width/2,height/2);
  this.velocity = createVector();
  this.acceleration = createVector();
  this.rotation = 0;
  this.change = 0;
  this.thrusting = false;
  this.dir = createVector();
  this.update=function(){
      this.velocity.add(this.acceleration);
      this.pos.add(this.velocity);

  }

  this.show = function(){
    this.rotation += this.change % 6.3;
    push();

    map(this.rotation,0,TWO_PI,0,360);
    translate(this.pos.x,this.pos.y);
    noFill();
    rotate(this.rotation);
    strokeWeight(1);
    stroke(255);
    triangle(0,-30,15,15,-15,15);

    pop();
  }

  this.thrust = function(){

    rotate(this.rotation);

    if (this.thrusting){
      this.dir
      this.acceleration.set(0,-0.8);
    } else{
      this.acceleration.set(0,0);
    }

  }



}
