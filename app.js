var express = require('express');
var path = require('path');
var app = express();

// console.log(__dirname);
// console.log(path.join(__dirname, 'static'));
// serves static files from the "static" directory
// "/index.html" -> loads static/index.html and sends to browser
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');

app.get('/hello/:name', function(req, res) {
    var name = req.params.name;
    // render "hello_friend.ejs" template with data name
    res.render('hello_friend', { name: name });
});

app.get("/greet/:name/:lastname", function(req, res) {
    var firstname = req.params.name;
    var lastname = req.params.lastname;
    res.send("Hello " + firstname + " " + lastname);
});

app.get("/multiply/:x/:y", function(req, res) {
    var x = parseInt(req.params.x);
    var y = parseInt(req.params.y);
    res.send("The answer is: " + (x * y));
});

app.get("/add/:x/:y", function(req, res) {
    res.send("The answer is: " + (parseInt(req.params.x) + parseInt(req.params.y)));
});

app.get("/greaterthan/:x/:y", function(req, res) {
    // "/greaterthan/10/15" -> response will be "15"

    var x = parseInt(req.params.x);
    var y = parseInt(req.params.y);

    if (x > y) {
        res.send("answer is " + x);
    } else {
        res.send("answer is " + y);
    }
});

app.listen(3000);
