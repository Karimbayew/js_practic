"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
personalMovieDB.count = numberOfFilms;

if (personalMovieDB.count <= 10) {
    console.log('Просмотрено давольно мало фильм');
} else if (personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Ошибка');
}

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

    
console.log(personalMovieDB);
