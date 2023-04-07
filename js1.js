let num=10;
let num2=5;
console.log(num+num2);
console.log(num-num2);
console.log(num/num2);
console.log(num*num2);

let a=[1,2,3,4,5];
let sum=0;
for(let i=0;i<5;++i){
    sum+=a[i];
}
console.log(sum);

function func(a,b){
    return a+b;
}

let num_1=document.getElementById("num1");
let num_2=document.getElementById("num2");
let b1=document.getElementById("b1");
b1.addEventListener("click",()=>{
    console.log(func(num_1.value,num_2.value));
});

function fib(n){
    if(n<=0)return [];
    let arr=[1],a=0,b=1;
    for(let i=1;i<n;++i){
        arr.push(a+b);
        a+=b*2;
        b=a-b;
        a-=b;
    }
    return arr;
}
let f=fib(10);
for(let i=0;i<10;i++){
    console.log(f[i]+" ");
}