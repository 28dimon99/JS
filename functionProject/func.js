/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

//1)
let numberOfFilms

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    }
}
//start();

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for(let i=0; i<2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ''),
            b = prompt("На сколько оцените его?", ''),
            e = prompt("Какие актеры были в главной роли фильмов?", ''),
            z = prompt("На сколько вы оценете их?", '');

        if (a != null
            && b != null && e != null
            && z != null && a !== '' && b !== '' && e !== ''
            && z !== ''
            && a.length < 50 && e.length < 50) {
            personalMovieDB.movies[a] = b;
            personalMovieDB.genres[e] = z;
            console.log('done!');
        } else {
            console.log('Error!');
            i--;
        }
    }
}
//rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count <10){
        console.log('Просмотрено мало фильмов!')
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель!')
    }else if(personalMovieDB.count >= 30){
        console.log('Вы киноман!')
    }else {
        console.log('Произошла ошибка!')
    }
}
//detectPersonalLevel();

//2)

function showMyDB(hidden){
    if(!hidden){
       console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.privat)

//3)
function writeYourGenres(){
    for(let i=1; i<=3; i++) {
        const user = prompt(`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres[i-1] = user;
    }
}
writeYourGenres();
