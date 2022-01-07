<main class="main-entry">
<<<<<<< HEAD
    <h2 id="enterNumber">Enter a number</h2>
    <form class="main-entry__form" action="<?php $_SERVER['PHP_SELF'] ?>" method="GET">
        <input
            class="main-entry__input"
            id="set"
            name="set"
            aria-labelledby="enterSet"
            type="text"
            maxlength="6"
            autofocus
            required>
        <button class="main-entry__button">Go!</button>



</form>


=======
    <div class="container">
    <h2 class='header' id="enterNumber">Choose your card set</h2>

    <form class="main-entry__form" action="<?php htmlentities($_SERVER['PHP_SELF'])  ?>" method="GET">
    
        <select 
            class="main-entry__input"
            id="cards"
            name="set"
           
            aria-labelledby="enterSetUnits"
            type="text"
            maxlength="8"
            autofocus
            required>
            <option value="units">Units</option>
            <option value="tens">Tens</option>
            <option value="hundreds">Hundreds</option>
           
  </select>
    
        <button class="main-entry__button">Go!</button>

</form>

</div>
>>>>>>> 075c0e56c518f02ef1434f85c0936212fb9a5738
</main>