setTimeout(function(){
  document.getElementById("alert").style.opacity="1";

},5)
document.getElementById("comment").onclick = function(){
  document.getElementById("addComment").style.display = "block";
    document.getElementById("url").value = document.getElementById("sheet").src;

}
document.getElementById("close").onclick = function(){
  document.getElementById("addComment").style.display = "none";
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
