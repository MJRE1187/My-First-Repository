const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine', 'hbs');


app.use((req, res, next) => {
    res.render('weAreBack');
});

console.log("Im alive ;)))))))");

app.use('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        authorName: 'MJRE',
        currentTime: new Date().getHours()
    });
});
app.use(express.static(__dirname + '/webfiles'));

app.listen(5050 , ()=>{console.log('the server.js is running on port 5050 ...');});