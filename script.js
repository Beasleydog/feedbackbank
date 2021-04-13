//mobile no no
if (
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    navigator.userAgent
  ) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    navigator.userAgent.substr(0, 4)
  )
) {
  document.getElementById("alert").innerHTML = `
 <h1>
        Welcome to The Feedback Bank!
      </h1>
<br>
<br>
<br>
Please view on a computer!
`;
  document.getElementById("alert").style.width = "95%";

  setTimeout(function() {
    document.getElementById("alert").style.opacity = "1";
  }, 5);
} else {
  //analytics stuff
  //Change quote
  fetch("https://script.google.com/macros/s/AKfycbwvHif7NLFQln64Kncu20_LO3qOQ9W84d_mHoXxm0Ejhrkv3go/exec");
  if (location.href == "https://www.thefeedbackbank.com/") {
    var newUser = new FormData();
    newUser.append("status", 1);
    navigator.sendBeacon(
      "https://script.google.com/macros/s/AKfycbxZ26hNectsUJIQEBgVwoo2YVGRyTEjr4zPImg-G4pLL0_d7XA/exec?status=1",
      newUser
    );

    window.addEventListener("unload", function logData() {
      var leaveUser = new FormData();
      leaveUser.append("status", 0);
      navigator.sendBeacon(
        "https://script.google.com/macros/s/AKfycbxZ26hNectsUJIQEBgVwoo2YVGRyTEjr4zPImg-G4pLL0_d7XA/exec",
        leaveUser
      );
    });
  }
  //search stuff
  var comments = [];
  fetch(
    "https://script.google.com/macros/s/AKfycbygqcvjRdCgOUAC01x0CAoVKLG0R4eUpP1Gc7vZp6Ra2oMKJ2C-/exec"
  ).then(function(r) {
    r.text().then(function(t) {
      document.getElementById("searchBar").style.display = "unset";
      document.getElementById("loading").remove();
      document.getElementById("s").innerHTML = t;
      var sheets = [...document.getElementById("s").children];
      var nta;
      var temp = [];
      var id = "";
      var loc = "";
      sheets.forEach(function(x) {
        id = x.firstChild.innerText;
        x.firstChild.remove();
        temp = [];
        nta = [];
        nta = [...x.children];
        nta.forEach(function(c) {
          temp.push({ t: c.innerText, location: Number(c.id) + 1 });
        });
        temp.splice(0, 2);
        comments.push({ id: id, com: temp });
      });
    });
  });

  var tableRows = [];
  var searchTerms = [];

  document.getElementById("searchBar").oninput = function() {
    searchTerms = document
      .getElementById("searchBar")
      .value.split(" ")
      .filter(function(e) {
        return e;
      });
    // searchTerms.filter(function(x){
    //         return x!=""
    //       });
    if (document.getElementById("searchBar").value != "") {
      document.getElementById("results").innerHTML = "";
      comments.forEach(function(sheet) {
        sheet.com.forEach(function(ec) {
          if (document.getElementById("results").children.length < 30) {
            if (
              ec.t.toUpperCase().indexOf(searchTerms[0].toUpperCase()) != -1
            ) {
              // if (ec[ec.toUpperCase().indexOf(document.getElementById("search").value.toUpperCase())+1+document.getElementById("search").value.length]=="."||ec[ec.toUpperCase().indexOf(document.getElementById("search").value.toUpperCase())+1+document.getElementById("search").value.length]==" "){
              // if (ec[ec.toUpperCase().indexOf(document.getElementById("search").value.toUpperCase())-1]==" "){
              var tempResult = document.createElement("tr");

              var tempResultText = document.createElement("td");
              tempResultText.onclick = function() {
                fakeNotif("Comment has been copied to your clipboard!", 5000);

                document.getElementById("searchBar").value =
                  tempResultText.innerText;
                document.getElementById("searchBar").select();
                document.execCommand("copy");
                document.getElementById("searchBar").value = "";

                document.getElementById("searchBox").style.display = "none";
                document.getElementById("sheet").src =
                  "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=" +
                  sheet.id +
                  "&range=B" +
                  ec.location;
                document.getElementById("results").innerHTML = "";
              };
              tempResultText.innerHTML = ec.t.replace(
                new RegExp(searchTerms[0], "gi"),
                "<b>" + searchTerms[0] + "</b>"
              );
              tempResultText.style.border = "#6aa84f4f solid";
              tempResultText.style.padding = "5px 5px";
              tempResultText.style.borderRadius = "5px";
              tempResultText.style.cursor = "pointer";
              tempResultText.style.marginBottom = "15px";
              tempResultText.style.maxWidth = "500px";
              tempResultText.style.overflow = "hidden";
              tempResult.appendChild(tempResultText);
              document.getElementById("results").appendChild(tempResult);
              if (searchTerms.length > 1) {
                searchTerms.every(function(term, i) {
                  if (
                    tempResult.innerText
                      .toUpperCase()
                      .indexOf(term.toUpperCase()) != -1
                  ) {
                    tempResultText.innerHTML = tempResultText.innerHTML.replace(
                      new RegExp(term, "gi"),
                      "<b>" + term + "</b>"
                    );
                    return true;
                  } else {
                    tempResult.remove();
                    return false;
                  }
                });
              }

              // }
              // }
            }
          }
        });
      });
      if (
        document.getElementById("results").innerText.replace(/\n/gi, "")
          .length > 0
      ) {
        document.getElementById("noResults").style.display = "none";
      } else {
        document.getElementById("noResults").style.display = "block";
      }
    } else {
      document.getElementById("results").innerHTML = "";
    }
  };

  function fakeNotif(a, t) {
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
    setTimeout(function() {
      notif.style.right = "-2px";
    }, 10);
    setTimeout(function() {
      notif.style.right = "-200px";
      setTimeout(function() {
        notif.remove();
      }, 500);
    }, t);
  }

  window.onload = function() {
    var url = new URL(location.href);
    if (url.hash.replace("#", "") == "comment") {
      if(document.getElementById("blur")){
      document.getElementById("blur").remove();
      document.getElementById("alert").remove();
      }
      document.getElementById("comment").click();
    }
     if (url.hash.replace("#", "") == "images") {
     if(document.getElementById("blur")){
      document.getElementById("blur").remove();
      document.getElementById("alert").remove();
      }
      document.getElementById("imageSearchButton").click();
    }
        if (url.hash.replace("#", "") == "generator") {
if(document.getElementById("blur")){
      document.getElementById("blur").remove();
      document.getElementById("alert").remove();
      }
      document.getElementById("maker").click();
    }
         if (url.hash.replace("#", "") == "search") {
     if(document.getElementById("blur")){
      document.getElementById("blur").remove();
      document.getElementById("alert").remove();
      }
      document.getElementById("search").click();
    }
             if (url.hash.replace("#", "") == "casebrief") {
     if(document.getElementById("blur")){
      document.getElementById("blur").remove();
      document.getElementById("alert").remove();
      }
      document.getElementById("maker2").click();
    }
  };

  var alertOptions = [
    `      <h1>
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
      </div>`,
    `<h1>
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
      </div>`,
    `  <h1>
        Welcome to The Feedback Bank!
      </h1>
      <br>
      Click <a href="https://www.youtube.com/watch?v=Y8U2-l4Sy-c&feature=youtu.be" target="_blank">Here</a> for a 3-minute video on how to use the <a href="https://chrome.google.com/webstore/detail/feedback-finder/keljfallljoncbahaaibdjdbbffhgcip" target="_blank">Feedback Finder Chrome Extension</a>. 
      <br>
      <br>
      <br>Search, copy/paste, and personalize comments without leaving your classroom/email.
        <div id="ok">
        OK
      </div>`,
    `  <h1>
        Welcome to The Feedback Bank!
      </h1>
<br>

      Over <b>100</b> new comments have been added to the bank. <br><br>Categories include Kudos, Academic Integrity, Engagement, Grammar and more.
<br>
<br>
<img src="https://cdn.pixabay.com/photo/2016/11/15/07/55/feedback-1825508_960_720.jpg" style="width:30%">
        <div id="ok">
        OK
      </div>`
  ];
var lessAlertOptions=[`    <h1>
        Welcome to The Feedback Bank!
      </h1>
      <b class="orange">New Feature!</b>
      <br>
      <br>
      <b>Narrative Discussion Board Feedback Generator</b> <br>(A Mad Libs + Standard Discussion Board Rubric Mashup)
<br>
      <br>
      <br>
-   Click on the “Pencil and Paper” &#x1F4DD; icon in the top left-hand corner of the bank.
<br>
<br>
-   Select as many phrases as you’d like (up to one from each category)
<br><br>

-   Generate a block of narrative DB feedback for copy/paste, personalize as desired
        <div id="ok">
        OK
      </div>`,`      <h1>
        Welcome to The Feedback Bank!
      </h1>
      <b class="orange">New Feature!</b>
      <br>
      <br>
      <b>Feedback Image Gallery</b>
<br>
      <br>
      <br>
-   175 GIFs, Memes, and Images to add some “fun” to the feedback process
<br>
<br>
-   Create your own memes and easily personalize with student names, etc.
<br><br>

-   Access via the &#128247; icon (top-left hand corner of bank)
      <br>
      <br>
      -   Access directly via this link: <a href="https://www.thefeedbackbank.com/#images">https://www.thefeedbackbank.com/#images</a>
        <div id="ok">
        OK
      </div>`]
  setTimeout(function() {
    document.getElementById("alert").style.opacity = "1";
  }, 5);
  document.getElementById("comment").onclick = function() {
    document.getElementById("addComment").style.display = "block";
    document.getElementById("url").value = document.getElementById("sheet").src;
  };

  document.getElementById("search").onclick = function() {
    document.getElementById("searchBox").style.display = "block";
    document.getElementById("searchBar").value = "";
    document.getElementById("noResults").style.display = "none";
  };
  setInterval(function() {
    [...document.getElementsByClassName("orange")].forEach(function(x) {
      x.style.textShadow = "orange 0px 0px 4px";
    });
    setTimeout(function() {
      [...document.getElementsByClassName("orange")].forEach(function(x) {
        x.style.textShadow = "unset";
      });
    }, 500);
  }, 1000);
  var quicklinks = [...document.getElementsByClassName("link")];
  var favorites = [];
  var spamFav = false;
  var linkOrder = [...document.getElementsByClassName("link")].map(function(x) {
    return x.id;
  });
  if (localStorage.getItem("ca")){
    document.getElementById("alert").innerHTML = lessAlertOptions[Number(localStorage.getItem("ca"))%lessAlertOptions.length];
  localStorage.setItem("ca",Number(localStorage.getItem("ca"))+1)
  }else{
  localStorage.setItem("ca",0);
      document.getElementById("alert").innerHTML = lessAlertOptions[0];

  }
  if (localStorage.getItem("favorites")) {
    favorites = JSON.parse(localStorage.getItem("favorites"));
  }
  favorites.forEach(function(x) {
    document.getElementById(x).className = "favlink";
    document
      .getElementById("links")
      .insertBefore(
        document.getElementById(x),
        document.getElementById("links").children[1]
      );
  });
  document.addEventListener(
    "contextmenu",
    function(evt) {
      evt.preventDefault();
    },
    false
  );
  quicklinks.forEach(function(x) {
    x.onmouseup = function(e) {
      if (!spamFav) {
        if (e.button == 2) {
          spamFav = true;
          if (x.className == "link") {
            x.className = "favlink";
            document
              .getElementById("links")
              .insertBefore(x, document.getElementById("links").children[1]);
            favorites.push(x.id);
            fetch(
              "https://script.google.com/macros/s/AKfycbygHzomWh5yNx7oa1Wj4UkclpUy0OAcxF-LBnXOTk-k3i78avk/exec?id=" +
                x.id +
                "&up=1"
            )
              .then(function() {
                spamFav = false;
              })
              .catch(function() {
                spamFav = false;
              });
          } else {
            favorites.splice(favorites.indexOf(x.id), 1);
            document
              .getElementById("links")
              .insertBefore(
                x,
                document.getElementById("links").children[
                  linkOrder.indexOf(x.id) + 1
                ]
              );
            fetch(
              "https://script.google.com/macros/s/AKfycbygHzomWh5yNx7oa1Wj4UkclpUy0OAcxF-LBnXOTk-k3i78avk/exec?id=" +
                x.id +
                "&up=0"
            )
              .then(function() {
                spamFav = false;
              })
              .catch(function() {
                spamFav = false;
              });

            x.className = "link";
          }
          localStorage.setItem("favorites", JSON.stringify(favorites));
          console.log(x.innerText);
        }
      } else {
        fakeNotif("Please wait a moment...", 2000);
      }
    };
  });

  document.getElementById("close").onclick = function() {
    document.getElementById("addComment").style.display = "none";
  };
  document.getElementById("closessssss").onclick = function() {
    memeMakerPage.style.display = "none";
  };
  document.getElementById("closesss").onclick = function() {
    document.getElementById("feedbackMaker").style.display = "none";
  };
    document.getElementById("closessssssss").onclick = function() {
    document.getElementById("feedbackMaker2").style.display = "none";
  };
  document.getElementById("closessss").onclick = function() {
    document.getElementById("imageSearch").style.display = "none";
  };
  document.getElementById("closes").onclick = function() {
    document.getElementById("searchBox").style.display = "none";
    document.getElementById("searchBar").value = "";
    document.getElementById("noResults").style.display = "none";
  };
  document.getElementById("maker").onclick = function() {
    document.getElementById("feedbackMaker").style.display = "block";
    if (location.href == "https://www.thefeedbackbank.com/") {
      navigator.sendBeacon(
        "https://script.google.com/macros/s/AKfycbzypfdMnlDOJSYyxKIqcovydTR1HtS8FY2wxDVjE1j-eS3BfKI7/exec",
        JSON.stringify({ reason: "opened" })
      );
    }
  };
    document.getElementById("maker2").onclick = function() {
    document.getElementById("feedbackMaker2").style.display = "block";
    if (location.href == "https://www.thefeedbackbank.com/") {
    navigator.sendBeacon(
        "https://script.google.com/macros/s/AKfycbzypfdMnlDOJSYyxKIqcovydTR1HtS8FY2wxDVjE1j-eS3BfKI7/exec",
        JSON.stringify({ reason: "opened" })
      );
    }
  };
  document.getElementById("imageSearchButton").onclick = function() {
    imageSearch.style.display = "block";
  };
  document.getElementById("ok").onclick = function() {
    document.getElementById("alert").style.opacity = "0";
    document.getElementById("blur").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("blur").remove();
      document.getElementById("alert").remove();
    }, 200);
    // var newest = "generator"
    // if (localStorage.getItem("newFeature")==null||localStorage.getItem("newFeature")!=newest){
    //     featureFocus.style.display = "block";
    // featureOK.style.display = "block";
    //   localStorage.setItem("newFeature",newest);
    // }
  };
  //   featureOK.onclick = function(){
  //     featureFocus.style.display = "none";
  //   featureOK.style.display = "none";
  // }

  document.getElementById("home").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?usp=sharing&rm=minimal";
  };
  document.getElementById("outtemp").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=127834789";
  };
  document.getElementById("apa").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=0";
  };

  document.getElementById("grammar").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=829374295";
  };

  document.getElementById("dpres").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=471650903";
  };

  document.getElementById("dbposts").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=1830220515";
  };

  document.getElementById("was").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=1407225466";
  };
  document.getElementById("feed").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=2115635840";
  };
  document.getElementById("theme").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=503632018";
  };
  document.getElementById("leg").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=360926024";
  };
  document.getElementById("kud").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=242421084";
  };
  document.getElementById("res").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=112596641";
  };
  document.getElementById("art").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=112596641";
  };
  document.getElementById("check").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=561945808";
  };
  document.getElementById("mot").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=149802824";
  };
  document.getElementById("meme").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=469252772";
  };
  document.getElementById("strat").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=471291255";
  };
    document.getElementById("endc").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=866783924";
  };
      document.getElementById("writes").onclick = function() {
    document.getElementById("sheet").src =
      "https://docs.google.com/spreadsheets/d/1KTl9zl3RlDZ03o-sKvx_jN1FelS0UVIcGoDdbNqBVbM/edit?rm=minimal#gid=1410504079";
  };
}

