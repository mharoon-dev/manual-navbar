// navbar

let webPages = document.querySelector(".webPages")
let leftSide = document.querySelector(".leftSide")
let togglerBtn = document.querySelector(".togglerBtn")


function navbar() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 992 ) {
        webPages.style.display = "none";
        leftSide.style.display = "none";
        togglerBtn.style.display = "block";
    } else {
        webPages.style.display = "block";
        leftSide.style.display = "flex";
        togglerBtn.style.display = "none";
    }
  }
navbar();

window.addEventListener('resize', navbar);



// sideBar

let sideBar = document.querySelector(".siderBar");
let offBtn = document.querySelector(".offBtn");
let toglerBtn = document.querySelector(".togglerBtn");
function sideBarHandler() {
    offBtn.style.display = 'inline-block'
    togglerBtn.style.display = 'none'
    sideBar.style.transform = 'translate(0%)';
}

function sideBarOff() {
    offBtn.style.display = 'none'
    togglerBtn.style.display = 'flex'
    sideBar.style.transform = 'translate(-110%)';
}