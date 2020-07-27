//mobile no no
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){
    document.getElementById("alert").innerHTML = `
 <h1>
        Welcome to The Feedback Bank!
      </h1>
<br>
<br>
<br>
Please view on a computer!
`;
    document.getElementById("alert").style.width="95%";

setTimeout(function(){
  document.getElementById("alert").style.opacity="1";

},5)
}else{


//analytics stuff
if (location.href=="https://www.thefeedbackbank.com/"){
var newUser = new FormData();
newUser.append('status',1);
navigator.sendBeacon("https://script.google.com/macros/s/AKfycbxZ26hNectsUJIQEBgVwoo2YVGRyTEjr4zPImg-G4pLL0_d7XA/exec?status=1",newUser);

window.addEventListener("unload", function logData() {
  var leaveUser = new FormData();
leaveUser.append('status',0);
 navigator.sendBeacon("https://script.google.com/macros/s/AKfycbxZ26hNectsUJIQEBgVwoo2YVGRyTEjr4zPImg-G4pLL0_d7XA/exec",leaveUser);
});
}
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
      if (document.getElementById("results").children.length<30){
      if (ec.t.toUpperCase().indexOf(searchTerms[0].toUpperCase())!=-1){
        // if (ec[ec.toUpperCase().indexOf(document.getElementById("search").value.toUpperCase())+1+document.getElementById("search").value.length]=="."||ec[ec.toUpperCase().indexOf(document.getElementById("search").value.toUpperCase())+1+document.getElementById("search").value.length]==" "){
        // if (ec[ec.toUpperCase().indexOf(document.getElementById("search").value.toUpperCase())-1]==" "){
        var tempResult = document.createElement("tr");
        
        var tempResultText=document.createElement("td");
        tempResultText.onclick = function(){
          fakeNotif("Comment has been copied to your clipboard!",5000);

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
          tempResult.remove();
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
   if (document.getElementById("results").innerText.replace(/\n/gi,"").length>0){
     document.getElementById("noResults").style.display = "none";
   }else{
     document.getElementById("noResults").style.display = "block";
     
   }
  }else{
    document.getElementById("results").innerHTML = "";

  }
}



function fakeNotif(a,t) {
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
    }, t);
  }

window.onload = function(){
var url = new URL(location.href)
if (url.hash.replace("#","")=="comment"){
  console.log("COMMENT");
   document.getElementById("blur").remove();
document.getElementById("alert").remove();
  document.getElementById("comment").click();
}
}


var alertOptions = [`      <h1>
        Welcome to The Feedback Bank!
      </h1>
      
Explore, download/copy comments, adapt for use, contribute!
<br>
      <br>
New content will be highlighted here weekly.
      <br>
      <br>
      <img src="https://cdn.pixabay.com/photo/2016/11/15/07/55/feedback-1825508_960_720.jpg" style="width:30%">
      <div id="ok">
        OK
      </div>`,`<h1>
        Welcome to The Feedback Bank!
      </h1>
Click <a href="https://chrome.google.com/webstore/detail/feedback-finder/keljfallljoncbahaaibdjdbbffhgcip" target="_blank">Here</a> to download the “Feedback Finder” Chrome Extension. Search for comments. Copy and paste with one click.
<br>
<br>
<br>
<b style="color:#e67d0f;">Favorite</b> Quick Links <b>(Right Click)</b> to pin them to the top of your right-side tool bar.
<br>
<br>
<br>
New “link-only” columns in sheets with external links.
<br>
<br>
<br>
Additional comments added to multiple sheets.
      <br>
        <div id="ok">
        OK
      </div>`,`  <h1>
        Welcome to The Feedback Bank!
      </h1>
      <br>
      Click <a href="https://www.youtube.com/watch?v=Y8U2-l4Sy-c&feature=youtu.be" target="_blank">Here</a> for a 3-minute video on how to use the <a href="https://chrome.google.com/webstore/detail/feedback-finder/keljfallljoncbahaaibdjdbbffhgcip" target="_blank">Feedback Finder Chrome Extension</a>. 
      <br>
      <br>
      <br>Search, copy/paste, and personalize comments without leaving your classroom/email.
        <div id="ok">
        OK
      </div>`,`  <h1>
        Welcome to The Feedback Bank!
      </h1>
<br>

      Over <b>100</b> new comments have been added to the bank. <br><br>Categories include Kudos, Academic Integrity, Engagement, Grammar and more.
<br>
<br>
<img src="https://cdn.pixabay.com/photo/2016/11/15/07/55/feedback-1825508_960_720.jpg" style="width:30%">
        <div id="ok">
        OK
      </div>`]

