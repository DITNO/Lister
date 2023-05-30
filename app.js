const express = require('express');
const bodyparser = require('body-parser');
//app
const app = express();

var items = ["buy food","Cook food","Eat food"];

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended: true}));

app.get('/',function(req,res){
   var today = new Date(); 
   
var options = {
    weekday: "long",
    day: 'numeric',
    month: "long"
};

var day = today.toLocaleDateString("hi-EN",options);
   res.render('list.ejs',{kindofday: day, newlistItems: items});

});

app.post('/',function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect('/');
    
});

app.listen(3000, function(){
    console.log('server is running on the 3000 server');
});
