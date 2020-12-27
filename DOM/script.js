'use strict';

/*const boxs = document.getElementById('box');
console.log(boxs);

const btn = document.getElementsByTagName('button')
console.log(btn[0]);

const circles = document.getElementsByClassName('circle');
console.log(circles)

const hearts = document.querySelectorAll('.heart');

hearts.forEach(items =>{
    console.log(items)
})

const oneHeart = document.querySelector('.heart')
console.log(oneHeart)*/

//Действие с элементами на странице
const boxs = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

/*boxs.style.backgroundColor = 'blue';
boxs.style.width = '500px';*/


box.style.cssText = `background-color: blue; width: 800px`;
btn[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

/*
for(let i =0; i<hearts.length; i++){
    hearts[i].style.backgroundColor = 'green'
}*/
/*
hearts.forEach(item=>{
    item.style.backgroundColor = 'blue';
});*/

const div = document.createElement('div');
//const text = document.createTextNode('Hello!');

div.classList.add('black');
div.style.cssText = `background-color: green; width: 500px`;
wrapper.append(div);//вставить элемент в конец

//div.innerHTML = '<h1>Hello world!</h1>';//добавляет весь html вместе со стилями и тегами

//div.textContent = 'Hello';//добавляет только текст
//div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
//div.insertAdjacentHTML('afterbegin', '<h3>Hello</h3>');//работает внутри div
//div.insertAdjacentHTML('beforeend', '<h5>Hello</h2>');
//div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');//работает за пределами div

/******************************************/
//document.body.append(div);
//wrapper.appendChild(div);

//wrapper.prepend(div);//вставить элемент в начало
//hearts[0].before(div);//перед
//hearts[0].after(div);//после
//wrapper.insertBefore(div, hearts[1]);
//circles[0].remove();//удалить
//wrapper.removeChild(hearts[1])
hearts[0].replaceWith(circles[0]);//заменить на
//wrapper.replaceChild(circles[0], hearts[0]);






