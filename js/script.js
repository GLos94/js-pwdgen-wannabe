// chiedere il nome e salvarlo in una var

var nome = prompt("inserisci il tuo nome:");

// chiedere all'utente il suo cognome

var cognome = prompt("inserisci il tuo cognome");

// chiedere all'utente il suo colore preferito

var colorePreferito = prompt("Qual è il tuo colore preferito?");

// calcolo la password insicurissima

var password = nome + cognome + colorePreferito;

//  output per l'utente
document.getElementById('title').innerHTML = "La tua insicurissima password è " + password + 19;
