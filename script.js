// Per l'esercizio di oggi, chiedete all'utente un cognome e aggiungetelo alla lista, poi ordinate, utilizzate una funzionalità di js per l'ordinamento.
// Dopo aver ordinato, l'esercizio chiede l'indice del nuovo elemento inserito, per farlo utilizzate il metodo della ricerca dell'ultima esercitazione.
// prompt per l'utente che aggiunge il cognome

// array creata con lista cognomi
var listaCognomi = ["Tito","Cassati","De Rosa","Versace","Aiello"];

var cognomeUtente = prompt("Inserisci il tuo Cognome: ");

// push che mi aggiunge il cognomeUtente alla lista array
listaCognomi.push(cognomeUtente);


listaCognomi.sort();

console.log(listaCognomi);
