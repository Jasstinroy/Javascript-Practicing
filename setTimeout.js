//print 1 to 10 but with delay of 1 sec after each number gets printed
function printNumbers() {}
for(let i=1;i<=10;i++){
    setTimeout(function(){
console.log(i);
    },3*1000)
}

setTimeout(function(){
    console.log("hello");
},2*1000);

function hello() {
    console.log("Hello");
}

function mello() {
    console.log("Mello");
}

setTimeout(hello,2*1000);//callback function
setTimeout(mello,2*1000);
