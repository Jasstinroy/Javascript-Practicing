let arr=[1,2,3,5,8,2];
arr=arr.sort();// negative ko consider ni \
//krta  -2 ko -9 se phele rakhega galat sorting hai

console.log(arr);
// decreasing order
arr=arr.sort(function(a,b){
    return b-a;
});
console.log(arr);
//arr=arr.sort((a,b)=> b-a);// a-b to increasing order.
//console.log(arr);