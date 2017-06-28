function Explosion(x, y) {

    this.pos = createVector(x, y);

    this.explode = function() {
        t = 100
        for (var i = 0; i < 10; i++)
            fill(209, 198, 96, t);
            ellipse(this.pos.x, this.pos.y, 100 - t, 100 - t);
            t -= 1;
    }
}
