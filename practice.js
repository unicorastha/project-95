var firebaseConfig = {
    apiKey: "AIzaSyDFm6RBhzZurKnk7_r5HRno7bd1qQyO0zY",
    authDomain: "activity-kwitter.firebaseapp.com",
    databaseURL: "https://activity-kwitter-default-rtdb.firebaseio.com",
    projectId: "activity-kwitter",
    storageBucket: "activity-kwitter.appspot.com",
    messagingSenderId: "1082966801786",
    appId: "1:1082966801786:web:881d6d34b77aae1c53aac3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  
function adduser()
{
    user_name=document.getElementById("user_name").value
    firebase.database().ref("/").child("user_name").update({
        purpose:"adding user"
    });
}