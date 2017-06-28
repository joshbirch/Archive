function Cell(xCol, yCol) {

  this.x = xCol * s;
  this.y = yCol * s;

  this.revealed = false

  this.neighbors = 0;

  for (var i = -1; i < 2;i++){
    for (var j = -1; j < 2;j++){
      if (grid[xCol+i][yCol+j].bomb == true && i != 0 && j != 0){
        this.neighbors++;
      }
    }
  }


  if (random()< 0.5){
    this.bomb=true
  }else{
    this.bomb = false
  }

  this.show = function() {
    if (this.revealed) {
      fill(251)
      rect(this.x, this.y, s,s);

      if (this.bomb){
        fill(201)
        ellipse(this.x+s/2,this.y+s/2,s/2,s/2)
      }

    } else {
      fill(221)
      rect(this.x, this.y, s, s);
    }
  }

}

Cell.prototype.contains = function (x_,y_) {
  return (x_>this.x  && x_<this.x+s && y_> this.y && y_ < this.y + s)

}
