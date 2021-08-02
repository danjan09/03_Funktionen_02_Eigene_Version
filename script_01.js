
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung 
2. Auswahl Rechenart 
3. Fkt. Grundrechenarten 
4. Ausgabe in Konsole   : check!
*/




// Modul: Konsolenausgabe | Test:

// function output(outputStr){
//     console.log(outputStr);
// }


// Modul: Addition a + b | Test:

// output (addieren(2,1));
// output(addieren(2,10));
// function addieren(a,b){
//     const c = a + b;
//     return c;
// }

    // Oder Alternative:
    function addieren(a,b){
        return a + b;
}


// Modul: Subtrahieren a - b | Test:

// output(subtrahieren(2,1));
// output(subtrahieren(2,10));
function subtrahieren(a,b){
    return a - b;
}


// Modul: Multiplizieren a - b | Test:

// output(multiplizieren(2,1));
// output(multiplizieren(2,10));
function multiplizieren(a,b){
    return a * b;
}


// Modul: Dividieren a - b | Test:

// output(dividieren(2,1));
// output(dividieren(2,10));
// output(dividieren(2,0));

// function dividieren(a,b){

//     if (b == 0){
//         return "Fehler, durch Null nicht dividierbar."
//     } else {
//         return a / b;
//     }
// }

    /* kürzer, besser: */
function dividieren(a,b){
    if (b != 0){
        return a / b;    
    }
    return "Fehler, durch Null nicht dividierbar.";
    
}


// Modul: Konsolenausgabe Verbesserung | Test:

function output(outputStr){
    
    if (typeof outputStr === "number"  /*"outputStr ist eine Zahl"*/){
        outputStr = "Das Ergebnis ist: " + outputStr
    }

    // console.log(typeof outputStr);
    console.log(outputStr);
}



// Modul: Rechenart auswählen | Tests:

output(rechner(2,"+",1));
output(rechner(2,"-",1));
output(rechner(2,"*",1));
output(rechner(2,"/",1));
output(rechner(2,"asdf",1));

function rechner(a,op,b){           // a,b --> Operanden / Operatoren: +,- ..
    switch(op){
        case "+":
            return addieren(a,b);
        case "-":
            return subtrahieren(a,b);
        case "*":
            return multiplizieren(a,b);
        case "/":
            return dividieren(a,b);
            
        default:
            return "Irgendwas lief schief."
    }

}



// Modul Dateneingabe + -überprüfung | 


startApp();

function startApp(){
    output(rechner(getZahl1(),getOp(),getZahl2()));

}


function getZahl1(){
    return 10;
}

function getZahl2(){
    return 4;
}

function getOp(){
    return "-";
}



