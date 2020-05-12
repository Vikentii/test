"use strict";

// -------- TASK ONE
const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '0');

// -------- TASK TWO
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//-------- PRACTICE 2

/*let answered = 0;
while (answered < 2) {
    var lastSeen = prompt('Один из последних просмотренных фильмов: ', '');
    if (lastSeen == '' || lastSeen == null || lastSeen.length > 50) {
        alert("not valid answer");
    } else {
        var score = +prompt('Насколько Вы его оцените?', '');
        personalMovieDB.movies[lastSeen] = score;
        answered++;
    }
}*/

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

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("ERROR");
}



console.log(personalMovieDB);