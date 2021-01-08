function validateDrink() {
    let errorResponse = '';
    const nameInput = document.getElementById('name');
    const costInput = document.getElementById('prize');
    const descriptionInput = document.getElementById('description');
    const serve = document.getElementById('serve');
    // let arrInput = [nameInput, costInput, descriptionInput];
    //////////////////////errors///////////////////////////////////
    const errorName = document.getElementById('errorName');
    const errorCost = document.getElementById('errorCost');
    const errorDescription = document.getElementById('errorDescription');
    const errorServe = document.getElementById('errorServe');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([nameInput, costInput, descriptionInput,serve], [errorName, errorCost, errorDescription,errorServe], errorsSummary);

    let valid = true;
    ////////////DrinkName///////////////
    if (!checkRequired(nameInput.value)) {
        valid = false;
        errorResponse += "<br>" + `-pole "Nazwa" nie jest wypelnione`;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nameInput.value, 2, 60)) {
        valid = false;
        errorResponse += "<br>" + `-pole "Nazwa" posida nieprawidlowa ilosc znakow`;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    ////////////////COST///////////////////////
    if (!checkRequired(costInput.value)) {
        valid = false;
        errorResponse += "<br>" + `-pole "Cena" nie jest wypelnione`;
        costInput.classList.add("error-input");
        errorCost.innerText = "Pole jest wymagane";
    } else if (!checkNumberRange(costInput.value, 1, 1000)) {
        valid = false;
        errorResponse += "<br>" + `-pole "Cena" zawiera nieprawidlowa wartosc`;
        costInput.classList.add("error-input");
        errorCost.innerText = "Wartosc pola musi byc z zakresu od 1 do 1000";
    }


    //////////DESCRIPTION/////////////////////////////////
    if (!checkRequired(descriptionInput.value)) {
        valid = false;
        errorResponse += "<br>" + `-pole "Opis" nie jest wypelnione`;
        descriptionInput.classList.add("error-input");
        errorDescription.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(descriptionInput.value, 2, 160)) {
        valid = false;
        errorResponse += "<br>" + `-pole "Opis" posida nieprawidlowa ilosc znakow`;
        descriptionInput.classList.add("error-input");
        errorDescription.innerText = "Pole powinno zawierać od 2 do 160 znaków";
    }

    if (!checkTextLengthRange(serve.value, 0, 160)) {
        valid = false;
        errorResponse += "<br>" + `-pole "porpozycja podania" posida nieprawidlowa ilosc znakow`;
        serve.classList.add("error-input");
        errorServe.innerText = "Pole powinno zawierać maskymlanie 160 znakow";
    }


    if (!valid) {
        errorsSummary.innerHTML = `Formularz zawiera błędy:` + errorResponse;
    } else {
        alert('drink dodany do bazy danych');
    }

    return valid;
}