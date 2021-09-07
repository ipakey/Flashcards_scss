<main class="main-results" aria-label="flash card container">
    <?php
        $cards = array();


        for ($i=1; $i <= 12; $i++){
            $front = $cards[$i][0];
            $back = $cards[$i][1];
            $cards .="<div class='card' tabindex='0' aria-label='{$front} what is the right answer? '>
                        <div class='card-front'> {$front} 
                        </div>
                        <div class='card-back'  
                            aria-label='{$back} did you get it right? '>
                            {$back}
                        </div>
                       </div>";
            
        };
        
        echo $cards;
    ?>

</main>