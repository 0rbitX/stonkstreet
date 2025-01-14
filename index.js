var fullstop =false;
var x = 0;
var now = moment();

var stonkslist =[]
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
function switchstonk(num,first,type){
  
  switch(type){
  case "trend":
    
  break;
}}
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAL6ZU9cRMKKd4IbTzqdjkyJar0zu1kP8",
  authDomain: "flutterfireuicodelabauth.firebaseapp.com",
  projectId: "flutterfireuicodelabauth",
  storageBucket: "flutterfireuicodelabauth.firebasestorage.app",
  messagingSenderId: "719359222053",
  appId: "1:719359222053:web:327ae56869f46ba5217acc"
};
var min2;
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const db = firebase.firestore();

function addDB(coll,){}
if(!fullstop){
  const stonks = db.collection("all").doc("stonks")
  
  stonks.get().then((doc)=>{
    if(doc.exists){
      var y = doc.data()
      var list = y.list
     for(var i =0; i<list.length;i++){
      
      
       
      var tr =0;
      console.log()
      
     var min2 = Object.assign({},list[i].past2)
     
     console.log(min2)
      if(min2["0"]*2<list[i].curprice){
        if(tr>5){

        }
        else{
          tr++;
        var store = list[i].past2
        store.push(list[i].curprice)
        console.log(store)
        var id1 = "cc"+tr
          console.log(id1)
          console.log(document.getElementById(id1))
        $("#tr"+tr).html("<canvas id='"+id1+"'></canvas>")
        console.log(document.getElementById(id1))
        const myChar = new Chart("cc"+tr, {
          text:"hi",
          type: "line",
          data: {labels:["2:00","1:45","1:30","1:15","1:00","0:45","0:30","0:15","current"],datasets:[{data:store}]},
          options: {
            plugins: {
                title: {
                    display: true,
                    text: list[i].name+" chart"
                }
            }
        }
        });
        $("#tr"+tr).on("click",function(){
          location.href =  "view.html?id="+i
          var now = moment();
          var json = {data:list[i],time:now}
          localStorage.setItem("smldb",JSON.stringify(json))
        })
      }
      }else{console.log("not trending")}
      console.log()
     }
    
    }})
}

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
       cost[0].curprice = 17;
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
  