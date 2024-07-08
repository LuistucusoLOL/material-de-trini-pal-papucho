function sum (a,b){
    return a+b;
}

console.log("el resultado de la suma es de: ", sum(3,3));

let ret = function(a,b){
    return a-b;
}
console.log("el resultado de la resta es de: ", ret(8,3));

let mult = (a,b) => a * b;
console.log("el resultado de la multiplicacion es de: ", mult(4,2));

function div(a,b){
    return a/b;
}
console.log("el resultado de la division es de: ", div(4,2));

function poten(a,b){
    return a**b;
}
console.log("el resultado de la potencia es de : ", poten(2,3))