'use strict';

//To String
//1.
//console.log(typeof (String(null)));//строковый тип данных null превращает в строку

//console.log(typeof (String(4)));//строковый тип данных число превращает в строку
//2.
/*console.log(typeof (5 + ''))//string
console.log(typeof (null + ''))//string
console.log(typeof (undefined + ''))//string*/

/*const num = 5;
console.log("https://vk.com/catalog/"+ num);

const fontSize = 26 + 'px';*/

//To Number
//1.
//console.log(typeof(Number(5 + '9')))//Number

//2/.
/*console.log(typeof(Number(+'9')))//Number
console.log(typeof (parseInt("15px", 10)))//Number
let answ  = +prompt("Hello", "");//Number*/

//To boolean

//0,'', null, undefined, NaN//false
//1. Условие ничего не покажет
/*let switcher = null;
if(switcher){
    console.log('Working...');
}*/
//2.Покажет выражение в консоле
/*let switcher = null;
switcher = 1
if(switcher){
    console.log('Working...');
}*/
//3.
console.log(typeof (Boolean('7')));//Boolean
//4.
console.log(typeof (!!"44"));//Boolean

