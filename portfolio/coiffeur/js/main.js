
// alert('why');


// TO CLOSE THE MENU AFTER CLICKING A SAME-PAGE-ITEM
// WORKS BUT only works on popup, when it closes the menu breaks
// var menu = document.getElementById('nav-menu');
// var menuContent = document.getElementById('menuContent');
// var backgroundOverlay = document.getElementById('backgroundOverlay');

// var closeIcon = document.getElementById("menuTog");


//     menu.addEventListener('click', handleMenuClick);

//     menu.addEventListener('touch', handleMenuClick);

//     function handleMenuClick(event) {
//         if (event.target instanceof HTMLAnchorElement){
//             closeIcon.checked = false;
//         }
//     }

      // TO CLOSE THE MENU AFTER CLICKING OUTSIDE THE MENU

// document.addEventListener('click', closeIf);

// function closeIf(locOfClick) {
//     if (locOfClick.target instanceof HTMLAnchorElement) {
//         closeIcon.checked = true;
//     }
// }
    


// If the menu box is unchecked it should still work.




// POPUP dialog on menu click


const showHours = document.getElementById("show-hours");
const showLocation = document.getElementById("show-location");
const hours = document.getElementById("hours");
const loc = document.getElementById("location");

showHours.addEventListener("click", () => {
    hours.showModal();
});

showLocation.addEventListener("click", showDialog);
showLocation.addEventListener("click", () => {
    loc.showModal();
});



hours.addEventListener("click", menuClose);
hours.addEventListener("touch", menuClose);

loc.addEventListener("click", menuClose);
loc.addEventListener("touch", menuClose);

function menuClose() {
    closeIcon.checked = false;
}

function showDialog(e) {
    e.showModal();
}