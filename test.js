console.log("Hello World");
console.log(999+111);
console.log("999"+"111");
console.log(typeof("999"));
console.log(typeof (999));
console.log(parseInt("999"));
console.log(parseFloat("999.99"));
console.log(Number("999"));
console.log(String(999));
//this is a comment
let a = 10;
console.log(a);
const pi=3.14;
console.log(pi);
//pi=3.14159;
//console.log(pi)
let b = 100;
console.log(b);
// let b = 100;
console.log(b);
//let b=200;//this is a comment
//should not redeclare a variable with the same name the in same scope
b=200;
console.log(b);
// find number is odd or even
let num = 10;
if (num%2 == 0){
    console.log("even")
}
else{
    console.log("odd")
}
//find the number is positive or negative or zero
let n1 = 10;
if (n1 > 0){
    console.log("positive")
}
else if (n1 < 0){
    console.log("negative")
}
else{
    console.log("zero")
}
for (let i=0; i<5; i++){
    console.log(i);
}
for (i=0; i<5; i++){
    console.log(i*2);
}
i=0;
while (i<5){
    console.log(i);
    i++;
}
i =5;
console.log("do while loop");
do{
    console.log(i);
    i++;
}while (i<5);
function add(a,b){
    return a+b;
}
console.log(add(10,20));