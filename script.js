let message = "";
let camputerchoice = "";

let victoire = 0;
let defaite = 0;
let egalite = 0;

let choixaleatoire = ['pierre', 'feuille', 'ciseau'];

function aleatoire() {
    let nombre = Math.floor(Math.random() * 3);
    camputerchoice = choixaleatoire[nombre];
    return camputerchoice;
}

function updateScore() {
    document.getElementById('victoire').innerText = victoire;
    document.getElementById('defaite').innerText = defaite;
    document.getElementById('egal').innerText = egalite;
}

function battle(userChoice) {
    camputerchoice = aleatoire();

    setTimeout(() => {
        if (userChoice == 'pierre' && camputerchoice == 'ciseau') {
            message = 'player win';
            victoire++;
        } else if (userChoice == 'pierre' && camputerchoice == 'pierre') {
            message = 'egalite';
            egalite++;
        } else if (userChoice == 'pierre' && camputerchoice == 'feuille') {
            message = 'ordi win';
            defaite++;
        } else if (userChoice == 'feuille' && camputerchoice == 'pierre') {
            message = 'player win';
            victoire++;
        } else if (userChoice == 'feuille' && camputerchoice == 'feuille') {
            message = 'egalite';
            egalite++;
        } else if (userChoice == 'feuille' && camputerchoice == 'ciseau') {
            message = 'ordi win';
            defaite++;
        } else if (userChoice == 'ciseau' && camputerchoice == 'pierre') {
            message = 'ordi win';
            defaite++;
        } else if (userChoice == 'ciseau' && camputerchoice == 'ciseau') {
            message = 'egalite';
            egalite++;
        } else if (userChoice == 'ciseau' && camputerchoice == 'feuille') {
            message = 'player win';
            victoire++;
        }

        console.log(message);
        document.getElementById('resultat').innerText = message;
        updateScore();

        setTimeout(() => {
            if (message == 'player win') {
                document.getElementById('gif1').innerHTML = `<img src="asset/img/A1M.gif" alt="gif">`;
                setTimeout(() => {
                    document.getElementById('gif1').innerHTML = "";
                }, 4000);
            } else {
                document.getElementById('gif1').innerHTML = "";
            }

            if (message == 'ordi win') {
                document.getElementById('gif2').innerHTML = `<img src="asset/img/finger.gif" alt="gif">`;
                setTimeout(() => {
                    document.getElementById('gif2').innerHTML = "";
                }, 3000);
            } else {
                document.getElementById('gif2').innerHTML = "";
            }
        }, 1000);
    }, 1000);
}
