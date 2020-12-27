'use strict';

/*let num = 20

function showFirstMessage(text){
    console.log(text)
     let num = 10
     console.log(num)
}

showFirstMessage('Hello word!');
console.log(num)*/

/*function calc(a, b){
    return (a+b)
}
console.log(4, 3)
console.log(5, 6)
console.log(10, 6)*/

//function declaration


function ret(){
    let num = 50;
    //
    return num;
}

const anoterNum = ret();
console.log(anoterNum)

//function expression
const logger = function(){
    console.log('Hello!')
}
logger()

//стрелочные функции

const calc = (a,b) =>{
    return a+b;
}
console.log(calc(4,8))