<main class="main-overlay" aria-label="overlay container">
  <div  class='overlay-text'> 
    Click to Start
  </div>
  <div id='game-over-text' class='overlay-text'>
    GAME OVER!
    <span class='overlay-text-small '>Bad Luck: Click to Try Again</span>
    <span class='material-icons' >sentiment_dissatisfied</span>
  </div>
    <div id='victory-text' class='overlay-text'>
      VICTORY!
      <span class='overlay-text-small'>Well Done: Click to choose if you want to save this result</span><span class='material-icons' >sentiment_satisfied</span>
    </div>  
  </div>
</main>

<!--***********************find data set string ***************-->

<!--************************* end data set selection ***********-->

<!--************************* game page ************************-->

<div class='main-results' aria-label="flash card container">

  <div class='main-results__form'>
    <div class='game-info'>
        Time <span id='time-remaining'>100</span>
    </div>
    <div class='game-info'>
        Score <span id='flips'>0</span>
    </div>
    
    <div class='card'>  
        <div class='card-back card-face'>
            <img class='blue-logo'
            src='Assets/Images/The_Den_logo_circle.png'>            
        </div>
        <div class='card-front card-face'>
            <img class='card-value' alt='eight'
            src='Assets/Images/eight.jpg'>   
        </div>            
    </div>


<!--********************** navigation arrows ***************-->

  <div class="save-results__input">
    <button class="main-results__correct main-results__button-yes ">Got it Right!<span class="material-icons"> sentiment_satisfied_alt</span></button>
    <button class="main-results__incorrect main-results__button-no">Not this time<span class="material-icons">sentiment_dissatisfied </span></button>
  </div>

       
  <div class="navigation">           
    <h2 class='footer'>
      <a href="#" class="previous">&laquo;'  Start of Set  ' </a>
      <a href="#" class="previous round">&#8249;'  Previous Card  ' ~  '</a>
      <a href="#" class="next round">'  Next Card  ' &#8250; </a>
      <a href="#" class="next">' End of Set  '&raquo;</a>
    </h2>
  </div>
</div>

<!--*****************end of next previous arrows ***************-->


<script src="script.js"></script>