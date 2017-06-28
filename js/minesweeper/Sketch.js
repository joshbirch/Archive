var s = 40;
var cols, rows;
var grid;

function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}


function setup() {
  createCanvas(601, 601);
  cols = floor(width / s)
  rows = floor(height / s)



  grid = make2DArray(cols, rows)

  for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        grid[i][j] = new Cell(i, j);
      }
    }

}

function draw() {
  background(201)


  for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        grid[i][j].show()
      }
    }
}




function mousePressed(){
  for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        if(grid[i][j].contains(mouseX,mouseY)){
          grid[i][j].revealed = true
        }
      }
    }

}
