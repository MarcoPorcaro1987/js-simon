//Funzioni

function randomizer(min, max){
    return Math.floor(Math.random() * (max - min  + 1) + min);
}

// Un alert() espone 5 numeri generati casualmente.

var randomNumbers = [];
var cpuNumbers = 0;

for(i=1; i < 6; i++){
    cpuNumbers = randomizer(0, 100);
    if(!randomNumbers.includes(cpuNumbers)){
        randomNumbers.push(cpuNumbers);
    }   
}


alert("Hai 30 secondi per memorizzare questi numeri: " + randomNumbers);

// Da li parte un timer di 30 secondi.

var userNumbers = [];
var sameNumbers = [];
var num = 0;

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

setTimeout(counter, 30000);

    function counter(){
        for (var i = 0; i < 5; i++) {
            num = userNumbers.push(parseInt(prompt("Inserisci i numeri tra 1 e 100 che ricordi: ")));
        }
        // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        for (var i = 0; i < userNumbers.length; i++){
            if(randomNumbers.includes(userNumbers[i]) && !sameNumbers.includes(userNumbers[i])){
                    sameNumbers.push(userNumbers[i]);   
                }
            }
        if(sameNumbers.length > 0) {
            alert("Il tuo punteggio è " + sameNumbers.length + " I numeri indovinati sono: " + sameNumbers );
           } else {
               alert("Ritenta, sarai più fortunato!");
           } 
    }

