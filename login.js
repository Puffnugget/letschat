function create(){
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location = "rooms.html";
}