fetch(
  "https://script.google.com/macros/s/AKfycbzo4ZgER3-VpwNvapVTTBFNuT03P2MceuTiO0Gaj-LyRZzYXlFq/exec"
).then(function(r) {
  r.text().then(function(t) {
    makerBody.innerHTML = "";
    makerBody.appendChild(document.createElement("br"));

    var dropDowns = JSON.parse(t);
    dropDowns.forEach(function(x) {
      var title = document.createElement("b");
      title.innerText = x.title;
      makerBody.appendChild(title);
      makerBody.appendChild(document.createElement("br"));
      var drop = document.createElement("select");
      var opt = document.createElement("option");
      opt.innerText = "";
      drop.appendChild(opt);
      x.values.forEach(function(j) {
        var opt = document.createElement("option");
        opt.innerText = j;
        drop.appendChild(opt);
      });
      makerBody.appendChild(drop);
      makerBody.appendChild(document.createElement("br"));
      makerBody.appendChild(document.createElement("br"));
    });
    makerBody.appendChild(document.createElement("br"));
    makerBody.appendChild(document.createElement("br"));
    makerBody.appendChild(document.createElement("br"));
    var resultTitle = document.createElement("b");
    resultTitle.innerText = "RESULT";
    makerBody.appendChild(resultTitle);
    var copyButton = document.createElement("div");
    copyButton.innerText = "Copy feedback";
    copyButton.id = "copyFeedback";
    makerBody.appendChild(copyButton);
    makerBody.appendChild(document.createElement("br"));
    makerBody.appendChild(document.createElement("br"));
    var resultBody = document.createElement("result");
    resultBody.id = "result";
    makerBody.appendChild(resultBody);
    var resultCBody = document.createElement("textarea");
    resultCBody.id = "resultC";
    makerBody.appendChild(resultCBody);

    [...document.querySelectorAll("select")].forEach(function(x) {
      x.oninput = function() {
        setTimeout(function() {}, 50);
        document.getElementById("copyFeedback").innerText = "Copy Feedback";
        result.innerText = "";
        resultC.value = "";
        [...document.querySelectorAll("select")].forEach(function(x) {
          result.innerText = result.innerText + " " + x.value;
          resultC.value = resultC.value + " " + x.value;
        });
      };
      result.innerText = result.innerText + " " + x.value;
      resultC.value = resultC.value + " " + x.value;
    });
    document.getElementById("copyFeedback").onclick = function() {
      document.getElementById("resultC").select();
      document.execCommand("copy");
      this.innerText = "Copied!";
      if (location.href == "https://www.thefeedbackbank.com/") {
        navigator.sendBeacon(
          "https://script.google.com/macros/s/AKfycbzypfdMnlDOJSYyxKIqcovydTR1HtS8FY2wxDVjE1j-eS3BfKI7/exec",
          JSON.stringify({
            reason: "copy",
            comment: document.getElementById("resultC").value
          })
        );
      }
    };
  });
});



