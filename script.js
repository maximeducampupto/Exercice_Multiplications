var chiffre_1,
    chiffre_2,
    reponse,
    player_input,
    start_button = document.getElementById('start_button'),
    send_button = document.getElementById('envoyer'),
    chiffres_wrapper = document.getElementById('chiffres_wrapper'),
    chiffre_1_cont = document.getElementById('chiffre_1'),
    chiffre_2_cont = document.getElementById('chiffre_2'),
    input_field = document.getElementById('input-field');

function log(what) {
    console.log(what);
}


function throwAlert(message, couleur) {
    var p = document.createElement('p');
    p.classList.add('alert');
    p.textContent = message;
    p.style.color = couleur;

    input_field.appendChild(p);
}

function removePreviousAlerts() {
    var alerts = document.getElementsByClassName('alert');

    for (var i = 0; i < alerts.length; i++) {
        alerts[i].remove();
    }
}

function playStartAnimations() {
    chiffres_wrapper.style.visibility = 'visible';
    input_field.style.display = 'flex';
}

function handlePlayerInput(e) {
    removePreviousAlerts();
    player_input = document.getElementById('player_input').value;

    if (isNaN(player_input) || player_input == '') {
        throwAlert('Veuillez entrer un nombre entre 1 et 100', "rgba(255, 0, 0, 0.56)");
        e.preventDefault();
        return;
    }

    if (player_input < reponse) {
        throwAlert("C'est plus!", "rgba(0, 128, 0, 0.61)");
    } else if (player_input > reponse) {
        throwAlert("C'est moins!", "rgba(0, 128, 0, 0.61)");
    } else {
        throwAlert("Félicitations!", "rgba(0, 128, 0, 0.61)");
    }
}

function startGame() {
    playStartAnimations();

    chiffre_1 = Math.floor(Math.random() * 10) +1;
    chiffre_2 = Math.floor(Math.random() * 10) +1;

    reponse = chiffre_1 * chiffre_2;

    chiffre_1_cont.innerHTML = chiffre_1;
    chiffre_2_cont.innerHTML = chiffre_2;
}

start_button.addEventListener('click', function() {
    startGame();
});

send_button.addEventListener('click', function(e) {
    handlePlayerInput(e);
});