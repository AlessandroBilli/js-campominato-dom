'use strict'

let play = document.getElementById('playButton');
let clickedOnce = false;
let grigliaDiv = document.querySelector('.griglia');
let reset = document.getElementById('resetButton');


reset.addEventListener('click', reset);
play.addEventListener('click', function generaCelle() {
    if (!clickedOnce) {
        for (let i = 0; i < 100; i++) {
            const cella = document.createElement('div');
            cella.classList.add('cella');
            cella.textContent = i + 1;
            grigliaDiv.appendChild(cella);
        }

        let celle = document.querySelectorAll('.cella');

        for (let i = 0; i < 16; i++) {
            celle[i].classList.remove('cella');
            celle[i].classList.add('cellarossa');
        }

        clickedOnce = true;

        let celleEffetto = document.querySelectorAll('.cella, .cellarossa');

        celleEffetto.forEach(cella => {
            cella.addEventListener('click', function () {
                console.log(cella.textContent);

                if (cella.classList.contains('cella')) {
                    cella.style.backgroundColor = "#007fff";
                } else if (cella.classList.contains('cellarossa')) {
                    cella.style.backgroundColor = "#FF0000";
                }
            });
        });

    } else {
        while (grigliaDiv.firstChild) {
            grigliaDiv.removeChild(grigliaDiv.firstChild);
        }
        clickedOnce = false;
    }
});









