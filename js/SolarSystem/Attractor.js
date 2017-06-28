function Attractor(x,y,r){

    var debug = true;
    this.pos = createVector(x,y);
    this.r = r;   //Diameter

    this.show = function(){
      if (debug){
        stroke(255,0,0);
        strokeWeight(2);
        noFill();
        ellipse(this.pos.x,this.pos.y,this.r,this.r)
      }
    }



}
