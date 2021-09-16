<section class="main-overlay" aria-label="overlay container">
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
</section>

<?php  
  $set = $_GET['set'];
  echo' Set chosen : '.$set;
  $path = "./data/";
  $path.= $set;
  $path.= ".json";
 // echo $path;
  $order = [];
  $cards = json_decode(file_get_contents($path), true);
  $cards_json = json_encode($cards);
  //echo $cards_json;
  $lengthSet = count($cards);
  $i = 0;
  while($i < $lengthSet){
    array_push($order, $i);
    $i++;
  }
  shuffle($order);
 var_dump($order);
 var_dump($cards);
   



/*<!--***********************find data set string ***************-->*/

/*<!--************************* end data set selection ***********-->*/
?>
<!--************************* game page ************************-->
<main class="main-results">
  
<section class='main-results__container' aria-label="flash card container">
<div class='main-results__form'>

  <div class='game-info'>
      Time <span id='time-remaining'>100</span>
      Score <span id='flips'>0</span>
      </div>
 

<!--********************** results buttons ***************-->
  <div class="game-info">
  <button class="main-results__correct">Got it Right!<span class="material-icons"> sentiment_satisfied_alt</span></button>
  <button class="main-results__incorrect">Not this time<span class="material-icons">sentiment_dissatisfied </span></button>
  </div>
     
<!--********************** navigation arrows ***************-->
  <div class="navigation">
    <a href="#" class="previous">&laquo;</a>
    <a href="#" class="previous round">&#8249;</a>
    <a class="navigation__text">Cards</a>
    <a href="#" class="next round"> &#8250; </a>
    <a href="#" class="next">&raquo;</a>
  </div>
<section>


<!--*****************end of next previous arrows ***************-->

<section class='main-results__form'>
<div class='card'>  
 <div class='card-back card-face' id="card-back">
    <img class='blue-logo'
    src='Assets/Images/The_Den_logo_circle.png'>            
  </div>
  <div class='card-back card-face' id="card-front">
    <div class='card-front card-face' >
          <img class='card-value' alt='eight'
          src='Assets/Images/eight.jpg'>   
      </div>            
  </div>
</div>
</section>

</main>
<script src="script.js"></script>
<script type='text/javascript'>
  let obj = <?php echo json_encode($cards); ?>;
	console.log(obj);
	alert(obj[2][0]);
</script>