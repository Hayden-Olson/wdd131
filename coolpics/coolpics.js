const menuButton = document.getElementById("menubutton");

let navHidden = true;

let modal = document.createElement("dialog");
document.querySelector("body").appendChild(modal)

// This function handles the menu button. Toggles hidden value and gives functionality to the button. The last line determines how the links will be displayed.
// A tutor helped me with this one.
menuButton.addEventListener('click', () => {
    const nav = document.querySelector("nav");
    navHidden = !navHidden;
    nav.style.display = navHidden ? "none" : "flex";
}) 

const gallery = document.querySelector('.gallery');
gallery.addEventListener("click",(event) => {
    let foo = event.target.closest('img');
    let filename = new URL(foo.src);
    let largefilename = filename.pathname.split('-')[0] + "-full.jpeg";
    modal.innerHTML = `<div><button class='close-viewer'>X</button><img src="${largefilename}" alt=${foo.alt}></div>`;
    modal.showModal();
});

// Closes the modal.
modal.addEventListener('click',(event) => {
    if (event.target === modal) {
        modal.close();
    } else if (event.target === modal.querySelector("button")) {
        modal.close();
    }
});



// // Close modal on button click.
// closeButton.addEventListener('click',() => {
//     MediaSourceHandle.close();
// })

// // Close modal if clicking outside the image.
// MediaSourceHandle.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.close();
//     }
// })