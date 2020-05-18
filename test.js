"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", '0');

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", '0');
        }
    },
    writeYourGenres: () => {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр номер ${i + 1}`);
            if (genre == null || genre == '') {
                i--;
            } else {
                personalMovieDB.genres.push(genre);
            }
        }
        //Любимый жанр №(номер по пораядку, начиная с 1) - это (название из массива)
        personalMovieDB.genres.forEach((genre, i) => {
            console.log(`Любимый жанр №${i+1} - это ${genre}`);
        });
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("ERROR");
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: () => {
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
    },
    toggleVisibleMyDB: () => {
        personalMovieDB.privat = !personalMovieDB.privat;
    },

};

personalMovieDB.start();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.rememberMyFilms();

// branch br2