var generateButton = document.getElementById('generate-btn');

generateButton.addEventListener('click', function(){

    //  salva nome passeggero
    var getUserName = document.getElementById('user-name-input');
    var userName = getUserName.value;

    // salva km utente 
    var getKm = document.getElementById('km-input');

    var kmNumber = parseInt(getKm.value);

    //  offerta 
    var getUserAge = document.getElementById('age-input');

    var userAge = getUserAge.value;

    var userOffer = 'Prezzo standard';

    if(userAge == 'Minorenne'){
        userOffer = 'Sconto Minorenne'
    } else if( userAge == 'Over 65'){
        userOffer = 'Sconto Over'
    }

    // prezzo finale 
    var pricePerKm = 0.21;
    var finalPrice = kmNumber * pricePerKm;

    if (userAge == 'Minorenne'){
        finalPrice = finalPrice - (finalPrice * 0.2);
    } else if (userAge == 'Over 65'){
        finalPrice = finalPrice - (finalPrice * 0.4);
    }
    // stampa 
    document.getElementById('result-username').innerHTML = userName;

    document.getElementById('result-offerta').innerHTML = userOffer;

    document.getElementById('result-codice').innerHTML = getRndInteger(90000, 100000);

    document.getElementById('result-carrozza').innerHTML = getRndInteger(1, 10);

    document.getElementById('result-prezzo').innerHTML = finalPrice + ' €';
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }