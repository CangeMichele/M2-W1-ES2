/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino. 
*/

/* SCRIVI QUI LA TUA RISPOSTA 
I principali datatype usati in JavaScript sono 6:
 
- NUMERICO : rappresentano un numnero, di qualsiasi tipo con un margine di valore molto ampio ! 
             può anche avere valore + e - infinito e NaN (che indica che il valore non è  un numero).

- STRING : è un insieme di caratteri, può essere compreso fra le virgolette doppie ("ciao") o singole ('ciao'), 
           non ha una lunghezza fissa e può essere lunga zero (da vuota).

- BOOLEAN : ha valore true o false, si utilizza per effettuare interrogazioni (ad esempio controlla se la variabile è vuota)
            o calcoli comparativi (ad esempio il valore è più grande di 50).
            
-UNDEFINED : quando si ha  una variabile a cui non è mai dato un valore o una tipologia.

- NULL : quando si svuota una variabile che precedentementa era definita e riemopita.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA

Un oggetto possiamo immaginarlo come una tabella dove ogni riga rappresenta le proprietà di ogni soggetto.
Ad esempio l'oggetto Alunni conterrà i dati di ogni singolo studente.
______________Alunni_________________
|NOME   |COGNOME     |ETA'    |CLASSE  
|Mario  |Rossi       |30      |1a
|Eva    |Bianchi     |29      |1b

*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12;
let b = 20;
let Tot = a + b;
console.log("Riusultato esercizio 3 : " + Tot);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log("x = " + x);
/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name ="Michele";
console.log("name = " + name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let Diff = 4 - x;
console.log("Diff = " + Diff);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";
console.log("I due nomi sono uguali? " + (name1===name2));
console.log("Ora sono uguali i due nomi? " +(name1.toLowerCase === name2.toLowerCase));