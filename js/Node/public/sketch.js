var socket;
function setup(){

  createCanvas(500,500);
  background(0);
  socket = io.connect("http://localhost:3000");
  socket.on("mouse",drawing);
}



function drawing(message){
  fill(255);
  noStroke();
  ellipse(message.x,message.y,30,30);


}


function mouseDragged(){
  fill(random(255),random(255),random(255),random(255));
  noStroke();
  ellipse(mouseX,mouseY,30,30);
  console.log("Sending:",mouseX,mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit("mouse",data)
}


function draw(){

}
