
// alert('why');


// TO CLOSE THE MENU AFTER CLICKING A SAME-PAGE-ITEM
var menu = document.getElementById('nav-menu');
var menuContent = document.getElementById('menuContent');
var backgroundOverlay = document.getElementById('backgroundOverlay');

var closeIcon = document.getElementById("menuTog");


    menu.addEventListener('click', handleMenuClick);

    menu.addEventListener('touch', handleMenuClick);

    function handleMenuClick(event) {
        if (event.target instanceof HTMLAnchorElement){
            closeIcon.checked = false;
        }
    }

      // TO CLOSE THE MENU AFTER CLICKING OUTSIDE THE MENU

    //   document.
      
    //   onclick = function(e){
    //     if(e.target.id !== 'nav-menu'){
    //       //element clicked wasn't the div; hide the div
    //       menuContent.style.display = 'none';
    //     }
    //   };






// POPUP on menu click


const showButton = document.getElementById("showDialog");
const showButton2 = document.getElementById("showDialog2");
const favDialog = document.getElementById("hours");
const favDialog2 = document.getElementById("location");

showButton.addEventListener("click", () => {
    favDialog.showModal();
});

showButton2.addEventListener("click", showDialog);
// showButton2.addEventListener("click", () => {
//     favDialog2.showModal();
// });



favDialog.addEventListener("click", menuClose);
favDialog.addEventListener("touch", menuClose);

favDialog2.addEventListener("click", menuClose);
favDialog2.addEventListener("touch", menuClose);

function menuClose() {
    closeIcon.checked = false;
}

function showDialog(e) {
    e.showModal();
}