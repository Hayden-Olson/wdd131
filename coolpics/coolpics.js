const menuButton = document.getElementById("menubutton");

let navHidden = true;

menuButton.addEventListener('click', () => {
    const nav = document.querySelector("nav");
    navHidden = !navHidden;
    nav.style.display = navHidden ? "none" : "flex";
}) 