let arr=[1,6,3,8];
console.log(arr);
let brr=[];
for(const ele of arr){
    brr.push(Math.abs(ele));

}console.log(brr);

let arr1=[1,-2,-3,-6];
console.log(arr1);
let brr1=arr.map(function(ele){
    return ele*ele;
});
console.log(brr1);