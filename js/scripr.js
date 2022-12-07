"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
personalMovieDB.count = numberOfFilms;

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

// console.log(numberOfFilms);
console.log(personalMovieDB);
