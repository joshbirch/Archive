var Gmap;
var border = 10
var rooms = []
var discovered = []
var roomTotal = 155;
var current;

function setup() {
  createCanvas(800 + border, 600 + border);
  Gmap = new Gmap();
  Gmap.generateMap()
  if (rooms[1]!=0){
    current = 1;
  } else {
    current = 4
  }
}

function draw() {
  background(51);

  if (keyIsPressed == true && keyCode === SHIFT){
    Gmap.showRooms();
  }
}

// function mousePressed(){
//   discovered[0] = true
// }
