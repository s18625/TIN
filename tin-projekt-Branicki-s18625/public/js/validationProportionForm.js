function validateProportion() {
    let errorResponse = '';
    const drinkInput = document.getElementById('drink_id');
    const ingreadientInput = document.getElementById('ingre_id');
    const gramInput = document.getElementById('grammage');
    const costByGrammageInput = document.getElementById('costByGrammage');
    // let arrInput = [nameInput, costInput, descriptionInput];
    //////////////////////errors///////////////////////////////////
    const errorDrink = document.getElementById('errorDrink');
    const errorIngreadient = document.getElementById('errorIngreadient');
    const errorGram = document.getElementById('errorGram');
    const errorCostByGrammage = document.getElementById('errorCostByGrammage');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([drinkInput, ingreadientInput, gramInput], [errorDrink, errorIngreadient, errorGram], errorsSummary);

    let valid = true;
    ////////////DrinkName///////////////
    if (!checkRequired(drinkInput.value)) {
        valid = false;
        errorResponse += "<br>" + `-pole "Drink" nie jest wypelnione`;
        drinkInput.classList.add("error-input");
        errorDrink.innerText = "Pole jest wymagane";
    }

    ////////////////ingeradient///////////////////////
    if (!checkRequired(ingreadientInput.value)) {
        valid = false;
        errorResponse += "<br>" + `-pole "Skladnik" nie jest wypelnione`;
        ingreadientInput.classList.add("error-input");
        errorIngreadient.innerText = "Pole jest wymagane";
    }


    //////////gramtatura/////////////////////////////////
    if (!checkRequired(gramInput.value)) {
        valid = false;
        errorResponse += "<br>" + `-pole "Gramatura" nie jest wypelnione`;
        gramInput.classList.add("error-input");
        errorGram.innerText = "Pole jest wymagane";
    } else if (!checkNumberRange(gramInput.value, 1, 1000)) {
        valid = false;
        errorResponse += "<br>" + `-pole "Gramatura" zawiera nieprawidlowa wartosc`;
        gramInput.classList.add("error-input");
        errorGram.innerText = "Wartosc pola musi byc z zakresu od 1 do 1000";
    }

    if (!checkRequired(costByGrammageInput.value)) {
        valid = false;
        errorResponse += "<br>" + `-pole "Koszt gramatury" nie jest wypelnione`;
        costByGrammageInput.classList.add("error-input");
        errorCostByGrammage.innerText = "Pole jest wymagane";
    } else if (!checkNumberRange(costByGrammageInput.value, 1, 1000)) {
        valid = false;
        errorResponse += "<br>" + `-pole "Koszt gramatury" zawiera nieprawidlowa wartosc`;
        costByGrammageInput.classList.add("error-input");
        errorCostByGrammage.innerText = "Wartosc pola musi byc z zakresu od 1 do 1000";
    }


    if (!valid) {
        errorsSummary.innerHTML = `Formularz zawiera błędy:` + errorResponse;
    } else {
        alert('Proporcja dodana do bazy danych');
    }

    return valid;
}