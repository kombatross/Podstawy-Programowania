let rent = prompt("na ile jedziesz");
let koszt;

console.log(rentCost(rent))

rentCost()

function rentCost(dni){

    let numberOfWeeks = Math.floor(dni / 7);   

    if (rent<1){

        koszt = dni*200;
    }

    else if (rent<=3){
        koszt = dni*180;
    }
    else if (rent<=7){
        koszt = dni*160;
    }
    else if (rent<=8){
        koszt = dni*150;
    }

    if (dni>=7){

        koszt = koszt - (50*numberOfWeeks);

    }

    return koszt;
}