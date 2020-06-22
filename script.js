//search stuff
var comments = [];
fetch("https://script.google.com/macros/s/AKfycbygqcvjRdCgOUAC01x0CAoVKLG0R4eUpP1Gc7vZp6Ra2oMKJ2C-/exec").then(function(r){
r.text().then(function(t){
      document.getElementById("searchBar").style.display = "unset";
document.getElementById("loading").remove();
document.getElementById("s").innerHTML = t;
  var sheets = [...document.getElementById("s").children];
  var nta;
  var temp = [];
  var id= ""; 
  var loc = "";
  sheets.forEach(function(x){
    id = x.firstChild.innerText;
    x.firstChild.remove();
    temp = [];
    nta = [];
    nta = [...x.children]
    nta.forEach(function(c){
      temp.push({t:c.innerText,location:Number(c.id)+1});
    })
    temp.splice(0,2);
    comments.push({"id":id,"com":temp});
  })
})
})

var tableRows = [];
var searchTerms = [];

document.getElementById("searchBar").oninput = function(){
  searchTerms = document.getElementById("searchBar").value.split(" ").filter(function(e){return e});
  // searchTerms.filter(function(x){
  //         return x!=""
  //       });
  if (document.getElementById("searchBar").value!=""){
document.getElementById("results").innerHTML = "";
  comments.forEach(function(sheet){
    sheet.com.forEach(function(ec){
      if (document.getElementById("results").children.length<10){
      if (ec.t.toUpperCase().indexOf(searchTerms[0].toUpperCase())!=-1){
        // if (ec[ec.toUpperCase().indexOf(document.getElementById("search").value.toUpperCase())+1+document.getElementById("search").value.length]=="."||ec[ec.toUpperCase().indexOf(document.getElementById("search").value.toUpperCase())+1+document.getElementById("search").value.length]==" "){
        // if (ec[ec.toUpperCase().indexOf(document.getElementById("search").value.toUpperCase())-1]==" "){
        var tempResult = document.createElement("tr");
        
        var tempResultText=document.createElement("td");
        tempResultText.onclick = function(){
          fakeNotif("Comment has been copied to your clipboard!");

          document.getElementById("searchBar").value = tempResultText.innerText;
          document.getElementById("searchBar").select();
          document.execCommand("copy");
                    document.getElementById("searchBar").value = "";

            document.getElementById("searchBox").style.display = "none";
  document.getElementById("sheet").src ="https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid="+sheet.id+"&range=B"+ec.location;
    document.getElementById("results").innerHTML = "";

        }
        tempResultText.innerHTML= ec.t.replace(new RegExp(searchTerms[0], "gi"),"<b>"+searchTerms[0]+"</b>");
tempResultText.style.border="#6aa84f4f solid";
tempResultText.style.padding="5px 5px";
tempResultText.style.borderRadius="5px";
        tempResultText.style.cursor = "pointer";
tempResultText.style.marginBottom="15px";
tempResultText.style.maxWidth="500px";
tempResultText.style.overflow="hidden";
        tempResult.appendChild(tempResultText);
        document.getElementById("results").appendChild(tempResult);
        if (searchTerms.length>1){
        searchTerms.every(function(term,i){
        if (tempResult.innerText.toUpperCase().indexOf(term.toUpperCase())!=-1){
          tempResultText.innerHTML= tempResultText.innerHTML.replace(new RegExp(term, "gi"),"<b>"+term+"</b>");
          return true;
        }else{
          tempResultText.remove();
          return false;
        }
        })
        }
        
        
        // }
        // }
      }
    }
    })
  })
   
  }else{
    document.getElementById("results").innerHTML = "";

  }
}



function fakeNotif(a) {
    var notif = document.createElement("popupbody");
    notif.style.all = "initial";
    notif.style.backgroundColor = "#f5f7fa";
    notif.style.boxShadow = "2px 2px 6px black";
    notif.style.color = "black";
    notif.style.fontSize = "14px";
    notif.style.borderRadius = "2px";
    notif.style.width = "180px";
    notif.style.paddingLeft = "12px";
    notif.style.height = "60px";
    notif.style.position = "fixed";
    notif.style.display = "block";
    notif.style.borderTop = "6px solid #e67d0f";
    notif.style.right = "-200px";
    notif.style.lineHeight = "1rem";
    notif.style.transition = "right 0.5s ease 0s";
    notif.style.fontFamily = "none";
    notif.style.zIndex = "999999999999999999999999999999999";
    notif.style.top = "10px";
    document.body.appendChild(notif);
    var text = document.createElement("popuptext");
    text.innerText = a;
    text.style.fontWeight = "600";
    text.style.position = "absolute";
    text.style.top = "5px";
    notif.appendChild(text);
    setTimeout(function () {
      notif.style.right = "-2px";
    }, 10);
    setTimeout(function () {
      notif.style.right = "-200px";
      setTimeout(function () {
        notif.remove();
      }, 500);
    }, 5000);
  }



setTimeout(function(){
  document.getElementById("alert").style.opacity="1";

},5)
document.getElementById("comment").onclick = function(){
  document.getElementById("addComment").style.display = "block";
    document.getElementById("url").value = document.getElementById("sheet").src;
}
document.getElementById("search").onclick = function(){
  document.getElementById("searchBox").style.display = "block";
}


document.getElementById("close").onclick = function(){
  document.getElementById("addComment").style.display = "none";
}
document.getElementById("closes").onclick = function(){
  document.getElementById("searchBox").style.display = "none";
}

document.getElementById("ok").onclick = function(){
    document.getElementById("alert").style.opacity="0";
    document.getElementById("blur").style.opacity="0";
setTimeout(function(){
  document.getElementById("blur").remove();
document.getElementById("alert").remove();
},200);
}



document.getElementById("home").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?usp=sharing&rm=minimal";
}

document.getElementById("apa").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=0";
}

document.getElementById("grammar").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=829374295";
}

document.getElementById("dpres").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=471650903";
}

document.getElementById("dbposts").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=1830220515";
}

document.getElementById("was").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=1407225466";
}
document.getElementById("feed").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=2115635840";
}
document.getElementById("theme").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=503632018";
}
document.getElementById("leg").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=360926024";
}
document.getElementById("res").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=112596641";
}
document.getElementById("art").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=112596641";
}
document.getElementById("check").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=561945808";
}
document.getElementById("mot").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=149802824";
}
document.getElementById("meme").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=469252772";
}
document.getElementById("strat").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=471291255";
}
