function Asteroid(){
  this.offset = [];
  this.r =random(25,75);
  this.pos = createVector(random(width),random(height));
  this.vel = createVector(random(-2,2),random(-2,2));

  for(var i=0;i < 10;i++){
    this.offset.push(random(-35,35));
  }

  this.show= function(){
    push();
    noFill();
    translate(this.pos.x,this.pos.y);
    beginShape();
    stroke(255);

    for(var i = 0; i < 10; i++){
      angle = map(i,0,10,0,TWO_PI);
      var x = (this.r+this.offset[i])*cos(angle);
      var y = (this.r+this.offset[i])*sin(angle);
      vertex(x,y);
    }
    endShape(CLOSE);
    pop();
  }

  this.update = function(){
    this.pos.add(this.vel);
  }
  this.edges = function(){
    if(this.pos.x < -this.r){
      this.pos.set(width,this.pos.y);
    }
    if(this.pos.x > width+this.r){
      this.pos.set(-this.r,this.pos.y);
    }
    if(this.pos.y < -this.r){
      this.pos.set(this.pos.x,height);
    }
    if(this.pos.y > height+this.r){
      this.pos.set(this.pos.x,-this.r);
    }
  }
}
