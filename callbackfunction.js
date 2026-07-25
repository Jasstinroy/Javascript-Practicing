//callback function ek aisa function hota hai jo ek function ke andar pass hota hai
function product(a,b,c){
    return a*b*c;
}
console.log(product(2,3,4)); //24
function fun(x,y){// x is function
 //console.log(x-y);
 let a =x(2,5,4);
 console.log(a-y);
}
fun(product,7);