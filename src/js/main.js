setMode()

if(        localStorage.currentTheme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)){

        document.getElementById("toggle").checked=true
}

document.getElementById("toggle").addEventListener("change",function(){
  if(this.checked){
    localStorage.currentTheme = "dark";
  }
  else {
    localStorage.currentTheme = "light";
  }

  setMode()

})

function setMode(){
    document.documentElement.classList.toggle(
        "dark",
    )
}


