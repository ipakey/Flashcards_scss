<main class="main-entry">
    <h2 id="enterNumber">Choose your card set</h2>
    <form class="main-entry__form" action="<?php htmlentities($_SERVER['PHP_SELF'])  ?>" method="GET">
    
        <select 
            class="main-entry__input"
            id="cards"
            name="set"
            placeholder="Choose your cards"
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


</main>