fetch(
  "https://script.google.com/macros/s/AKfycbyM8PExhH6qkWghysDgrBAx1s_F8TWP4OdXDqpgG0-MgDJh_uo/exec"
).then(function(r) {
  r.text().then(function(t) {
    makerBody2.innerHTML = "";
    makerBody2.appendChild(document.createElement("br"));

    var dropDowns = JSON.parse(t);
    dropDowns.forEach(function(x) {
      var title = document.createElement("b");
      title.innerText = x.title;
      makerBody2.appendChild(title);
      makerBody2.appendChild(document.createElement("br"));
      var drop = document.createElement("select");
      drop.classList.add("select2")
      var opt = document.createElement("option");
      opt.innerText = "";
      drop.appendChild(opt);
      x.values.forEach(function(j) {
        var opt = document.createElement("option");
        opt.innerText = j;
        drop.appendChild(opt);
      });
      makerBody2.appendChild(drop);
      makerBody2.appendChild(document.createElement("br"));
      makerBody2.appendChild(document.createElement("br"));
    });
    makerBody2.appendChild(document.createElement("br"));
    makerBody2.appendChild(document.createElement("br"));
    makerBody2.appendChild(document.createElement("br"));
    var resultTitle = document.createElement("b");
    resultTitle.innerText = "RESULT";
    makerBody2.appendChild(resultTitle);
    var copyButton = document.createElement("div");
    copyButton.innerText = "Copy Feedback";
    copyButton.id = "copyFeedback2";
    makerBody2.appendChild(copyButton);
    makerBody2.appendChild(document.createElement("br"));
    makerBody2.appendChild(document.createElement("br"));
    var resultBody = document.createElement("div");
    resultBody.id = "result2";
    makerBody2.appendChild(resultBody);
    var resultCBody = document.createElement("textarea");
    resultCBody.id = "resultC2";
    makerBody2.appendChild(resultCBody);

    [...document.querySelectorAll(".select2")].forEach(function(x) {
      x.oninput = function() {
        setTimeout(function() {}, 50);
        document.getElementById("copyFeedback2").innerText = "Copy Feedback";
        result2.innerText = "";
        resultC2.value = "";
        [...document.querySelectorAll(".select2")].forEach(function(l) {
          result2.innerText = result2.innerText + " " + l.value;
          resultC2.value = resultC2.value + " " + l.value;
        });
      };
      result2.innerText = result2.innerText + " " + x.value;
      resultC2.value = resultC2.value + " " + x.value;
    });
    document.getElementById("copyFeedback2").onclick = function() {
      document.getElementById("resultC2").select();
      document.execCommand("copy");
      this.innerText = "Copied!";
      if (location.href == "https://www.thefeedbackbank.com/") {
        navigator.sendBeacon(
          "https://script.google.com/macros/s/AKfycbzypfdMnlDOJSYyxKIqcovydTR1HtS8FY2wxDVjE1j-eS3BfKI7/exec",
          JSON.stringify({
            reason: "copy",
            comment: document.getElementById("resultC").value
          })
        );
      }
    };
  });
});

