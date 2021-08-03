<style>
.round {
  border-radius: 50%;
}</style>
<main class="main-results" aria-label="flash card container">
<?php
       echo $_SERVER['PHP_SELF']
?>
    <?php
        
        $cards = array();
     
        for ($i=0; $i <= 12; $i++){
            $front = $cards[$i][0];
            $back  = $cards[$i][1];
            echo $cards.$front.$back;
            $cards .=   "<div class='card' aria-label='{$front} what is the right answer? '>
                            <div class='card-front'> {$front} </div>
                        </div>
                        <div class='card-back' aria-label='{$back} did you get it right? '>
                           <div class='card-back'> {$back} </div>
                        </div>";   
        };
        echo $cards;
    ?>
        
        <a href="#" class="previous">&laquo; Previous</a>
        <a href="#" class="next">Next &raquo;</a>

        <a href="#" class="previous round">&#8249;</a>
        <a href="#" class="next round">&#8250;</a>
   

</main>