var firebaseConfig = {
    apiKey: "AIzaSyAV0WeNAP1iBWcRnIAEgp3ODDok2TIUNMM",
    authDomain: "let-s-chat-app-82298.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-82298-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-82298",
    storageBucket: "let-s-chat-app-82298.appspot.com",
    messagingSenderId: "570353946554",
    appId: "1:570353946554:web:cd085e02e19e9133d6d783",
    measurementId: "G-2MXBLH10S8"
  };
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//     const analytics = getAnalytics(app);

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username;

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room name - " + Room_names);
                row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>"+Room_names+"</div> <hr>";
                document.getElementById("output").innerHTML += row;
          });
    });
}
getData();

function addRoom() {
    var addRoom = document.getElementById("addRoom").value;
    localStorage.setItem("roomName", addRoom);
    firebase.database().ref("/").child(addRoom).update({
          purpose: "adding room name"
    });
    localStorage.setItem("roomName", addRoom);
    window.location = "chat_page.html";
}

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomName");
    window.location = "login.html";
}

function redirect(room){
    console.log(room);
    localStorage.setItem("roomName", room);
    window.location = "chat_room.html";
}