var originalSearch;
fetch(
  "https://script.google.com/macros/s/AKfycbwE0vRNZI0Q2-2C3RCRIFc6wKfFi91VtQQk8KvJnflp48hBsDE/exec"
).then(function(r) {
  r.text().then(function(t) {
    var images = JSON.parse(t);
    images.forEach(function(x) {
      var temp = new Image();
      temp.src = x.url;
      temp.classList.add("imageResult");
      temp.title = "Left click to copy image URL!";
      temp.onclick = function() {
        if (!chooseImage) {
          originalSearch = imageSearchInput.value;
          imageSearchInput.value = this.src;
          imageSearchInput.select();
          document.execCommand("copy");
          imageSearchInput.value = originalSearch;
          fakeNotif("Image URL copied!", 3000);
        } else {
          imageSearch.style.display = "none";
          memeMakerPage.style.display = "block";
          console.log(temp.src);
          getDataUri(temp.src, function(base64) {
            loadImage(base64);
          });
            [...document.querySelecterAll(".imageResult")].forEach(function(l){
        l.title = "Left click to copy image URL!";

  })
        }
      };
      temp.id = x.title;
      imageSearchBody.appendChild(temp);
    });
  });
});
imageSearchInput.oninput = function() {
  [...imageSearchBody.querySelectorAll(".imageResult")].forEach(function(x) {
    x.style.display = "block";
    imageSearchInput.value
      .toLocaleLowerCase()
      .split(" ")
      .forEach(function(j) {
        if (x.id.toLocaleLowerCase().indexOf(j) == -1) {
          x.style.display = "none";
        }
      });
  });
};

