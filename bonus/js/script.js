
// RICHIESTA 1
// chiedere il nome e salvarlo in una var

var nome = prompt("inserisci il tuo nome:");

// RICHIESTA 2
// chiedere all'utente il suo cognome

var cognome = prompt("inserisci il tuo cognome");

// RICHIESTA 3
// chiedere all'utente il suo colore preferito

var colorePreferito = prompt("Qual è il tuo colore preferito?");


// RISULTATO
// calcolo la password insicurissima

var password = nome + cognome + colorePreferito;


// OUTPUT
//  output per l'utente
document.getElementById('title').innerHTML = "La tua insicurissima password è " + password + 19;
