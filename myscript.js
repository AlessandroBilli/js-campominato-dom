'use strict'

let play = document.getElementById('playButton');
let clickedOnce = false;
let grigliaDiv = document.querySelector('.griglia'); 

play.addEventListener('click', function generaCelle() {
    if (!clickedOnce) {
        for (let i = 0; i < 100; i++) {
            const cella = document.createElement('div');
            cella.classList.add('cella');
            cella.textContent = i + 1;
            grigliaDiv.appendChild(cella);
        }
        clickedOnce = true;

        let celleEffetto = document.querySelectorAll('.cella');

        celleEffetto.forEach(cella => {
          cella.addEventListener('click', function() {
            console.log(cella.textContent);

            if ('click') {
                cella.style.backgroundColor= "#007fff";
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








  

