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
  room_name = localStorage.getItem("room_name");

function send(){
msg = document.getElementById('msg').value;
firebase.database().ref(room_name).push({
name:user_name ,
likes:0 ,
message : msg
});
document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
like = message_data['like'];
message = message_data['message']
name1_tag = "<h4>"+ name1 + "<img src='tick.png' class = 'user_tick' > </h4>";
message_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-dark'"+ firebase_message_id + "value" + like + "onclick='updateLike(this.id)' > </button>"
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: " + like + "</span> </button> <hr>";

row=name1_tag + message_tag + like_button + span_with_tag ;
document.getElementById("output").innerHTML+= row;
//End code
      } });  }); }
getData();

function updateLike(){
  console.log("clicked on like button - " + message_id);
  button_id = message_id ;
  likes=document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes;)

  firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes
  })
}