function Firework() {
    this.pos = createVector(random(width), 300);
    this.vel = createVector();
    this.acc = createVector();


    this.gravity = createVector(0, 0.1);
    this.upforce = createVector(0, -1);
    firing = false
    falling = true
    exploding = false



    this.update = function() {
        if (firing) {
            if (this.pos.y < 200) {
                this.explode();
                firing = false;
                falling = false;
            }
        }
        this.acc.mult(0);
        console.log(exploding)
        if (falling == true) {
            this.acc.add(this.gravity)

            if (this.pos.y > height - 100) {
                this.vel.mult(0);
                this.acc.mult(0);
                falling = false;
                this.fire()
            }
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);

      if (this.pos.y < 250){
        x = new Explosion(this.pos.x,this.pos.y)
        x.explode()
      }
    }


    this.fire = function() {

        this.acc.add(this.upforce);
        this.vel.add(this.acc);
        this.pos.add(this.vel);

        firing = true;


    }




    this.draw = function() {
        if (exploding == false) {
            ellipse(this.pos.x, this.pos.y, 5, 5)
        }
    }



}
