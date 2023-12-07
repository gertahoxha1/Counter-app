let numri1 = document.querySelector(".numri");
let plus10 = document.getElementById("plus");
let minus10 = document.getElementById("minus");
let dhjete1 = document.getElementById("dhjete");
let reset1 = document.getElementById("reset");
let mdhjete10 = document.getElementById("mdhjete");

let count = 0;

numri.textContent= count;

function up(){
    count= count + 1;
    numri1.textContent = count;
}

function down(){
    count= count - 1 ;
    numri1.textContent = count;
}

function ten(){
    count = count + 10;
    numri1.textContent = count; 
}

function mten(){
    count = count - 10;
    numri1.textContent = count; 
}
function countreset(){
    count = 0;
    numri1.textContent = count; 
}

plus10.addEventListener("click", up);
minus10.addEventListener("click", down);
dhjete1.addEventListener("click", ten);
reset1.addEventListener("click", countreset);
mdhjete10.addEventListener("click", mten);
