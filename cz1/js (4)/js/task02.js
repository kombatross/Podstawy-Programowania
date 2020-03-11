let a = prompt("a");
let b= prompt("a");
let c =prompt("a");


console.log(najwieksza(a, b, c));



function najwieksza(_jeden, _dwa ,_trzy ){

    _jeden = parseInt(_jeden);
    _dwa = parseInt(_dwa);
    _trzy = parseInt(_trzy);

if (_jeden > _dwa && _jeden > _trzy){
console.log("jeden");
return _jeden;
    

}
else if (_dwa > _jeden && _dwa > _trzy){

    console.log("dwa");
    return _dwa;
   
}
else if (_trzy > _jeden && _trzy > _dwa){
    console.log("trzy");
    return _trzy;

}

}