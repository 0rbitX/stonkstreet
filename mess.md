$(place).append("<div id='trenddiv' class='swipper-slide'><canvas id='canvascap'></canvas</div>")
  
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