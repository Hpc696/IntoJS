//I commenti in master NOOOO!!!
window.console.log("Ho fatto il c+++o di caffè"); //oggetto window...che con log stampa su console il mex
document.write("Ho fatto il caffè" + "<br>"); //document "inteso come index" che con write fa stampare il mex sulla pagina
var Tazzina= 0; //vecchio tipo--non usare--dichiarato variabile con il nome 'Tazzina' con valore = 0 (meglio sempre inizializzare la variabile con un qualsiasi valore)
let NewTazzina=0; //stesso funzionamento di var ma da usare questo modo o il seguente:
const caffè=3; //deve essere per forza inizializzata!
/*altro modo di commentare*/
let lattuga=0;
let cipolla=0.969;
let banane='Gialle';
let zucchero=true;
const br= "<br>"; //per andare a capo
if (cipolla>2) { //comando if/else
    zucchero=false;
} else {
    cipolla++;
} document.write(cipolla + br); //stampa cipolla dopo averla incrementata di 1 con if/else
/*pausa*/
for (/*let*/i=0; i<100; i++){
    lattuga++;
} //ciclo for che incrementa 100 volte lattuga
while (lattuga < 101){
    cipolla++;
    lattuga++;
} //ciclo while ('fai quella roba fintanto che' in questo caso lattuga < 101 quindi incrementerà una volta cipolla e lattuga)
document.write(cipolla + br); 
//pranzo
let melanzana= prompt("Inserisci valore di melanzana"); //prompt chiede a utente di inserire valore all'utente
document.write("melanzana vale", "\n" + melanzana + br); //stampa quello che utente ha inserito---"\n" crea spazio
let pomodoro= 0.1; let peperone= 0.2;
document.write(pomodoro +/* - | * | / | ** potenza| % modulo resto*/peperone); //operatori 