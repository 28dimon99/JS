'use strict';

/*let a = 5,
    b = a;

    b = b + 5;
    console.log(b);
    console.log(a);*/

/* const obj = {
     a: 5,
     b: 7
 };
 const copy = obj;//Ссилка на обьект
copy.a = 10;
 console.log(copy);*/

function copy(mainObj){
    let objCopy = {};
    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
const numbers = {
    a: 2,
    b: 4,
    c: {
        x:7,
        y:5
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 11;
//console.log(newNumbers);
//console.log(numbers);

// Object.assign()

const add = {
    d: 17,
    e: 20
}
const clone = Object.assign({}, add);
clone.d = 20;

/*console.log(add)
console.log(clone)*/

//Copy arr
const oldArray = ['a','b','c'];
const newArray = oldArray.slice();

newArray[1] = 'jgjgjgjhg';
/*console.log(oldArray);
console.log(newArray);*/

//ES6-8 spread

/*const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['worpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);*/
/*
function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);*/

/*const array = ['a', 'b'];
const newArr = [...array];
console.log(newArr);*/

const q ={
    one: 1,
    two: 2,
    tree: 3
}

const newObj = {...q};
console.log(newObj);