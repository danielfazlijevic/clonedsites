var myNav = document.querySelector('.navbar');
var languageMenu = document.querySelector('.languagemodal')
var menu = document.querySelector('#menu');
window.onscroll = function () {
    "use strict";
    if (document.documentElement.scrollTop >= 3) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");

    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");

    }
};


function showLanguageMenu() {
    languageMenu.style.display = "flex";
}

function hideLanguageMenu() {
    languageMenu.style.display = "none";
}

function toggleMenu() {
    menu.classList.toggle("opacity");
    menu.style.display == "flex" ? menu.style.display = "none" : menu.style.display = "flex";
}