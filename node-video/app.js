var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

var home = ['/', '/home']
app.get(home, (req, res)=> {
   res.render('home', {qs: req.query});
});

app.post('/', urlencodedParser, (req, res)=> {
    console.log(req.body);
    res.render('home-success', {data: req.body});
});

app.get('/contact', (req, res)=> {
    res.send('this is the contact page');
 });

 app.get('/profile/:name', function(req,res){
     var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'sleeping']};
     res.render('profile', {person: req.params.name, data: data});
 });

app.listen(3003);