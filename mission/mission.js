let selectElem = document.querySelector('select');

let logo = document = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark') {
        // give body dark class
        document.body.className = 'dark';
        // add different img by changing src
        logo.setAttribute("src", "byui-logo_white.png");
    } else {
        // take off class
        document.body.className = '';
        // change the image back to original
        logo.setAttribute("src", "byui-logo_blue.webp");
    }
}