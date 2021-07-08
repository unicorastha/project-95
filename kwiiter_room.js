var firebaseConfig = {
    apiKey: "AIzaSyDFm6RBhzZurKnk7_r5HRno7bd1qQyO0zY",
    authDomain: "activity-kwitter.firebaseapp.com",
    databaseURL: "https://activity-kwitter-default-rtdb.firebaseio.com",
    projectId: "activity-kwitter",
    storageBucket: "activity-kwitter.appspot.com",
    messagingSenderId: "1082966801786",
    appId: "1:1082966801786:web:881d6d34b77aae1c53aac3"
  };
;

  user_name= localstorage.getitem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";


  function adduser()
  {
      user_name=document.getElementById("user_name").value
      firebase.database().ref("/").child("user_name").update({
          purpose:"adding user"
      });
  }
  function addroom()
  {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    }); 

    localstorage.setitem("room_name",room_name);

    window.location+"kitter_page.html";
  }

   function getdata(){firebase.database().ref("/").on('value' function(snapshot){document.getElementById("output").innerHTML})
 room_names=childkey;
console.log("room name-"+room_names);
row="<div class='room_name' id="room_names+"onclick='redirecttoroomname(this.id)'>#"+room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row;
});});}
getdata();

function redirectToRoomName(name)
{
    console.log(name)
    localstorage.setitem("room_name",name);
    window.location="kwitter_page.html";
}

