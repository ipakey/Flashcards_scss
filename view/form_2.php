<main class="main-entry">
    <h2 id="enterNumber">Choose your card set</h2>
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


</main>