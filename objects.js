//object is kind of like map/dictionary where we have key-value pairs
var details=["rahul",30,92.5,false];
let x={
    name:"Raghav",
    age:24,
    percentage:92.5,
    isMarried: false
};
 console.log(x);
 console.log(x.name,x.age,x.percentage,x.isMarried);
 console.log(x['age']);
 x.age=30;
 console.log(x.age);
 x['age']=35;
 console.log(x.age);
 //forin loop
 for(const key in x){
    console.log(key,x[key]);
 }
 //forof loop
 for(const key of details){
    console.log(value);
 }