const sql = require("../db-files/db.js");

const getNewMovies = function(req, res) {
    const genre = req.params.genre
    sql.query("SELECT * FROM movies where genre like ? AND year=? ", ['%' +genre + '%', '2020']  , (err, mysqlres) => {

        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting movies by genre: " +
                    err});
            return;
        }
        console.log("got movies by genre...");
        res.send(mysqlres);
    });
};

const validateUser = function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    sql.query("select * from users where email=? and password=? ", [email, password]  , (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting movies by genre: " +
                    err});
            return;
        }
        console.log("validated user..");
        res.send(mysqlres);
    });
}

const newShows = function (req, res) {
    const city = req.body.city;
    const date = req.body.date;
    const time = req.body.time;
    const dt_start = date + ' ' + time;
    sql.query("SELECT s.dt_start, title, m.year, m.date_published, m.genre, m.actors, m.director, m.description FROM Shows as s join movies as m on s.movie_id=m.imdb_title_id where s.city = ? and s.dt_start=?", [city, dt_start]  , (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting shows: " +
                    err});
            return;
        }
        console.log("got shows..");
        console.log(mysqlres);
        res.send(mysqlres);
    });
}

const newUser = function (req, res) {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    sql.query("SELECT s.dt_start, title, m.year, m.date_published, m.genre, m.actors, m.director, m.description FROM Shows as s join movies as m on s.movie_id=m.imdb_title_id where s.city = ? and s.dt_start=?", [city, dt_start]  , (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting shows: " +
                    err});
            return;
        }
        console.log("got shows..");
        console.log(mysqlres);
        res.send(mysqlres);
    });
}
module.exports = {getNewMovies:getNewMovies, validateUser:validateUser, newShows:newShows};


