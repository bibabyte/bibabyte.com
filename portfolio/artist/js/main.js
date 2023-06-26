
// POPUPS OF IMAGES
document.querySelectorAll('img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

    document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}


document.querySelectorAll('.about').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').classList.add('horizontal')
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        // document.querySelector('.popup-image #displayText').innerHTML = 'testy';
    }
});

    document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

