function Gmap() {
  debug = false
  rowLength = 15
  mapWidth = width - 2 * (width % 100)
  mapHeight = height - 2 * (height % 100)

  this.show = function() {

    rectMode(CENTER)
    fill(230, 180, 190)
    rect(width / 2, height / 2, mapWidth, mapHeight)
    this.showRooms();




  }

  this.generateMap = function() {
    for (var i = 0; i < roomTotal; i++) {
      roomgen = random()
      if (roomgen < 0.15) {
        roomtype = 0
      } else if (roomgen < 0.5 && roomgen >= 0.15) {
        roomtype = 1
      } else {
        roomtype = 2
      }
      rooms[i] = roomtype;
      discovered.push(false)
    }
  }


  this.showRooms = function() {
    noStroke();
    roomSize = mapWidth / rowLength;
    for (var i = 0; i < roomTotal; i++) {
      rectMode(CORNER)

      if (rooms[i] == 0) {
        fill(51)
      } else if (rooms[i] > 0 && discovered[i] == false) {
        fill(200, 150, 160)
      } else {
        fill(230, 199, 210)
      }
      
      if (i == current){
        fill(0,200,0)
      }
      rect((i % rowLength) * roomSize + border, floor(i / rowLength) * roomSize + border, roomSize, roomSize)
      fill(255)
      if (debug) {
        text(rooms[i], (i % rowLength) * roomSize + border + (roomSize / 2), floor(i / rowLength) * roomSize + border + (roomSize / 2))
      }
    }
  }
}
