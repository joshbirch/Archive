function Circle(x, y, r) {
  this.pos = createVector(x, y);
  this.r = r
  this.moving = false

  this.show = function() {
    push()
    translate(this.pos.x, this.pos.y);
    beginShape();
    for (var i = 0; i < 2 * PI; i += 0.1) {
      vertex(r * cos(i), r * sin(i))
    }
    endShape();
    pop()

    if (keyIsPressed === true) {
      r = dist(x, y, mouseX, mouseY)
    }


    red = map(mouseX, 0, width, 0, 255)
    green = map(mouseX, 0, width, 255, 0)
    blue = map(mouseY, 0, width, 0, 255)
    fill(red, green, blue)
  }

  this.update = function() {
    if (this.moving) {
      this.pos.set(mouseX, mouseY)
    }
  }


}



Circle.prototype.contains = function() {

  if (dist(mouseX, mouseY, this.pos.x, this.pos.y) < this.r) {
    return true;
  } else {
    return false;
  }



}
