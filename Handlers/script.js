"use strict"

const btn = document.querySelectorAll('button');
      //btn = document.querySelector('button'),
      //overlay = document.querySelector('.overlay')

//Устаревшая форма записи 2 функция перезатрет 1
/*btn.onclick = function (){
    alert('Click');
}

btn.onclick = function (){
    alert('Second Click');
}*/

/*btn.addEventListener('click',(e) =>{
    alert('Click');
    e.target.remove();
    //alert('Second click');
});*/

/*let i = 0
const deleteElement = (e) =>{
    console.log(e.target);
    console.log(e.type);
    i++;
    if(i ==1){
        btn.removeEventListener('click',deleteElement);
    }
}*/
//btn.addEventListener('click',deleteElement);
//overlay.addEventListener('click',deleteElement);

btn.forEach((item) => {
    item.addEventListener('click', ()=>{
        alert('Click')
    }, {once:true}) 
})

const link = document.querySelector('a');
link.addEventListener('click', function (event){
    event.preventDefault();
    console.log(event.target)
})//event обьект события