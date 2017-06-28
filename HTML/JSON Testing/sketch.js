var users;
var loggedIn =  false;
var username;
var password;

function setup(){
  logButton = select("#but")
  logButton.mousePressed(butPressed);
  uName = select("#uName");
  uPass = select("#uPass");
}

function loaded(data){
  console.log("Data loaded");
  users = data;
  login()
}

function login(){

  if (users){
    for (var i=0;i<users.users.length;i++){
      if (username == users.users[i].username){
        if (password == users.users[i].password){
          loggedIn = true;
        }

      }

    }
    console.log(loggedIn);
  }

}

function butPressed(){
    loadJSON("userData.json",loaded);
    console.log("loading");
    username = uName.elt.value;
    password = uPass.elt.value;
}
