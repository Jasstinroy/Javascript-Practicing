//filter out even elemnts
let arr=[1,9,2,7,4,5,6,2,8];
console.log(arr);
let brr=arr.filter(function (ele){
    if(ele%2!=0) return true;
    else return false;
});
console.log(brr);
arr= arr.filter((ele)=>{
    if(ele<5) return true;  // return (ele<7) ? true : false;
    else return false;
});
console.log(arr);