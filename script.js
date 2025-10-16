

let x = document.getElementById("suwak_d");
let y = document.getElementById("suwak_w");

function zmiana() {



  //let a = parseInt(x.value);
 // let b = parseInt(y.value);



 let a = x.value; 
let b = y.value;


  document.getElementById("kw").style.width = a + "px";
  document.getElementById("kw").style.height = b + "px";
}

document.getElementById("suwak_d").addEventListener("input", zmiana);
document.getElementById("suwak_w").addEventListener("input", zmiana);




/*

let x = document.getElementById("suwak_d");
let y = document.getElementById("suwak_w");

function zmiana() {

let a = x.value; 
let b = y.value; 

document.getElementById("kw").style.width = `${a}px`     /`` - backtick - pozwala na wprowadzanie zmiennych do ciągów znaków - stringów
document.getElementById("kw").style.height = `${b}px`

}


document.getElementById("suwak_d").addEventListener("input", zmiana);
document.getElementById("suwak_w").addEventListener("input", zmiana);

*/