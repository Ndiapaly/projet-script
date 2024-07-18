
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

var maChaine = 'Gomycode';
var chaineInversee = inverserChaine(maChaine);
console.log(chaineInversee); // Affiche "edocymoG"

var mescaractère = "Hello, world!";
var nombreCaracteres = mescaractère.length;
console.log(`Nombre de caractères : ${nombreCaracteres}`);

function majusculesPremieresLettres(phrase) {
    return phrase.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Exemple d'utilisation
var phraseOriginale = "c'est un exemple de phrase";
var phraseMajuscules = majusculesPremieresLettres(phraseOriginale);
console.log(`Phrase originale : ${phraseOriginale}`);
console.log(`Phrase avec majuscules : ${phraseMajuscules}`);


function trouverMaxMin(tableau) {
    let maximum = Math.max(...tableau);
    let minimum = Math.min(...tableau);
    return { maximum, minimum };
}

let monTableau = [10, 5, 8, 3, 12];
let { maximum, minimum } = trouverMaxMin(monTableau);

console.log(`Valeur maximale : ${maximum}`);
console.log(`Valeur minimale : ${minimum}`);


function calculerSomme(tableau) {
    let somme = 0;
    for (const element of tableau) {
        somme += element;
    }
    return somme;
}

let monTable = [10, 5, 8, 3, 12];
let resultat = calculerSomme(monTable);
console.log(`La somme des éléments du tableau est : ${resultat}`);


function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}

// Exemple d'utilisation

let monTablau = [12, 5, 8, 130, 44];
let elementsFiltres = filtrerTableau(monTablau, (element) => element >= 10);

console.log("Éléments filtrés :", elementsFiltres);

 
function factorielle(nombre) {
    if (nombre === 0 || nombre === 1) {
        return 1;
    }
    const resultat = 1;
    for (const i = 2; i <= nombre; i++) {
        resultat *= i;
    }
    return resultat;
}


function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (const i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}


function genererFibonacci(nbTermes) {
    const fibonacci = [0, 1];
    for (const i = 2; i < nbTermes; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

