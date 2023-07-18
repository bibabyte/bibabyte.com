
// alert('why');

// TO CLOSE THE MENU AFTER CLICKING A SAME-PAGE-ITEM
var menu = document.getElementById('nav-menu');
var menuContent = document.getElementById('menuContent');
var backgroundOverlay = document.getElementById('backgroundOverlay');
var cl = document.getElementById("mainContent");

var closeIcon = document.getElementById("menuTog");

menu.addEventListener('click', handleMenuClick);

menu.addEventListener('touch', handleMenuClick);

function handleMenuClick(event) {
    if (event.target instanceof HTMLAnchorElement){
        closeIcon.checked = false;
    }
}

// TO CLOSE THE MENU AFTER CLICKING OUTSIDE THE MENU

cl.addEventListener("click", hide_menu);

function hide_menu(){

    // var menu = document.getElementById('dropdown_menu');
    if(menu.style.display == 'none'){
        menu.style.display = 'block';
    }
}



// document.addEventListener('click', closeIf());

//  function closeIf(locOfClick) {
//      if (locOfClick.target instanceof HTMLAnchorElement) {
//          closeIcon.checked = true;
//      }

//  };

    // onclick = function(e){
    //     if(e.target.id !== 'nav-menu'){		
    //       //element clicked wasn't the div; hide the div		
    //       menuContent.style.display = 'none';		
    //     }		
    //   };



// TO CLOSE THE MENU AFTER CLICING A SAME-PAGE-ITEM
// var menu = document.getElementById('nav-menu');

// var closeIcon = document.getElementById("menuTog");


//     menu.addEventListener('click', handleMenuClick);

//     menu.addEventListener('touch', handleMenuClick);

//     function handleMenuClick(event) {
//         if (event.target instanceof HTMLAnchorElement){
//             closeIcon.checked = false;
//         }
//       }






// POPUP on menu click


// const showButton = document.getElementById("showDialog");
// const showButton2 = document.getElementById("showDialog2");
// const favDialog = document.getElementById("hours");
// const favDialog2 = document.getElementById("location");
// // const outputBox = document.querySelector("output");
// // const selectEl = favDialog.querySelector("select");
// // const confirmBtn = favDialog.querySelector("#confirmBtn");

// // "Show the dialog" button opens the <dialog> modally
// showButton.addEventListener("click", () => {
//     favDialog.showModal();
// });

// favDialog.addEventListener("click", () => {
//     closeIcon.checked = false;
// })

// showButton2.addEventListener("click", () => {
//     favDialog2.showModal();
// });

// favDialog2.addEventListener("click", () => {
//     closeIcon.checked = false;
// })