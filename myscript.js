'use strict';

let play = document.getElementById('playButton');
let clickedOnce = false;
let grigliaDiv = document.querySelector('.griglia');
let reset = document.getElementById('resetButton');

reset.addEventListener('click', function resetGriglia() {
    while (grigliaDiv.firstChild) {
        grigliaDiv.removeChild(grigliaDiv.firstChild);
    }
    clickedOnce = false;
});

play.addEventListener('click', function generaCelle() {
    if (!clickedOnce) {
        for (let i = 0; i < 100; i++) {
            const cella = document.createElement('div');
            cella.classList.add('cella');
            cella.textContent = i + 1;
            grigliaDiv.appendChild(cella);
        }

        let celle = document.querySelectorAll('.cella');

        let bombe = 16;
        distribuisciBombeCasuali(celle, bombe);

        clickedOnce = true;

        let celleEffetto = document.querySelectorAll('.cella, .cellarossa');

        celleEffetto.forEach(cella => {
            cella.addEventListener('click', function () {
                if (cella.classList.contains('cella')) {
                    cella.style.backgroundColor = "#007fff";
                } else if (cella.classList.contains('cellarossa')) {
                    cella.style.backgroundColor = "#FF0000";
                    grigliaDiv.innerHTML = "<h2>Hai perso!</h2>";
                    clickedOnce = false;
                }
            });
        });

    }
});

function distribuisciBombeCasuali(celle, numBombe) {
    const celleArray = Array.from(celle);
    const bombePosizionate = new Set();

    while (bombePosizionate.size < numBombe) {
        const randomIndex = Math.floor(Math.random() * celleArray.length);
        if (!bombePosizionate.has(randomIndex)) {
            celleArray[randomIndex].classList.remove('cella');
            celleArray[randomIndex].classList.add('cellarossa');
            bombePosizionate.add(randomIndex);
        }
    }
}


