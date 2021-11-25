
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAgfTnZeF9MhR_BO9kqtQMY0m9thSD-LzI",
      authDomain: "kwitter-f9711.firebaseapp.com",
      databaseURL: "https://kwitter-f9711-default-rtdb.firebaseio.com",
      projectId: "kwitter-f9711",
      storageBucket: "kwitter-f9711.appspot.com",
      messagingSenderId: "849900855590",
      appId: "1:849900855590:web:c39a8ac65ec3220935e1e7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row = "<div class='room_name' id="+ Room_names +" onclick='redirect(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

user= localStorage.getItem("username");
document.getElementById("user_name").innerHTML="Welcome "+user+" ! ";

function addroom(){
      rname=document.getElementById("room_name").value;
      firebase.database().ref("/").child(rname).update({
            purpose:"adding room"
      });
      localStorage.setItem("room_name", rname);
      window.location="kwitter_page.html";
      document.getElementById("room_name").value="";
}

function redirect(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("username");
      window.location="index.html";
}

