'use strict';

document.addEventListener('DOMContentLoaded', function () {
    let play = document.getElementById('playButton');
    let clickedOnce = false;
    let grigliaDiv = document.querySelector('.griglia');
    let reset = document.getElementById('resetButton');
    let clickCount = 0;

    reset.addEventListener('click', function resetGriglia() {
        while (grigliaDiv.firstChild) {
            grigliaDiv.removeChild(grigliaDiv.firstChild);
        }
        clickedOnce = false;
        clickCount = 0;
    });

    play.addEventListener('click', function generaCelle() {
        let select = document.getElementById('livello');
        let tipoGriglia = select.value;

        if (!clickedOnce) {
            let numCelle = 0;
            let numRighe = 0;

            switch (tipoGriglia) {
                case 'facile':
                    numCelle = 100;
                    numRighe = 10;
                    break;
                case 'normale':
                    numCelle = 81;
                    numRighe = 9;
                    break;
                case 'difficile':
                    numCelle = 49;
                    numRighe = 7;
                    break;
                default:
                    numCelle = 100;
                    numRighe = 10;
                    break;
            }

            const bombe = 16;
            const cellePerRiga = numCelle / numRighe;

            for (let i = 0; i < numCelle; i++) {
                const cella = document.createElement('div');
                cella.classList.add('cella');
                cella.textContent = i + 1;
                grigliaDiv.appendChild(cella);
            }

            let celleBlu = document.querySelectorAll('.cella');
            let celleBluCliccate = 0;

            celleBlu.forEach(cella => {
                cella.addEventListener('click', function () {
                    if (!clickedOnce) return;

                    clickCount++;

                    if (cella.classList.contains('cella')) {
                        cella.style.backgroundColor = "#007fff";
                        celleBluCliccate++;

                        if (celleBluCliccate === celleBlu.length - bombe) {
                            grigliaDiv.innerHTML = "<h2>Hai vinto!</h2>";
                            clickedOnce = false;
                        }
                    } else if (cella.classList.contains('cellarossa')) {
                        cella.style.backgroundColor = "#FF0000";
                        grigliaDiv.innerHTML = "<h2>Hai perso!-</h2>";
                        grigliaDiv.insertAdjacentHTML('beforeend', `<h2>Clic totali: ${clickCount}</h2>`);
                        clickedOnce = false;
                    }
                });
            });

            distribuisciBombeCasuali(celleBlu, bombe);

            clickedOnce = true;
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
});
