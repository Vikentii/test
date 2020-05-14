"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '0');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '0');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        var lastSeen = prompt('Один из последних просмотренных фильмов: ', ''),
            score = +prompt('Насколько Вы его оцените?', '');
        if (lastSeen == '' || lastSeen == null || lastSeen.length > 50) {
            alert("not valid answer");
            i--;
        } else {
            personalMovieDB.movies[lastSeen] = score;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("ERROR");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres(genre) {
    for (let i = 0; i < 3; i++) {
        genre[i] = prompt(`Ваш любимый жанр номер ${i+1}`);
    }
}

writeYourGenres(personalMovieDB.genres);
showMyDB(personalMovieDB.privat);