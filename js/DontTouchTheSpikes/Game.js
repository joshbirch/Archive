var bird;
var spikes = [];
function setup(){
  frameRate(5);
  createCanvas(500,700);
  bird = new Bird();
  for (var i = 0;i<spikes.length;i++){
    spikes.push(new Spike(1));
    spikes[i].show(bird.direction);
  }
}


function draw(){
    background(120);
    for (var i = 0;i<4;i++){
      spikes.push(new Spike(1));
      spikes[i].show(bird.direction);

    }
    bird.show();
    bird.update();
    spikes = []
  if (bird.x> width){
    changeDirection();
  }


  if (bird.x< 0){
    changeDirection();
  }
}





function changeDirection(){
  bird.direction *= -1;


}

function keyPressed() {
  if (key == " ") {
    bird.up();

  }
}
