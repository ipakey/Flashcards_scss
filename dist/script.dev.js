"use strict";

function ready(obj) {
  var overlays = Array.from(document.getElementsByClassName('overlay-text'));
  var cards = obj;
  console.log(cards);
  overlays.forEach(function (overlay) {
    overlay.addEventListener('click', function () {
      overlay.classList.remove('visible'); //game.startGame();
    });
  });
  card.addEventListener('click', function () {//game/flipCard(card);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready());
} else {
  ready();
}