var firebaseConfig = {
    apiKey: "AIzaSyCzoMlISZaVJin3w6eNK5JF0Jl2Lmlqc1w",
    authDomain: "webapp-1e55b.firebaseapp.com",
    databaseURL: "https://webapp-1e55b-default-rtdb.firebaseio.com",
    projectId: "webapp-1e55b",
    storageBucket: "webapp-1e55b.appspot.com",
    messagingSenderId: "567971390463",
    appId: "1:567971390463:web:4e5c5c9e361d728a8cfdca",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

          user_name = localStorage.getItem("user_name");
          document.getElementById("user_name").innerHTML = "Welcome " + user_name + "  !!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room name - " + Room_names);
row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#"+ Room_names + " </div> <hr>";
document.getElementById("output").innerHTML += row;


    //End code
    });});}
getData();


function AddRoom() 
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpuse: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html"; 

}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
    
}

function Logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}