var firebaseConfig = {
      apiKey: "AIzaSyBRS2t9xcsJm9gisp78zFRlzhbluXdwx7g",
      authDomain: "kwitter-1-a9227.firebaseapp.com",
      databaseURL: "https://kwitter-1-a9227-default-rtdb.firebaseio.com",
      projectId: "kwitter-1-a9227",
      storageBucket: "kwitter-1-a9227.appspot.com",
      messagingSenderId: "696035129937",
      appId: "1:696035129937:web:959ca618af8ca3f34f5670"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML= "welcome " + user_name + " !"

    function add_room(){
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "asdf" 
          });

          localStorage.setItem( "room name" , room_name);
          window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log(Room_names);
     hi = "<div class='room_name' id=" + Room_names + "<onclick = 'redirecttoroomname(this.id)'> #"+ Room_names + "</div> <hr>";
     document.getElementById("output").innerHTML+= hi ;
     //End code
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name" , name) ;
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

