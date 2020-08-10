const navbar = document.getElementById("navbar")

window.onscroll = function(){
    var top = window.scrollY;
    
    if(top >= 100){
        navbar.classList.add("scrolled")

    }
    else
        navbar.classList.remove("scrolled")
}