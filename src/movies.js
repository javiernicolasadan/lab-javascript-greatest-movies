// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = []
    moviesArray.map((movie) => {
        if(!allDirectors.includes(movie.director)) {
            allDirectors.push(movie.director)
        } 
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaSteven = []
    moviesArray.filter(movie => {
        if (movie.director.includes("Steven Spielberg") && movie.genre.includes("Drama")) {
            dramaSteven.push(movie)
        }
    })
    return dramaSteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0
    }
    let scoresSum = moviesArray.reduce((acc, movie) => {
        if ( movie.score) {
            return acc + (movie.score || 0)
        } else {
            return acc
        }
    }, 0)
    let scoresAvg = scoresSum / moviesArray.length
    return Math.round(scoresAvg*100)/100 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))
    if(dramaMovies.length === 0) {
        return 0
    } else {
    let dramaMoviesSum = dramaMovies.reduce((acc, movie) => acc + movie.score,0)
    let dramaMovieAvg = dramaMoviesSum / dramaMovies.length
    return Number(dramaMovieAvg.toFixed(2))
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
