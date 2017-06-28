function Block(lane) {


    allBlocks.push(this)


    // physics
    this.x = lane * laneWidth;
    this.y = 30;
    this.s = laneWidth;
    this.speed = 2;


    // colours

    this.r = 0
    this.g = 0
    this.b = 0





    this.show = function() {
        fill(this.r, this.g, this.b)
        rect(this.x, this.y, this.s, this.s);
    }

    this.update = function() {
        this.y += this.speed;
        if (this.y > height - this.s - 3) {
            this.y = height - this.s - 3
        }

    }






    // return true if off
    // edge or touching other blocks

    this.touching = function() {
        if (this.y > height-this.s+1) {
            console.log("Touching")
            return true;
        } else {
            return false;
        }
    }

}
