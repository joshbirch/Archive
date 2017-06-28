var lanes = 16;
var groups = []
var group;
var laneWidth;
var allBlocks = []
var debug = true

function setup() {
    createCanvas(650, 850);
    laneWidth = width / lanes;

    first = new Group(5, 1);
    groups.push(first)

}

function draw() {
    group = groups[0]
    background(181);
    for (var i = 0; i < groups.length; i++) {
        groups[i].standard();
    }
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        group.move(-1);
    } else if (keyCode === RIGHT_ARROW) {
        group.move(1);

    } else if (keyCode === DOWN_ARROW) {
        // sped up
        group.setSpeed(10)
    } else if (keyCode === UP_ARROW) {
        groups.unshift(new Group(5, 1));
    }
}

function keyReleased() {
    if (keyCode === DOWN_ARROW) {
        group.setSpeed(2)
    }
}
