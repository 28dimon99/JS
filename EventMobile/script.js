'use strict';

//touchstart - событие срабатывает при касанию к элементу (касание пальца по экрану)
//touchmove - событие срабатывает при движении по элементу (движение пальца по экрану)
//touchend - событие срабатывает при отривании от элемента (отрывание пальца от экрана)
//touchenter - событие срабатывает при движенни наскальзиванию до элемента (движение пальца по экрану до элемента)
//touchleave - событие срабатывает при движении за пределы элемента (если палец ушел за пределы элемента)
//touchcancel - событие срабатывает при движении за пределами браузера(еслт палец ушел за пределы браузера)


window.addEventListener('DOMContentLoaded', () =>{
    const box = document.querySelector('.box');
   /* box.addEventListener('touchstart', (e)=>{
        e.preventDefault();
        console.log('Move');
        console.log(e.touches);

    });*/
    box.addEventListener('touchmove', (e)=>{
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);

    })
});

//touches - событие которое отлавливает всех пользователей на экране(отслежывает все пальцы на экране)
//targetTouches - событие которое отлавливает всех пользователей которые взаимодействуют с элементом(все пальцы которые взаимодействуют с элементом)
//changedTouches - список пользователей которые участвуют в данном событии(список пальцев которые участвуют в событии)
