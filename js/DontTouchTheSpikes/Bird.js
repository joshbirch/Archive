
function Bird(mainX){
  this.x = 40;
  this.y = 20;

  this.direction = 5;

  this.gravity = 0.8;
  this.velocity = 0;
  this.uplift = -18;

fill(random(255),random(255),random(255));
noStroke();
  this.show = function() {
      ellipse(this.x,this.y,40,34);
  }


  

  this.update = function(){
      this.y += this.velocity;
      this.velocity += this.gravity;
      this.velocity *= 0.95

      if(this.y> height){
        this.velocity = 0;
        this.y = height;
      }
      if(this.y< 0){
        this.velocity = 0;
        this.y = 0;
      }
      this.x += this.direction;
    }
  this.up = function(){
    this.velocity = this.velocity + this.uplift;
  }
}
