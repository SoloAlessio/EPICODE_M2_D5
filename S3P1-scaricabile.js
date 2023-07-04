/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

console.log("\n================================");
function somma(a, b) {
    if(a === b){
        return ( a + b ) * 3;
    } else {
        return a + b;
    }
}
console.log("Esercizio 1: ");
console.log("La somma dei due numeri è: ", somma(2, 2));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

console.log("\n================================");
function boundary(n) {
    return n >= 20 && n <= 100 || n == 400;
}

console.log("Esercizio 2: ");
console.log(boundary(80));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

console.log("\n================================");
function reverseString(s) {
    return s.split("").reverse().join("");
}

console.log("Esercizio 3: ");
console.log("EPICODE =>", reverseString("EPICODE"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

console.log("\n================================");
function upperFirst(s) {

    let stringa = s;
    stringa = stringa.split(" ");

    for (let i = 0; i < stringa.length; i++) {
        stringa[i] = stringa[i].charAt(0).toUpperCase() + stringa[i].slice(1);
    }

    stringa = stringa.join(" ");

    return stringa;
}

console.log("Esercizio 4: ");
console.log(upperFirst("ciao mi chiamo alessio"));


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

console.log("\n================================");
function giveMeRandom(n) {
    let Array = [];
    for (let i = 0; i < n; i++) {
        Array.push(Math.floor(Math.random() * 10));
    }
    return Array.join(" ");
}

console.log("Esercizio 5: ");
console.log(giveMeRandom(15));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

console.log("\n================================");
function area(l1,l2){
    return l1*l2;
}
console.log("Esercizio EXTRA 1: ");
console.log("Area del rettangolo:", area(11,12));


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

console.log("\n================================");

function crazyDiff(n) {
    let differenza = n - 19;

    if(differenza >= 19){
        differenza = differenza * 3;
    }

    return differenza;
}

console.log("Esercizio EXTRA 2: ");
console.log("Differenza:", crazyDiff(40));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

console.log("\n================================");

function codify(s){
    let frase = s;

    frase = frase.split(" ")
    if(frase[0] == "Code"){
        return frase.join(" ");
    }else{
        frase = frase.join(" ");
        frase = "Code " + frase;
        return frase;
    }
}

console.log("Esercizio EXTRA 3: ");
console.log(codify("Ciao mi chiamo alessio"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

console.log("\n================================");

function check3and7(n) {
    
    return n % 3 == 0 || n % 7 == 0;
}

console.log("Esercizio EXTRA 4: ");
console.log(check3and7(21));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
console.log("\n================================");

function cutString(s){
    let stringa = s
    stringa = stringa.slice(1,stringa.length-1);

    return stringa;
}

console.log("Esercizio EXTRA 5: ");
console.log(cutString("Andromeda"));
