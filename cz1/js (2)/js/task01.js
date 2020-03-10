let x1 = prompt("podaj");
let y1 = prompt("druga");
let fixx = parseInt(x1);
let fixy = parseInt(y1);
let wynik = fixx;

// if(fixx>fixy){

if (fixx>fixy){
    alert("debil")
    location.reload();  
}

else{
for (i=fixx; i<fixy; i++){

    wynik = wynik + (i+1);

}
console.log(wynik);
}