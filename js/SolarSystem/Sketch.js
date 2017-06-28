var points = [];
var amount = 4
var radius = 15;
var permuations = 0;
var currentBest;
var bestPoints;
var getInput = true;

if (getInput){
amount = prompt("How many cities would you like?")
}

function setup() {
    createCanvas(600, 600)
    for (var i = 0; i < amount; i++) {
        points[i] = createVector(random(width), random(height / 2));
    }
    currentBest = getDist(points);
    bestPoints = points.slice()

    totalPermutations = factorial(amount)*2
}



function draw() {

    background(51)
    noFill();
    strokeWeight(3);
    stroke(212, 0,0)

    beginShape();
    for (var i = 0; i < points.length; i++) {
        vertex(points[i].x, points[i].y);
    }
    endShape();
    fill(255)
    noStroke();
    for (var i = 0; i < points.length; i++) {
        ellipse(points[i].x, points[i].y, radius, radius);
    }
    swap(points, floor(random(points.length)), floor(random(points.length)))
    current = getDist(points)
    if (current < currentBest) {
        currentBest = current;
        bestPoints = points.slice()

        // console.log(currentBest);

    }
    noFill();
    stroke(246, 58, 159)
    beginShape();

    for (var i = 0; i < points.length; i++) {
        vertex(bestPoints[i].x, bestPoints[i].y + height / 2);

    }
    endShape();
    fill(180, 135, 177)
    noStroke();
    for (var i = 0; i < points.length; i++) {
        ellipse(bestPoints[i].x, bestPoints[i].y + height / 2, radius, radius);
    }

    permuations+=1;

    if (frameCount % 20 == 0){
      console.log("Percent done:"+floor((permuations / totalPermutations)*100)+"%")
    }
    if ((permuations / totalPermutations)*100> 100){
      console.log("Completed. Best found:"+currentBest)
      noLoop()
    }
}



function swap(list, a, b) {
    var temp = list[a]
    list[a] = list[b]
    list[b] = temp
}



function getDist(list) {
    sum = 0
    for (var i = 0; i < list.length - 1; i++) {
        sum += dist(list[i].x, list[i].y, list[i + 1].x, list[i + 1].y);
    }
    return sum
}

function factorial(n){
  if (n == 1){
    return 1
  }else {
    return n * factorial(n-1)
}
}
