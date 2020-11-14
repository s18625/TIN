function validateDrink() {
    console.log('dadasds');
    const nameInput = document.getElementById('Name');
    const costInput = document.getElementById('Cost');
    const descriptionInput = document.getElementById('Description');
    // let arrInput = [nameInput, costInput, descriptionInput];
    //////////////////////errors///////////////////////////////////
    const errorName = document.getElementById('errorName');
    const errorCost = document.getElementById('errorCost');
    const errorDescription = document.getElementById('errorDescription');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([nameInput, costInput, descriptionInput], [errorName, errorCost, errorDescription], errorsSummary);

    let valid = true;
    ////////////DrinkName///////////////
    if (!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nameInput.value, 2, 60)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    ////////////////COST///////////////////////
    if (!checkRequired(costInput.value)) {
        valid = false;
        costInput.classList.add("error-input");
        errorCost.innerText = "Pole jest wymagane";
    }


    //////////DESCRIPTION/////////////////////////////////
    if (!checkRequired(descriptionInput.value)) {
        valid = false;
        descriptionInput.classList.add("error-input");
        errorDescription.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nameInput.value, 2, 60)) {
        valid = false;
        descriptionInput.classList.add("error-input");
        errorDescription.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }


    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }

    return valid;
}