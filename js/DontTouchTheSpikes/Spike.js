function Spike(side){
  this.x=500*side;
  this.y = random(height);

  this.show= function(s){
    this.s = s
      fill(200)

      if (this.s < 1){
        triangle(this.x,this.y,this.x+40,this.y+20,this.x,this.y+40);
      }else if (this.s == 5){
          triangle(this.x,this.y,this.x-40,this.y+20,this.x,this.y+40);
        }


  }


}
