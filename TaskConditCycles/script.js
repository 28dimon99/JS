/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", '');

console.log(numberOfFilms);


const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*const a = prompt("Один из последних просмотренных фильмов?", ''),
      b = prompt("На сколько оцените его?", ''),
      c = prompt("Один из последних просмотренных фильмов?", ''),
      d = prompt("На сколько оцените его?", ''),
      e = prompt("Какие актеры были в главной роли фильмов?", ''),
      z = prompt("На сколько вы оценете их?", '');


personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
personalMovieDB.actors[e]=z;*/

/*for(let i=0; i<2; i++){
    const a = prompt("Один из последних просмотренных фильмов?", ''),
          b = prompt("На сколько оцените его?", ''),
          e = prompt("Какие актеры были в главной роли фильмов?", ''),
          z = prompt("На сколько вы оценете их?", '');*/
//while
/*let i=0
    while ( i<2){
        const a = prompt("Один из последних просмотренных фильмов?", ''),
            b = prompt("На сколько оцените его?", ''),
            e = prompt("Какие актеры были в главной роли фильмов?", ''),
            z = prompt("На сколько вы оценете их?", '');
        i++;*/

   //do
        let i=0
        do {
            const a = prompt("Один из последних просмотренных фильмов?", ''),
                b = prompt("На сколько оцените его?", ''),
                e = prompt("Какие актеры были в главной роли фильмов?", ''),
                z = prompt("На сколько вы оценете их?", '');
            i++



    if(a != null  && b != null  && e != null  && z != null && a !== '' && b !=='' && e !=='' && z !==''
        && a.length <50 &&  e.length <50){
        personalMovieDB.movies[a]=b;
        personalMovieDB.genres[e]=z;
        console.log('done!');
    }else {
        console.log('Error!');
        i--;
    }
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
        while(i<2)

console.log(personalMovieDB);


