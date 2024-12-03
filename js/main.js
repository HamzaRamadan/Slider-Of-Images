var imglist = Array.from(document.querySelectorAll('.item img'));

var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBox = document.getElementById("lightBox");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var close = document.getElementById("close");

var curentIndex = 0;



for (var i = 0; i < imglist.length; i++) {
    imglist[i].addEventListener('click', function(e) {

        lightBoxContainer.style.display = 'flex'
        var imgSrcClicked = (e.target.getAttribute('src'))

        curentIndex = imglist.indexOf(e.target)
        console.log(curentIndex);

        lightBox.style.backgroundImage = `url(${imgSrcClicked})`



        console.log('hello');

    })
}

function nextslider() {

    curentIndex++;

    if (curentIndex == imglist.length) {
        curentIndex = 0
    }
    var imgSrcClicked = imglist[curentIndex].getAttribute('src');

    lightBox.style.backgroundImage = `url(${imgSrcClicked})`
}

function prevslider() {

    curentIndex--;

    if (curentIndex < 0) {
        curentIndex = imglist.length - 1
    }
    var imgSrcClicked = imglist[curentIndex].getAttribute('src');

    lightBox.style.backgroundImage = `url(${imgSrcClicked})`
}

function closeslider() {
    lightBoxContainer.style.display = 'none'

}


next.addEventListener('click', function() {
    nextslider();
})
prev.addEventListener('click', function() {
    prevslider();
})
close.addEventListener('click', function() {
    closeslider();
})

document.addEventListener('keyup', function(e) {

    if (e.key == 'ArrowLeft') {
        prevslider()
    } else if (e.key == 'ArrowRight') {
        nextslider()
    } else if (e.key == 'Escape') {
        closeslider();
    }
})