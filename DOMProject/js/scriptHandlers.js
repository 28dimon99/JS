/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

//Событие которое срабатывает только тогда когда вся страничка DOM загружена
document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


//1)
    const addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector(`[type='checkbox']`),
        movieList = document.querySelector('.promo__interactive-list'),
        adv = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        poster = document.querySelector('.promo__bg')

    //Удаление рекламы
    const deleteAdv = (arr) => {
        adv.forEach(item => {
            item.remove()
        })
    }


    //Изменение на странице
    const makeChanges = () => {
        genre.textContent = 'ДРАМА'
        poster.style.backgroundImage = `url('img/bg.jpg')`;
    }


    //Сортировка фильмов
    const sortArr = (arr) => {
        arr.sort()
    }


    //Функция добавление фильмов через форму
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if(newFilm){
            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0,22)}...`;
            }
            if(favorite){
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();//очистить форму
    });


        //Создание нового фильма
        function createMovieList(films, parent) {
            parent.innerHTML = '';
            sortArr(films);
            films.forEach((film, i) => {
                parent.innerHTML += `
              <li class="promo__interactive-item">${i + 1}. ${film}
                            <div class="delete"></div>
                        </li>
                      `;
            });
            //Удаление фильмов
            document.querySelectorAll('.delete').forEach((btn, i)=>{
                btn.addEventListener('click', () =>{
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    //Вызываем функцию внутри себя это наз. рекурсия
                    //При удалении элементов список заново перестраивается
                    createMovieList(films, parent)
                })
            })
        }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});
