const bodyParser = require('body-parser');

module.exports = function(app) {
    
    let data = [{item: 'watch observables video'}, {item: 'put out clothes'}, {item: 'ace interview'}];
    let urlencodedParser = bodyParser.urlencoded({extended: false});

    app.get('/todo', function(req, res) {
        res.render('todo', {todos: data}); 
    });   

    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body);
        res.json(data);
    });   

    app.delete('/todo/:item', function(req, res) {
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });

};
