function Bird() {
    this.y = height / 2;
    this.r = 25
    this.gravity = 80 / 100;
    this.vel = 0
    this.uplift = 18;


    this.show = function() {
        push();
        fill(200, 100)
        stroke(220)
        ellipse(50, this.y, this.r, this.r);
        pop();
    }

    this.up = function() {

        this.vel -= this.uplift
    }

    this.update = function() {
        this.vel += this.gravity;
        this.vel *= 0.95
        this.y += this.vel;

        if (this.y > height - 13) {
            this.y = height - 12.5
        }



    }



}