function getDataUri(targetUrl, callback) {
  var ctx = memeCanvas.getContext("2d");
  var textCtx = textCanvas.getContext("2d");
  textCtx.clearRect(0, 0, memeCanvas.width, memeCanvas.height);
  ctx.clearRect(0, 0, memeCanvas.width, memeCanvas.height);

  textCtx.font = `30px Arial`;
  textCtx.textAlign = "center";
  textCtx.fillText("Loading...", memeCanvas.width/2,memeCanvas.height/2);
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  var proxyUrl = "https://cors.bridged.cc/";
  xhr.open("GET", proxyUrl + targetUrl);
  xhr.responseType = "blob";
  xhr.send();
}

//Meme Maker
function loadImage(src) {
  console.log(src);
  var fake = new Image();
  var width = 0;
  var height = 0;
  var texts = [];
  fake.classList.add("canvasImage");
  fake.crossOrigin = "Anonymous";
  fake.src = src;
    var ctx = memeCanvas.getContext("2d");
  var textCtx = textCanvas.getContext("2d");
  fake.onload = function() {
    document.body.appendChild(fake);
    width = this.getBoundingClientRect().width;
    height = this.getBoundingClientRect().height;
    this.remove();
    memeCanvas.width = width;
    memeCanvas.height = height;

    textCanvas.width = width;
    textCanvas.height = height;
    topLabel.style.left = textCanvas.width + 20 + "px";
    bottomLabel.style.left = textCanvas.width + 20 + "px";
    colorLabel.style.left = textCanvas.width + 20 + "px";
    sizeLabel.style.left = textCanvas.width + 20 + "px";
    topText.style.left = textCanvas.width + 20 + "px";
    bottomText.style.left = textCanvas.width + 20 + "px";
    textColor.style.left = textCanvas.width + 20 + "px";
    textSize.style.left = textCanvas.width + 20 + "px";
    downloadMeme.style.left = textCanvas.width + 20 + "px";
    topX.value = width / 2;
    topY.value = textSize.value;
        bottomX.value = width / 2;
    bottomY.value = height-20;
    textCtx.clearRect(0, 0, width, height);

    ctx.drawImage(fake, 0, 0, memeCanvas.width, memeCanvas.height);

    function drawText() {
      textCtx.clearRect(0, 0, width, height);
      textCtx.fillStyle = textColor.value;
      textCtx.strokeStyle = "black";
      textCtx.lineWidth = "2";
      textCtx.font = `${textSize.value}px Arial`;
      textCtx.textAlign = "center";
      textCtx.fillText(topText.value, topX.value, topY.value);
      textCtx.strokeText(topText.value, topX.value, topY.value);
      textCtx.fillText(bottomText.value, bottomX.value, bottomY.value);
      textCtx.strokeText(bottomText.value, bottomX.value, bottomY.value);
    }
    topText.oninput = drawText;
    bottomText.oninput = drawText;
    textSize.oninput = drawText;
    textColor.oninput = drawText;
    topX.oninput = drawText;
    topY.oninput = drawText;
    bottomX.oninput = drawText;
    bottomY.oninput = drawText;
    downloadMeme.onclick = function() {
      ctx.drawImage(textCanvas, 0, 0);
      var link = document.createElement("a");
      link.download = "feedbackBankMeme.png";
      link.href = memeCanvas.toDataURL();
      link.click();
    };
  };
}
var chooseImage = false;
memeMaker.onclick = function() {
  [...document.querySelectorAll(".imageResult")].forEach(function(l){
          l.title = "Left click to create a meme with this image!";
  })
 

  chooseImage = true;
  alert("Choose an image to begin creating your meme!");
};
