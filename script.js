
const responsiveNav = document.getElementById("escapeTopnav");
const symbol = document.getElementById("symbol");

function collapseNav() {
    if (responsiveNav.className === "top-nav") {
        responsiveNav.className += "responsive";
        symbol.setAttribute("class","fa fa-times");
        
    } else {
        responsiveNav.className = "top-nav";
        symbol.setAttribute("class","fa fa-bars");
    }
}