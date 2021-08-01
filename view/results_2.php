<style>
.round {
  border-radius: 50%;
}</style>
<main class="main-results" aria-label="flash card container">
    <?php
        $cards = array();
        $cards = array(array('1','one'),array(2,'two'),array(3,'three'),array(4,'four'),array(5,'five'),array(6,'six'),array(7,'seven'),array(8,'eight'),array(9,'nine'),array(10,'ten'),array(11,'eleven'),array(12,'twelve'));

        for ($i=0; $i <= 12; $i++){
            $front = $cards[$i][0];
            $back = $cards[$i][1];
            echo $front.$back;
            $cards .=   "<div class='card' tabindex='0' aria-label='{$front} what is the right answer? '>
                            <div class='card-front'> {$front} </div>
                        </div>
                        <div class='card-back' tabindex='1' aria-label='{$back} did you get it right? '>
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