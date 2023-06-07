
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