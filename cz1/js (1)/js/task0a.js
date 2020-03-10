// task0a
function msa() {
var age = prompt("podaj swoj wiek ")

if (age = "18" || age > "18"){

    document.getElementById("wynik").innerHTML= "Jesteś pełnoletni, gratuluje";

}
else{
    document.getElementById("wynik").innerHTML="Nie jesteś pełnoletni"
}
}

// task01

// function lala() {

let grade = 4;
let ocena;
    
switch (grade){

        case 1:
        ocena="niedostateczny";
        break;
        
        case 2:
        ocena="dopuszczający";
        break;

        case 3:
        ocena="dostateczny";
        break;

        case 4:
        ocena="dobry";
        break;

        case 5:
        ocena="bardzo dobry";
        break;

        case 6:
        ocena="celujący"


        
    }
    console.log(ocena);


// }

// task02

let losowanie = Math.floor(Math.random() * (10 - 1 + 1) + 1);

let kk = prompt("wylosuj liczbe od 1-10");

console.log(losowanie);


if(kk == losowanie){
    console.log("ezwin")
}
else{

    console.log("hardlose")
}






