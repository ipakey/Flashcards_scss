"use strict";

function ready() {
  var overlays = Array.from(document.getElementsByClassName('overlay-text'));
  overlays.forEach(function (overlay) {
    overlay.addEventListener('click', function () {
      overlay.classList.remove('visible'); //game.startGame();
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready());
} else {
  ready();
}