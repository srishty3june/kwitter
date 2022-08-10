const firebaseConfig = {
      apiKey: "AIzaSyAEuXpslmvgUo6q8XDKvIJa5OhUm-l2vKo",
      authDomain: "class-test-39f01.firebaseapp.com",
      databaseURL: "https://class-test-39f01-default-rtdb.firebaseio.com",
      projectId: "class-test-39f01",
      storageBucket: "class-test-39f01.appspot.com",
      messagingSenderId: "496529283702",
      appId: "1:496529283702:web:e407a22225734ac3ff9d57",
      measurementId: "G-KSP3JBZQKT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name",
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}