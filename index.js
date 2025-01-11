var fullstop =true;
var x = 0;
var stonkslist =[]
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizantal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
function switchstonk(place,num,first){
  
  if(first){
    $(place).append("<div id='trenddiv'><canvas id='canvascap'></canvas</div>")
  }
  var past = []
    var list=stonkslist[num].past2
      var store= [stonkslist[num].curprice]

    Object.keys(list).forEach(function(key){
      console.log(key,list[key])
      store.push(list[key])
    })
  
    store.reverse()
    console.log(store)
    
    const myChar = new Chart("canvascap", {
      text:"hi",
      type: "line",
      data: {labels:["2:00","1:45","1:30","1:15","1:00","0:45","0:30","0:15","current"],datasets:[{label:"Past 2 minutes",data:store}]},
      options: {
        plugins: {
            title: {
                display: true,
                text: stonkslist[num].name+" chart"
            }
        }
    }
    });
    $("#canvascap").on("click",function(){
      location.href = "view.html?id="+num
    })
  
}
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
if(!fullstop){
  const stonks = db.collection("all").doc("stonks")
  
  stonks.get().then((doc)=>{
    if(doc.exists){
      var y = doc.data()
      var list = y.list
     for(var i =0; i<list.length;i++){
      stonkslist[i]=list[i]
      if(x==0){
      switchstonk("#trending-scroll",0,true)
      }
      
  
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
  