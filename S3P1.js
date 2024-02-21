/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

let crazySum = function (num1, num2) {
  return num1 === num2 ? (num1 + num2) * 3 : num1 + num2;
};
console.log(crazySum(2, 2));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

let boundary = function (n) {
  return (n > 20 && n <= 100) || n === 400 ? true : false;
};

console.log(boundary(400));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

let reverseString = function (string) {
  return string.split("").reverse().join("");
};
console.log(reverseString("EPICODE"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(stringa) {
  return stringa.charAt(0).toUpperCase() + stringa.slice(1);
}
console.log(upperFirst("simone"));

function upperFirstMaConLaFrase(stringa) {
  let words = stringa.split(" ");
  let finalString = [];
  for (let i = 0; i < words.length; i++) {
    //ciclare la parola
    let firstChar = words[i].charAt(0);
    let upperCaseChar = firstChar.toUpperCase();
    let cuttedString = words[i].slice(1);
    let finalWord = upperCaseChar + cuttedString;
    finalString.push(finalWord);
  }
  console.log(finalString.join(" "));
}
upperFirstMaConLaFrase("ciao mondo");

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
let giveMeRandom = function (n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 11));
  }
  return arr;
};
console.log(giveMeRandom(7));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let area = function (l1, l2) {
  return l1 * l2;
};
let risultato = area(4, 5);
console.log(risultato);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(numero) {
  let differenzaAssoluta = Math.abs(numero - 19);
  if (differenzaAssoluta > 19) {
    return differenzaAssoluta * 3;
  } else {
    return differenzaAssoluta;
  }
}
console.log(crazyDiff(3));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(stringa) {
  if (stringa.startsWith("code")) {
    return stringa;
  } else {
    return "code " + stringa;
  }
}
console.log(codify("coders"));
console.log(codify("casetta"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(number) {
  if (number >= 0 && (number % 3 === 0 || number % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(6));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

let cutString = function (stringa) {
  return stringa.slice(1, -1);
};
console.log(cutString("EPICODE"));
