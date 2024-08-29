
function myFunction() {
  let x = document.querySelector("#myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function chosenOne(blockquote) {
  let songLyric = blockquote.innerHTML;
  document.querySelector("#preview").innerHTML = songLyric;
}


function goToPrev() {
  window.location.hash = "preview";
}


function revert() {
  document.querySelector("#preview").innerHTML = "<h4><br><br><br><br><br><br><br><br><br><br>Select a song to preview lyrics here.</h4><br><br><br><br><br><br>";
}


let block = document.querySelectorAll(".child");
for (let i = 0; i < block.length; i++) {
  block[i].setAttribute("tabindex", "0");
}

let detailsOpen = document.querySelectorAll(".subdetails")
let screen = window.matchMedia("(max-width: 768px)");
if (screen.matches) {
  detailsOpen.forEach(detailsOpen => { detailsOpen.open = true });
}

let detailsOpenLar = document.querySelectorAll(".details")
let screenLar = window.matchMedia("(min-width: 900px)");
if (screenLar.matches) {
  detailsOpenLar.forEach(detailsOpenLar => { detailsOpenLar.open = true });
}
