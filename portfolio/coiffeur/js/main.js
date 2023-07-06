
// alert('why');


// TO CLOSE THE MENU AFTER CLICING A SAME-PAGE-ITEM
var menu = document.getElementById('nav-menu');

var closeIcon = document.getElementById("menuTog");


    menu.addEventListener('click', handleMenuClick);

    menu.addEventListener('touch', handleMenuClick);

    function handleMenuClick(event) {
        if (event.target instanceof HTMLAnchorElement){
            closeIcon.checked = false;
        }
      }


// POPUP on menu click


const showButton = document.getElementById("showDialog");
const showButton2 = document.getElementById("showDialog2");
const favDialog = document.getElementById("hours");
const favDialog2 = document.getElementById("location");
// const outputBox = document.querySelector("output");
// const selectEl = favDialog.querySelector("select");
// const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
    favDialog.showModal();
});

favDialog.addEventListener("click", () => {
    closeIcon.checked = false;
})

showButton2.addEventListener("click", () => {
    favDialog2.showModal();
});

favDialog2.addEventListener("click", () => {
    closeIcon.checked = false;
})