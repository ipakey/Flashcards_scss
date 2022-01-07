function ready(obj){
	let overlays = Array.from(document.getElementsByClassName('overlay-text'));
	let cards = obj;
	console.log(cards);
	
	overlays.forEach(overlay => {
		overlay.addEventListener('click',() => {
			overlay.classList.remove('visible');
			//game.startGame();
		});
	});
	
		card.addEventListener('click', () =>{
			//game/flipCard(card);
		});
	}








	

if(document.readyState === 'loading'){
	document.addEventListener('DOMContentLoaded',ready());
}else{
	ready();
}