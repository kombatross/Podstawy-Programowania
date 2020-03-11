let liczby = [4,4,1,2,5,40];
let dodawanie = 0;
let srednia = 0;    

for (i = 0; i < liczby.length   ; i++){

    dodawanie = dodawanie + liczby[i];

}

srednia = dodawanie/liczby.length ;
srednia = Math.floor(srednia * 1000) / 1000;

console.log(srednia);