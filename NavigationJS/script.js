"use strict"
//console.log(document.head);
//console.log(document.documentElement);
//console.log(document.body.childNodes);
//console.log(document.body.firstChild);
//console.log(document.body.firstElementChild);//Получаем элементы без переноса строк firstElementChild
//console.log(document.body.lastChild);

//console.log(document.querySelector('#current').parentNode.parentNode);//нажимаем на кнопку получаем родителя
//console.log(document.querySelector('#current').parentElement)//получаем элементы родителя без переносов строки parentElement

//data атрибуты
//console.log(document.querySelector('[data-current= "3"]').previousSibling);
//console.log(document.querySelector('[data-current= "3"]').nextElementSibling);//Чтобы не получить перенос строки используем nextElementSibling


for (let node of document.body.childNodes){
    if(node.nodeName == '#text'){
        continue;//останавлиевает повторение цикла и начинает сначала
    }
    console.log(node)
}