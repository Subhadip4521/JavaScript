/*multi
line
comment*/

//1.ways to print in javascript---->>

// console.log("Hello World");
// alert("Hiiii");
// document.write("This is documnet.write()");

//2.javascript console API---->>

// console.warn("This is an warning");
// console.error("This is an error");
// console.clear();
// console.assert();

//3. javascript variables---->>

//what are variables?--- container to store data values

var number1= 56;
var number2= 48;
// console.log(number1 + number2);

//4. datatypes in js---->>
/*
at a very high level, there are two types of datatypes in js:
1. primitive datatype: undefined, null, number, string, boolean, symbol
2. referance datatype: arrays and objects
*/

//numbers
var num1= 3;
var num2= 50.48;

//string
var str1="This is a string";
var str2='This is also a string';

//object
var marks={
    subha: 98,
    dip: 99,
    aakash: 97
};
// console.log(marks);

//boolean
var a= true;
var b= false;
// console.log(a, b);

//var und= undefined;
var und;
// console.log(und);
var n= null;
// console.log(n);


//arrays
var arr= [1,2,3,4,5,6,'sd'];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[8]);


//operators in js

//arithmetic operators
var a= 100;
var b= 10;
// console.log("The value of a+b is ",a+b);
// console.log("The value of a-b is ",a-b);
// console.log("The value of a*b is ",a*b);
// console.log("The value of a/b is ",a/b);

//assignment operators
var c=b;
c += 2;
// console.log(c);
c *= 2;
// console.log(c);
c /= 2;
// console.log(c);
c -= 2;
// console.log(c);

//comparison operators
// console.log(a == b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a != b);
// console.log(a > b);
// console.log(a < b);

//logical operators
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(!true);
// console.log(!false);


// console.log(0 && 0);
// console.log(0 && 1);
// console.log(1 && 0);
// console.log(1 && 1);

// console.log(0 || 0);
// console.log(0 || 1);
// console.log(1 || 0);
// console.log(1 || 1);

// b=0;
// console.log(a || b);
// console.log(b || a);
// console.log(a && b);
// console.log(b && a);


//functions in js---->>

//DRY= Do not Repeat Yourself
function avg(a,b){
    return (a+b)/2;
}

c1= avg(4,6);
c2= avg(14,16);
// console.log(c1,c2);


//conditional statemen in js---->>

var age= 21;
if (age <18) {
    // console.log('You can not drive a car');
}
else if(age>60){
    // console.log('You can not drive a car');
}
else{
    // console.log('You can drive a car');
}

//loops--->>

var arr=[1,2,3,4,5,6];
// console.log(arr);
for(var i=0; i<arr.length; i++){
    // console.log(arr[i]);
}

arr.forEach(function(elements){
    // console.log(elements);
})

const ac=0;     //here we are making the variable as constant so that we cant not change the value of the variable in the future

let wh= 0;
while(wh<arr.length){
    // console.log(arr[wh]);
    wh++;
}

let dwh=0;
do{
    // console.log(arr[dwh]);
    dwh++;
}while(dwh<arr.length);

//break and continue statements---->>

let arr_num= [1,2,3,4,5,6,7];
for (let i = 0; i < arr_num.length; i++) {
    if (i==3) {
        // break;
        continue;
    }
    // console.log(arr_num[i]);
    
}


//array methods---->>

let myArr=[48, 'laptop', null, true];

// console.log(myArr.length);

myArr.pop();
// console.log(myArr);

myArr.push(true);
// console.log(myArr);

myArr.shift();
// console.log(myArr);

myArr.unshift(48);
// console.log(myArr);

// console.log(myArr.unshift(3));
// console.log(myArr);

// console.log(myArr.toString());

//string methods in js--->>
let string="I am SD, SD";

// console.log(string.length);

// console.log(string.indexOf("SD"));
// console.log(string.lastIndexOf("SD"));

// console.log(string.slice(0,4));

let nString= string.replace("SD", "dip");
// console.log(nString);

//date in js---->>

let myDate= new Date;
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


//DOM manipualtion

let elemId= document.getElementById("click");
// console.log(elemId);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);

// elemClass[0].style.background="blue";
elemClass[0].classList.add('bg_primary');
elemClass[0].classList.add('text-success');

// console.log(elemId.innerHTML);
// console.log(elemId.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

let tn = document.getElementsByTagName('div');
// console.log(tn);

let createdelement= document.createElement('p');
createdelement.innerText= "This is a created paragraph";
tn[0].appendChild(createdelement);

let createdelement2= document.createElement('b');
createdelement2.innerText= "This is a created bold";
tn[0].replaceChild(createdelement2, createdelement);

//selecting using query

let sel= document.querySelector(".container");
// console.log(sel);

let sel2= document.querySelectorAll(".container");
// console.log(sel2);


//Events in js---->>

//event written in html 
function clicked(){
    // console.log("The button was clicked");
}

//event in js
window.onload= function(){
    // console.log("The document was loaded");
}


firstContainer.addEventListener('click', function(){
    // document.querySelectorAll(".container")[1].innerHTML="<b> you have clicked </b>"
    // console.log('clicked on container');
})

firstContainer.addEventListener('mouseover', function(){
    // console.log('mouse on container');
})

firstContainer.addEventListener('mouseout', function(){
    // console.log('mouse out of container');
})

// let prevSelector= document.querySelectorAll(".container")[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll(".container")[1].innerHTML=prevSelector;
//     console.log('mouse up and clicked on container');
// })
// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll(".container")[1].innerHTML="<b> you have clicked </b>"
//     console.log('mouse down and clicked on container');
// })


//arrow function
// function add(a,b){
//     return a+b;
// }
// console.log(add(4,7));
// add=(a,b)=>{
//     return a+b;
// }
// console.log(add(4,7));

// logKaro= ()=>{
//     console.log("log ho geya vai 2 second baad");
// }
//setTimeout and setInterval---->>
// clr= setTimeout(logKaro, 2000);
// clr= setInterval(logKaro, 2000);

//use clearTimeout(clr)/clearInterval(clr) to clear setTimeout/ setInterval

//javascript localstorage

// localStorage.setItem('name', 'SD');
// localStorage
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

//Json

// obj= {name: "SD", length:1};
// jso= JSON.stringify(obj);
// console.log(jso);
// console.log(typeof(jso));

// parsed= JSON.parse(`{"name":"SD","length":1}`);
// console.log(parsed);


//template litterels - backticks
// bt=48;
// console.log(`${bt} is a number only`);

