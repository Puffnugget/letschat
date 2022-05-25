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
//     const analytics = getAnalytics(app)

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomName");
    window.location = "login.html";
}

var roomName = localStorage.getItem("roomName");
var userName = localStorage.getItem("username");

function send() {
    var msg = document.getElementById("msginput").value;
    firebase.database().ref(roomName).push({
        name: userName,
        message: msg,
    });
    document.getElementById("msginput").value = "";
}

function getData() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                user_name = message_data['name'];
                message = message_data['message'];
                name_with_tag = "<h4> " + user_name + ": " + message + "</h4>";
                row = name_with_tag;
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}

getData();
