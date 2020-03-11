let _player1 = prompt("wpisz opcję");
let _player2 = prompt("wpisz opcję");

rockPaperScissors(_player1,_player2)

function rockPaperScissors(_player1, _player2){

// papier = papier;
// papier > kamien;
// papier < nozyczki;
// kamien > nozyczki;
// nozyczki = nozyczki;
// kamien = kamien;




if (_player1 === _player2){

    console.log("remis");
}



if (_player1==="papier" && _player2==="kamien"){

    console.log("brawo player1, wygrales");

}


else if (_player2 === "papier" && _player1 === "kamien") {

    console.log("brawo player2, wygrales");

}









if (_player1==="nozyczki" && _player2==="papier"){

    console.log("brawo player1, wygrales");

    
}


else if (_player2 === "nozyczki" && _player1 === "papier"){

console.log("brawo player2, wygrales");

}






if (_player1==="kamien" && _player2==="nozyczki"){

    console.log("brawo player1, wygrales");

}

 else if (_player2 === "kamien" && _player1 === "nozyczki") {

        console.log("brawo player2 , wygrales");
 }


else (

    console.log("złe dane")

)

}