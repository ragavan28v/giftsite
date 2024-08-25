function revealImage(imageBoxId, imageId, giftId) {
    document.getElementById(giftId).style.display = 'none';
    document.getElementById(imageId).style.display = 'block';
}

document.getElementById('image-box-1').addEventListener('click', function() {
    revealImage('image-box-1', 'image-1', 'gift-1');
});

document.getElementById('image-box-2').addEventListener('click', function() {
    revealImage('image-box-2', 'image-2', 'gift-2');
});

document.getElementById('image-box-3').addEventListener('click', function() {
    revealImage('image-box-3', 'image-3', 'gift-3');
});

document.getElementById('reveal-button').addEventListener('click', function() {
    revealImage('image-box-1', 'image-1', 'gift-1');
    revealImage('image-box-2', 'image-2', 'gift-2');
    revealImage('image-box-3', 'image-3', 'gift-3');
    document.getElementById('message').innerText = "Surprise! Hope you love it!";
});
