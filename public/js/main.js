// exercice 1
//1

// let champ = prompt('ecris qlqchose');
// champ = champ.replace(/\s+/, ''); // on supprime tt les espaces avec le replace
// while (champ.length == 0) {
//     champ = prompt('tu dois ecrire qqlch'); 
//     champ = champ.replace(/\s+/, '');
// }

// 2
// let nb = parseInt(prompt("choisis un chiffre"));

// switch (isNaN(nb)) {
//     case true:
//         console.log(`erreur, ceci n'est pas un nombre`);
//         break;
//     case false:
//         while (nb < 10) {
//     nb = parseInt(prompt("choisis un autre chiffre"));
//     }
// }

// exercice 2
// 2.1 / boucle qui s'increment de 1 et qui affiche uniquement les impair jusqua 11
let compt = 0;
while (compt <= 11) {
    if (compt % 2 == 1) {
        console.log(compt);
    }
    compt++
}

// 2.2
// let prenom = prompt(`quel est ton prenom`);
// let prenomLenght = prenom.length;
// let compt1 = 0;

// while (compt1 < prenomLenght) {
//     console.log(prenom);
//     compt1++
// }

// 2.3
// while (compt1 < prenomLenght) {
//     console.log(prenom.charAt(compt1));
//     compt1++
// }


// exercice 3
//3.1

// let prenom = prompt(`quel est ton prenom`);
// let prenomLenght = prenom.length;
// let compt1 = 0;

// while (compt1 < prenomLenght) {
//     if (compt1 % 2 == 1) {
//         console.log(prenom.charAt(compt1) .toUpperCase());
//     } else {
//         console.log(prenom.charAt(compt1) .toLowerCase());
//     }
//     compt1++
// }

// 3.2
// let calcul = prompt('quel est ton calcul');
// let condition = true ;

// while (condition == true ) {
//     console.log(Math.ceil(eval(calcul)));
    
//     let stop = prompt(`veux tu t'arreter?`);
//     if (stop == 'oui') {
//         condition = false;
//         console.log("merci");
//     } else {
//         calcul = prompt("quel est ton calcul");
//     }
// }

// 3.3
let prenom = prompt('ton prenom?');

while (prenom.length < 5 ) {
    prenom = prompt('quel est ton prenom?');
}

if (prenom.length >= 5) {
    console.log(prenom.toUpperCase());
}