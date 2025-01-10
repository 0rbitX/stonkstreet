
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAL6ZU9cRMKKd4IbTzqdjkyJar0zu1kP8",
  authDomain: "flutterfireuicodelabauth.firebaseapp.com",
  projectId: "flutterfireuicodelabauth",
  storageBucket: "flutterfireuicodelabauth.firebasestorage.app",
  messagingSenderId: "719359222053",
  appId: "1:719359222053:web:327ae56869f46ba5217acc"
};
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const db = firebase.firestore();
function addDB(coll,){}

$("#hi").on("click",function(){
  const stonks = db.collection("all").doc("stonks")
  stonks.get().then((doc)=>{
    if(doc.exists){
      var y= doc.data()
      console.log(y.list[0].curprice)
    }
  })
})
$("#bye").on("click",function(){
  var rncache;
  var cost;
  var nlist;
  const stonks = db.collection("all").doc("stonks")
  stonks.get().then((doc)=>{
    if(doc.exists){
      var y = doc.data()
     localStorage.setItem("bye",doc.data())
     console.log(doc.data())
     cost = y.list;
     console.log(cost)
       cost[0].curprice = 13;
       stonks.update({
         list:cost,
       })
    }
  })

})
function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
  }
  function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }
  const myChart = new Chart("myChart", {
    type: "line",
    data: {labels:["hi",1,2],datasets:[{data:[12,13,3]}]},
    options: {}
  });
  const myChar = new Chart("myChar", {
    type: "line",
    data: {labels:["hi",1,2],datasets:[{data:[12,13,3]}]},
    options: {}
  });
  