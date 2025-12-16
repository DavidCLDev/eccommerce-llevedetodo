let widget = document.getElementById("menu-widget");

function myFunction() {
    widget.style.display = "block";
}

window.onclick = function(event) {
    let container = document.getElementById("menu-container");
    if (!event.target.matches(".submenu-container")) {
        widget.style.display = "none";
    }
}