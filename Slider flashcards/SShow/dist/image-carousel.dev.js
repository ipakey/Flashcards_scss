"use strict";

var carousels = document.getElementsByClassName('image-carousel');
[].forEach.call(carousels, function (c) {
  var next = c.getElementsByClassName('next')[0];
  console.log(next);
  prev = c.getElementsByClassName('prev')[0];
  console.log(prev);
  bubbles = c.getElementsByClassName('bubbles')[0];
  console.log(bubbles);
  inner = c.getElementsByClassName('inner')[0];
  console.log(inner);
  imgs = inner.getElementsByClassName('image');
  console.log(imgs);
  currentImageIndex = 0;
  console.log(currentImageIndex);
  width = 640;

  function switchImg() {
    inner.style.left = -width * currentImageIndex + 'px';
  }

  next.addEventListener('click', function () {
    currentImageIndex++;

    if (currentImageIndex >= imgs.length) {
      currentImageIndex = 0;
    }

    switchImg();
  });
  prev.addEventListener('click', function () {
    currentImageIndex--;

    if (currentImageIndex < 0) {
      currentImageIndex = imgs.length - 1;
    }

    switchImg();
  });
});