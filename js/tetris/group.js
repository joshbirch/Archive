function Group(baseLane, type) {
    this.frozen = false
    this.blocks = []

    var r = random(60,200)
    var g = random(60,200)
    var b = random(60,200)



    if (type == 1) {
        for (var i = 0; i < 2; i++) {
            this.blocks[i] = new Block(baseLane + i)
            this.blocks[i].r = r;
            this.blocks[i].g = g;
            this.blocks[i].b = b;

        }

    }




    this.freeze = function() {
        this.frozen = true
        groups.unshift(new Group(5, 1));
        group.setSpeed(0)

    }


    this.standard = function() {
        for (var i = 0; i < this.blocks.length; i++) {
            this.blocks[i].show();
            this.blocks[i].update();
            if (this.frozen = false){
            if (this.blocks[i].touching()) {
                  console.log("Touching-> frozen")
                  this.freeze();
            }
          }
        }
    }



    this.setSpeed = function(newSpeed) {
        if (group == this){
        for (var i = 0; i < this.blocks.length; i++) {
            this.blocks[i].speed = newSpeed;
        }
      }
    }


















this.move = function(dir) {
  if (this.frozen == false) {
    for (var i = 0; i < this.blocks.length; i++) {
      this.blocks[i].x += laneWidth * dir;
    }
  }
}




}
