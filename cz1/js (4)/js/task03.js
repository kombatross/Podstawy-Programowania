let amount = prompt("kwota do zapłaty");
let raiting = prompt("ocena słowna");

calculateTip(amount, raiting)



function calculateTip(amount, raiting){


    if (raiting==="Bardzo dobra obsługa"){

console.log("masz tutaj 25% napiweczku kolego/koleżanko");

}
   else if (raiting === "Dobra obsługa") {

        console.log("masz tutaj 20% tylko się popraw");

    }
   else if (raiting === "Średnia obsługa") {

        console.log("a masz już te 15% tylko nie przewal na głupoty");

    }
    else if (raiting === "Zła obsługa") {

        console.log("masz tutaj 30% napiw... aaa nie dla psa, dla pana to!!");

    }
    else if (raiting !== "Bardzo dobra obsługa" || raiting !== "Dobra obsługa" || raiting !== "Średnia obsługa" || raiting !== "Zła obsługa") {

        console.log("piszesz jak kura pazurem i się rozczytać nie moge");
        location.reload();

    }

}