let tablica = new Array(3);
let wynik = 0;





for (i=0;i<3;i++){

    tablica[i]= prompt("podaj " +(i+1) +"liczbe");
}



console.log(lala(tablica[0],tablica[1],tablica[2]));



function lala(tab, tab1, tab2)
{

tab=parseInt(tab);
tab1=parseInt(tab1);
tab2=parseInt(tab2);
wynik= tab+tab1+tab2;

return wynik;

}