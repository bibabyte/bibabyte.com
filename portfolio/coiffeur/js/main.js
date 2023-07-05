
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

// function hours() {
//     closeIcon.checked = false;
//     alert("du mardi au samedi 10h30-19h30");
   
// }

// function findUs() {
//     closeIcon.checked = false;
//     alert(<a href='https://www.google.com/maps/place/12+Rue+Marie+et+Louise,+75010+Paris/@48.8720847,2.3643842,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e0a3f4f73e1:0x57d53d5992b0e21c!8m2!3d48.8720847!4d2.3665782!16s%2Fg%2F11c3q3hj3x'>12 rue Marie et Louise <br>
//     75010  Paris</a>);
// }


//ALT POPUP

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

showButton2.addEventListener("click", () => {
    favDialog2.showModal();
});


// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
// confirmBtn.addEventListener("click", (event) => {
//   event.preventDefault(); // We don't want to submit this fake form
//   favDialog.close(selectEl.value); // Have to send the select box value here.
// });
