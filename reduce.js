let arr=[1,9,2,3,4,5,6];
console.log(arr);
let x=arr.reduce(function(a,b){
    return a-b;
})
console.log(x);