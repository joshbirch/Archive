

function setup(){
  logButton = select("#but")
  logButton.mousePressed(butPressed);
  uName = select("#uName");
  uPass = select("#uPass");

}



function butPressed(){
    username = uName.elt.value;
    password = uPass.elt.value;

    console.log("Username:"+username);
    console.log("Password:"+password);

}
