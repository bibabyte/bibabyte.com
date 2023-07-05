
// alert('why');


// TO CLOSE THE MENU AFTER CLICING A SAME-PAGE-ITEM
var menu = document.getElementById('menu');

var closeIcon = document.getElementById("menuTog");


    menu.addEventListener('click', handleMenuClick);

    menu.addEventListener('touch', handleMenuClick);

    function handleMenuClick(event) {
        if (event.target instanceof HTMLAnchorElement){
            closeIcon.checked = false;
        }
      }


// POPUP on menu click

function hours() {
    alert("du mardi au samedi 10h30-19h30");
}