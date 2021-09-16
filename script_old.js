class AudioController {								// >181
	constructor(){
		this.bgMusic = new Audio('Assets/Audio/Bground1.mp3');
		this.flipSound = new Audio('Assets/Audio/cardflip.wav');
		this.matchSound = new Audio('Assets/Audio/Match.wav');
		this.victorySound = new Audio('Assets/Audio/Victory.wav');
		this.gameOverSound = new Audio('Assets/Audio/GameOver.wav');
		this.noMatchSound = new Audio('Assets/Audio/NoMatch.wav');
		this.bgMusic.volume = 0.2;
		this.bgMusic.loop = true;					
	}
	
	startMusic(){								
		this.bgMusic.play();						
	} 
	
	stopMusic() {									
		this.bgMusic.pause();
		
	}
	
	flip(){											
		
		this.flipSound.play(); 						
	}
	
	matchAudio(){										
		this.matchSound.play();
	}
	
	noMatchAudio() {
		this.noMatchSound.play();
	}
	
	victoryAudio(){										
		this.bgMusic.pause();
		this.victorySound.play();				
	} 
	
	gameOverAudio(){										
		this.bgMusic.pause();
		this.gameOverSound.play();					
	} 
}

	
class Flashcards_Set {													
	//This constructor initallises all the variables at the start of the game.
	constructor(totalTime, cards) {	
		this.flips = 0;
		this.cardArray = cards;
		this.totalTime = totalTime;
		this.timeRemaining = totalTime;
		this.timer = document.getElementById('time-remaining');
		this.ticker = document.getElementById('flips');
		this.endClicks = 0;
		//console.log(this.flips);
		this.audioController= new AudioController();	
	}
	
	//Start the game method
	startGame(){															
		this.cardToCheck = null;
		//this.totalClicks = 0;
		this.timeRemaining = this.totalTime;
		this.matchedCards = [];
		this.busy = true;
		
		// this timeout pauses the game to allow the shuffle to happen before the countdown & flips can begin it is set to .5seconds
		setTimeout(() =>{							
			//this.audioController.startMusic();								
			//this.shuffleCards();											
			this.countDown = this.startCountDown();							
			this.busy = false;			
		} , 500);
		//this part makes sure every card is in play at the start of a game removes all visble and matched classElements from cards. 
		this.hideCards();    												
		this.timer.innerText = this.timeRemaining;		
		this.ticker.innerText = this.totalClicks; 							
	}
	
	hideCards(){															
		this.cardArray.forEach(card => {
			card.classList.remove('visible');
			card.classList.remove('matched');							
		}); 
	}
	
	flipCard(card, totalClicks){											
		if(this.canFlipCard(card)){											
			this.audioController.flip();								
			this.totalClicks++;												
			this.ticker.innerText= this.totalClicks;
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
	
	getCardType(card){														
		return card.getElementsByClassName('card-value')[0].src;
	}

	startCountDown(){														
		return setInterval(() => {
			this.timeRemaining--;
			this.timer.innerText = this.timeRemaining;
			if(this.matchedCards.length === this.cardArray.length){
				this.timeRemaining = timer;
				this.timer.innerText = totalTime;
			}
				else {
					if(this.timeRemaining === 0)							
						this.gameOver();		
				}		
		}, 1000);	
	}
	
	gameOver(){																
		clearInterval(this.countDown);
		this.audioController.gameOverAudio();								
		document.getElementById('game-over-text').classList.add('visible');
		this.hideCards();													
	}
	
	victory(){																
												
		document.getElementById('victory-text').classList.add('visible');	
		this.audioController.victoryAudio();
		this.startCountDown.pause();
		this.saveResult(this.Score, this.countDown);
		clearInterval(this.countDown);
	}
	
	saveResult(score, time){

	}

	shuffleCards(){
		for(let i = this.cardArray.length - 1; i > 0; i--) { 				
			let randomIndex = Math.floor(Math.random() * (i+1));
			this.cardArray[randomIndex].style.order = i;
			this.cardArray[i].style.order = randomIndex;						
		}
	}
	

	canFlipCard(card){																			
		return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;	
	}		

	
ready(){
	// load overlays and cards and create Arrays of data
	
	let overlays = Array.from(document.getElementsByClassName('overlay-text'));
	

	let cards = json_encode($cards); 
	let order = json_encode($order);

	console.log(cards);
	let totalTime= document.getElementById('time-remaining');
    
// select path for Card Set
	let game = new Flashcards_Set(100, cards, order);
		overlays.forEach(overlay => {
			overlay.addEventListener('click', () => {
				overlay.classList.remove('visible');
				game.startGame();								//Will start //game play when defined
			let audioController = new AudioController();						
		});
			
	}

	if(document.readyState === 'loading'){
		document.addEventListener('DOMContentLoaded', ready());
	}	else{
			ready();
	}
