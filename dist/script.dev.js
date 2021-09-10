"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AudioController =
/*#__PURE__*/
function () {
  // >181
  function AudioController() {
    _classCallCheck(this, AudioController);

    this.bgMusic = new Audio('Assets/Audio/Bground1.mp3');
    this.flipSound = new Audio('Assets/Audio/cardflip.wav');
    this.matchSound = new Audio('Assets/Audio/Match.wav');
    this.victorySound = new Audio('Assets/Audio/Victory.wav');
    this.gameOverSound = new Audio('Assets/Audio/GameOver.wav');
    this.noMatchSound = new Audio('Assets/Audio/NoMatch.wav');
    this.bgMusic.volume = 0.2;
    this.bgMusic.loop = true;
  }

  _createClass(AudioController, [{
    key: "startMusic",
    value: function startMusic() {
      this.bgMusic.play();
    }
  }, {
    key: "stopMusic",
    value: function stopMusic() {
      this.bgMusic.pause();
    }
  }, {
    key: "flip",
    value: function flip() {
      this.flipSound.play();
    }
  }, {
    key: "matchAudio",
    value: function matchAudio() {
      this.matchSound.play();
    }
  }, {
    key: "noMatchAudio",
    value: function noMatchAudio() {
      this.noMatchSound.play();
    }
  }, {
    key: "victoryAudio",
    value: function victoryAudio() {
      this.bgMusic.pause();
      this.victorySound.play();
    }
  }, {
    key: "gameOverAudio",
    value: function gameOverAudio() {
      this.bgMusic.pause();
      this.gameOverSound.play();
    }
  }]);

  return AudioController;
}();

var Flashcards_Set =
/*#__PURE__*/
function () {
  //This constructor initallises all the variables at the start of the game.
  function Flashcards_Set(totalTime, cards) {
    _classCallCheck(this, Flashcards_Set);

    this.flips = 0;
    this.cardArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById('time-remaining'); //this.ticker = document.getElementById('flips');

    this.endClicks = 0; //console.log(this.flips);

    this.audioController = new AudioController();
  } //Start the game method


  _createClass(Flashcards_Set, [{
    key: "startGame",
    value: function startGame() {
      var _this = this;

      this.cardToCheck = null; //this.totalClicks = 0;

      this.timeRemaining = this.totalTime;
      this.matchedCards = [];
      this.busy = true; // this timeout pauses the game to allow the shuffle to happen before the countdown & flips can begin it is set to .5seconds

      setTimeout(function () {
        //this.audioController.startMusic();								
        _this.shuffleCards();

        _this.countDown = _this.startCountDown();
        _this.busy = false;
      }, 500); //this part makes sure every card is in play at the start of a game removes all visble and matched classElements from cards. 

      this.hideCards();
      this.timer.innerText = this.timeRemaining;
      this.ticker.innerText = this.totalClicks;
    }
  }, {
    key: "hideCards",
    value: function hideCards() {
      this.cardArray.forEach(function (card) {
        card.classList.remove('visible');
        card.classList.remove('matched');
      });
    }
  }, {
    key: "flipCard",
    value: function flipCard(card, totalClicks) {
      if (this.canFlipCard(card)) {
        this.audioController.flip();
        this.totalClicks++;
        this.ticker.innerText = this.totalClicks;
        card.classList.add('visible');
        console.log(this.totalClicks, card);
        this.checkFlip(this.totalClicks, card);
      }
    }
    /*  Imported functions from slide show
    var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    } 
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
    
    */

    /*		
    	checkFlip(totalClicks, card){
    		if(this.cardToCheck)
    			this.checkForCardMatch(card);
    		else
    			this.cardToCheck= card;
    	}
    	
    	checkForCardMatch(card, cardToCheck) {	
    		
    		if(this.getCardType(card) === this.getCardType(this.cardToCheck))	
    			this.cardMatch(card, this.cardToCheck);							
    		else 
    			this.cardMisMatch(card, this.cardToCheck);								
    }
    	
    	cardMatch(card1, card2){											
    		this.matchedCards.push(card1);		//Add matched cards to matched cards array
    		this.matchedCards.push(card2);
    		card1.classList.add('matched');		//add matched class to cards.
    		card2.classList.add('matched');
    		this.cardToCheck = null;
    		this.audioController.matchAudio();										
    		if(this.matchedCards.length === this.cardArray.length){
    			this.audioController.victoryAudio();
    			this.victory();													
    		}
    	}
    	
    	cardMisMatch(card1, card2){
    		this.busy = true;
    		setTimeout(() => {					// Timeout
    			card1.classList.remove('visible');
    			card2.classList.remove('visible');
    			this.audioController.noMatchAudio();
    
    		}, 1000);
    			this.cardToCheck = null;
    			this.busy = false;		
    	}
        */

  }, {
    key: "getCardType",
    value: function getCardType(card) {
      return card.getElementsByClassName('card-value')[0].src;
    }
  }, {
    key: "startCountDown",
    value: function startCountDown() {
      var _this2 = this;

      return setInterval(function () {
        _this2.timeRemaining--;
        _this2.timer.innerText = _this2.timeRemaining;

        if (_this2.matchedCards.length === _this2.cardArray.length) {
          _this2.timeRemaining = timer;
          _this2.timer.innerText = totalTime;
        } else {
          if (_this2.timeRemaining === 0) _this2.gameOver();
        }
      }, 1000);
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      clearInterval(this.countDown);
      this.audioController.gameOverAudio();
      document.getElementById('game-over-text').classList.add('visible');
      this.hideCards();
    }
  }, {
    key: "victory",
    value: function victory() {
      document.getElementById('victory-text').classList.add('visible');
      this.audioController.victoryAudio();
      this.startCountDown.pause();
      this.saveResult(this.Score, this.countDown);
      clearInterval(this.countDown);
    }
  }, {
    key: "saveResult",
    value: function saveResult(score, time) {}
  }, {
    key: "shuffleCards",
    value: function shuffleCards() {
      for (var i = this.cardArray.length - 1; i > 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        this.cardArray[randomIndex].style.order = i;
        this.cardArray[i].style.order = randomIndex;
      }
    }
  }, {
    key: "canFlipCard",
    value: function canFlipCard(card) {
      return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
  }]);

  return Flashcards_Set;
}();

function ready() {
  // load overlays and cards and create Arrays of data
  var overlays = Array.from(document.getElementsByClassName('overlay-text'));
  var cards = Array.from(document.getElementsByClassName('card'));
  console.log(cards);
  var totalTime = document.getElementById('time-remaining'); // select path for Card Set

  var game = new Flashcards_Set(100, cards);
  overlays.forEach(function (overlay) {
    overlay.addEventListener('click', function () {
      overlay.classList.remove('visible');
      game.startGame(); //Will start //game play when defined

      var audioController = new AudioController();
      document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('set').addEventListener('input', handleSelect);
      });

      function handleSelect(ev) {
        var select = ev.target;
        console.log(select.value);
      }

      function handleData(ev) {
        var theInput = ev.target;
      }
    });
  });
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      console.log();
      game.flipCard(card); //Will flip a card when defined			
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready());
} else {
  ready();
}