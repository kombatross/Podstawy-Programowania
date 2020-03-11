let przedzial = new Array(10);

let text = {};
let result = false;

for (i = 0; i < 10; i++) {


   przedzial[i] = (Math.floor(Math.random() * 60) + 1);
   


}
console.log(przedzial);
// niezmod.



for (i=0;i<10;i++){

    if(przedzial[i] % 2 !== 0 ){

        przedzial[i]++
    }

}
// zmod.
console.log(przedzial)