setTimeout(function(){
  document.getElementById("alert").style.opacity="1";

},5)
document.getElementById("comment").onclick = function(){
  document.getElementById("addComment").style.display = "block";
    document.getElementById("url").value = document.getElementById("sheet").src;
}

document.getElementById("search").onclick = function(){
  document.getElementById("searchBox").style.display = "block";
  document.getElementById("searchBar").value = "";
       document.getElementById("noResults").style.display = "none";

}

var quicklinks = [...document.getElementsByClassName("link")]
var favorites = [];
var spamFav = false;
var linkOrder = [...document.getElementsByClassName("link")].map(function(x){
return x.id
})
if (localStorage.getItem("ca")){
  document.getElementById("alert").innerHTML = alertOptions[Number(localStorage.getItem("ca"))%alertOptions.length];
localStorage.setItem("ca",Number(localStorage.getItem("ca"))+1)
}else{
localStorage.setItem("ca",0);
    document.getElementById("alert").innerHTML = alertOptions[0];

}
if (localStorage.getItem("favorites")){
  favorites = JSON.parse(localStorage.getItem("favorites"));
}
favorites.forEach(function(x){
document.getElementById(x).className = "favlink";
  document.getElementById("links").insertBefore(document.getElementById(x),document.getElementById("links").children[1]);
})
 document.addEventListener('contextmenu', function(evt) { 
  evt.preventDefault();
}, false);
quicklinks.forEach(function(x){
 
  x.onmouseup = function(e){
    if (!spamFav){
    if (e.button==2){
      spamFav = true;
      if (x.className == "link"){
        x.className="favlink";
          document.getElementById("links").insertBefore(x,document.getElementById("links").children[1]);
        favorites.push(x.id);
        fetch("https://script.google.com/macros/s/AKfycbygHzomWh5yNx7oa1Wj4UkclpUy0OAcxF-LBnXOTk-k3i78avk/exec?id="+x.id+"&up=1").then(function(){
                    spamFav = false;

        }).catch(function(){
          spamFav = false;
        });
      }else{
        favorites.splice(favorites.indexOf(x.id),1);
                  document.getElementById("links").insertBefore(x,document.getElementById("links").children[linkOrder.indexOf(x.id)+1]);
        fetch("https://script.google.com/macros/s/AKfycbygHzomWh5yNx7oa1Wj4UkclpUy0OAcxF-LBnXOTk-k3i78avk/exec?id="+x.id+"&up=0").then(function(){
                    spamFav = false;

        }).catch(function(){
          spamFav = false;
        });

        x.className="link";
      }
      localStorage.setItem("favorites",JSON.stringify(favorites));
      console.log(x.innerText);
    }
  }else{
    fakeNotif("Please wait a moment...",2000);
  }
  }
})

document.getElementById("close").onclick = function(){
  document.getElementById("addComment").style.display = "none";
}

document.getElementById("closes").onclick = function(){
  document.getElementById("searchBox").style.display = "none";
    document.getElementById("searchBar").value = "";
       document.getElementById("noResults").style.display = "none";


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
document.getElementById("outtemp").onclick = function(){
  document.getElementById("sheet").src="https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=127834789"
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
  document.getElementById("kud").onclick = function(){
  document.getElementById("sheet").src = "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=242421084";
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
}
