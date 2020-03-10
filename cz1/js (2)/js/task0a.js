// task0a

// let x = prompt("wpisz liczbe");
// let text = "";
// var i;
// for (i=x; i<=x; i++);
// text = x*i;


// console.log(text);

// task01

// let liczba[1,2,3,4,5,6,7,8,9,10]

// wynik
var num2= prompt("wpisz liczbe");
var i;
console.log(factorialize(num2));

function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
