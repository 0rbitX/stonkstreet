var devmode=false;
const firebaseConfig = {
    apiKey: "AIzaSyAAL6ZU9cRMKKd4IbTzqdjkyJar0zu1kP8",
    authDomain: "flutterfireuicodelabauth.firebaseapp.com",
    projectId: "flutterfireuicodelabauth",
    storageBucket: "flutterfireuicodelabauth.firebasestorage.app",
    messagingSenderId: "719359222053",
    appId: "1:719359222053:web:327ae56869f46ba5217acc"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // Initialize Firebase
  if(!devmode){
    const urlParams = new URLSearchParams(window.location.search);

        const id = urlParams.get('id');
    var pastdata = JSON.parse(localStorage.getItem("smldb"))
    var time = moment(pastdata.time);
    console.log(time)
    var dif = time.diff(moment(),'minutes')
    var localdata;
    if(dif>1){
     var stonks= db.collection('all').doc("stonks")
     stonks.get().then((doc)=>{
      
      if(doc.exists){
        var y = doc.data()
        
        
        const itemdata = y.list[id]
        console.log(itemdata)
        document.title = itemdata.name;
      localdata = itemdata;
      var json = {data:localdata,time:moment()};
      localStorage.setItem("smldb",JSON.stringify(json))

      }
     })
    }else{
      localdata=pastdata.data;
      document.title=localdata.name
    }
  }
  
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