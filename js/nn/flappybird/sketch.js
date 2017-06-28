var bird;
var pipes = [];

function setup() {
    createCanvas(800, 500)
    bird = new Bird()
    var pipe = new Pipe();
    pipes.push(pipe)
    setInterval(createPipe, 3000)
}

function draw() {


    background(51);
    bird.update();
    bird.show();

    for (var i = pipes.length - 1; i > 0; i--) {
        pipes[i].update();
        pipes[i].show();
        if (pipes[i].offscreen()) {
            pipes.splice(i, 1)
        }
    }
}


function keyPressed() {
    if (keyCode === UP_ARROW) {
        bird.up();
    }
}

function createPipe() {
    x = new Pipe();
    pipes.push(x)
}
