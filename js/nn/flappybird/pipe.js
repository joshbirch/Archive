function Pipe() {

    var spacing = random(175, 300)
    var middle = random(20, height - 70)
    this.x = width;
    this.w = 50;
    this.speed = 2;

    this.show = function() {
        stroke(255);
        fill(200);
        rect(this.x, middle + (spacing / 2), this.w, height);
        rect(this.x, 0, this.w, middle - (spacing / 2));
    }

    this.logDetails = function() {
        console.log("Spacing=" + spacing)
        console.log("Middle=" + middle)
    }

    this.update = function() {
        this.x -= this.speed;
        if ((frameCount % 200) == 0) {
            this.speed *= 1.08
        }
    }


    this.offscreen = function() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }


}
