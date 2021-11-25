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

    user_name= localStorage.getItem("username");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}



function send(){
      message1=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:message1,
            like:0
      });
      document.getElementById("msg").value=" ";
}