function Terrain(){
  this.xOff = 0;
  var y;
 this.points = [];

  this.getPoints = function(){
    if (this.points){
      this.points.splice(0,this.points.length);
    }
    for (var i = 0;i < width;i+=1){
      this.points.push(i,sin(this.xOff*3)*100+height/2)
    }
    this.xOff += 0.01;

  }

  this.showGround = function(){

    fill(15, 62, 9);
    beginShape();
    vertex(0,height);
    for (var i = 0;i<this.points.length;i++){
      vertex(i,this.points[i*2+1]);
    }
    vertex(width,height);
    endShape(CLOSE)
  }


  this.show = function(){
    stroke(255);

    strokeWeight(2);

    for (var i = 0;i < this.points.length;i+=2){
      point(this.points[i],this.points[i+1]);
    }






  }






}
