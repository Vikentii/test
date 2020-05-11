"use strict";

// -------- TASK ONE
const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '0');

// -------- TASK TWO
const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// -------- TASK THREE
const lastSeenOne = prompt('Один из последних просмотренных фильмов: ', '');
const scoreOne = prompt('Насколько Вы его оцените?', '');
const lastSeenTwo = prompt('Один из последних просмотренных фильмов 2: ', '');
const scoreTwo = prompt('Насколько Вы его оцените?', '');
personalMovieBD.movies[lastSeenOne] = scoreOne;
personalMovieBD.movies[lastSeenTwo] = scoreTwo;
/*let movies = {
    [lastSeenOne]: scoreOne,
    [lastSeenTwo]: scoreTwo
};
personalMovieBD.movies = movies;*/


console.log(personalMovieBD);