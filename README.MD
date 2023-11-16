# Griglia Campo Minato



##  Descrizione 

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

##  Descrizione 2

Il gioco
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. :bomba:
:esclamazione:Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.



## Svolgimento 

 Dopo aver predisposto la struttura di base utilizzando **HTML e CSS**, si procede con l'implementazione attraverso **JavaScript**. Quest'ultimo tramite un **ciclo** verrà impiegato per generare una tabella composta da 100 caselle. Quando l'utente clicca su una di queste caselle, grazi a **addEventListener'click'** la loro tonalità cambierà assumendo un colore azzurro.


 ## Svolgimento 2

 Per creare un gioco in cui, una volta persa la partita, il valore di una variabile specifica (ad esempio gameOver) cambia in true o false, e compare un messaggio sovrapposto in rosso che dice “Game Over” e mostra il punteggio basato sul numero di click, potresti procedere nel seguente modo:

**Stabilisci le condizioni di fine del gioco:** Devi definire quali sono le condizioni che determinano la fine del gioco. Queste potrebbero essere, ad esempio, il raggiungimento di un certo punteggio, l’esaurimento del tempo, ecc.

**Cambia il valore della variabile gameOver:** Una volta che le condizioni di fine del gioco sono soddisfatte, cambia il valore della variabile gameOver in true o false, a seconda di come hai impostato la logica del tuo gioco.

**Mostra un messaggio di “Game Over”:** Quando il gioco finisce, mostra un messaggio di “Game Over”. Puoi farlo creando un elemento HTML con un alto valore di z-index per farlo apparire sopra gli altri elementi. Puoi impostare il colore del testo in rosso utilizzando CSS.

**Mostra il punteggio finale:** Infine, mostra il punteggio finale del giocatore. Se il punteggio è basato sul numero di click, dovresti avere una variabile che tiene traccia di questo numero durante il gioco. Quando il gioco finisce, mostra il valore di questa variabile.