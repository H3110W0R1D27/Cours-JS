// // Variable constante (qu'on ne peut pas changer)
// const prenom = "chloé";

// // Variable pas constante (qu'on peut changer)
// let unChiffre = 12;
// console.log(unChiffre);
// unChiffre = 13;
// console.log(unChiffre);

// let chaine = "Je suis une chaine de caractère.";

// // Concatener
// // avec "+" normalement (comme sur python)
// let nouvelleChaine = "Chaine précédente: " + chaine;

// console.log(nouvelleChaine);

// // Avec "`" (altgr 7x2) plus la variable entre ${variable}
// let nouvelleChaine2 = `La chaine précédente est : ${chaine}`;

// console.log(nouvelleChaine2);

// // Les variables
// // Les chaines de caracteres
// let string = "je suis une chaine de caractere";

// // les chiffres
// let number = 13;

// // Les boolean
// let boolean = true;

// // Les tableaux
// let array = ["je", "suis", 25, false];

// // les objets
// let objects = {
//   prenom: "Audrey",
//   age: 34,
//   ville: "Bordeaux",
// };

// // Les undefined (variable pas encore défini)
// let arbre;
// console.log(typeof arbre);

// // Les null
// let vide = null;
// console.log(typeof vide);

// // Pour connaitre le type d'une variable
// console.log(typeof array);

// // Les opérateurs
// console.log(3 + 8);

// // puissance
// console.log(4 ** 5);

// // Opérateurs d'affectation (++ ou -- pour ajouter ou enlever 1)
// let total = 4;
// console.log(total);
// total++;
// total++;
// console.log(total);

// // +=, -=, *=, /=, **= (comme sur python) pour faire des opérations à la variable plus rapidement
// total **= 5;
// console.log(total);

// let x = 4;
// let y = 3;

// y = --x;

// console.log(y);

// // Les comparateurs (3= pour testé le type et la valeur et juste 2= pour testé que la valeur) (! devant le comparateur pour vérifier l'inverse)
// // pour "ou" on met "||"
// // pour dire "et" on met "&&²"
// let a = 5;
// let b = 10;

// if (a < b) {
//   console.log("a est inférieur a b");
// } else {
//   console.log("a est supérieur a b");
// }

// if (a === b || a > 3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// if (a == b && a > 3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// if (a === b) {
//   console.log("a et b ont le meme type et sont égaux");
// } else if (a == b) {
//   console.log("a et b n'ont pas le meme type mais ont la meme valeur");
// } else {
//   console.log("a et b ne sont pas égaux");
// }

// // shift + alt + fleche du bas pour dupliquer la ligne
// // autre maniere de faire un "if, else" sur une seule ligne

// a == b ? console.log("Trues") : console.log("False");

// // Les fonctions

// // Ancienne version pour faire les fonctions
// function faireQuelqueChose() {
//   console.log("Je fais un truc !");
//   console.log("Trop cool ! ");
// }
// // Il faut appeler la fonction
// faireQuelqueChose();

// // fonction fléché
// const faireUneTache = (tache) => {
//   console.log("Je fais : " + tache);
// };

// faireUneTache("les courses");
// faireUneTache("le menage");

// // Le return
// function calc(x, y) {
//   return x + y;
// }
// calc(4, 9);

// // Fonction qui se joue toute seule
// (function joueSeule() {
//   console.log("Je me joue toute seule");
// })();

// // fonction fléché qui se joue toute seule
// (() => {
//   console.log("Je me joue toute seule aussi");
// })();

// function add2() {
//   let z = 4;
//   console.log(z);
//   return z + 2;
// }
// add2();

// // si une variable peut être utilisé par toutes les fonctions il faut l'appeler tout en haut du script

// coder une calculatrice en js
let total = 0;

function renitialiserTotal() {
  total = 0;
  return total;
}

function addition(x) {
  total += x;
  return total;
}

function soustraction(x) {
  total -= x;
  return total;
}

function multiplication(x) {
  if (total === 0) {
    return (total = x);
  } else {
    return (total *= x);
  }
}

function division(x) {
  if (total === 0) {
    return (total -= x);
  } else {
    return (total /= x);
  }
}
