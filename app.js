const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res){
   var today = new Date(); 
   var currentdate = today.getDate();
   var day = '';
   if(today.getDate()===0){
    day = "sUNDAY";
   }
   else if(today.getDate()===1){
    day = "MONDAY";
   }
   else if(today.getDate()===2){
    day = "TUESDAY";
   }
   else if(today.getDate()===3){
    day = "WEDNESDAY";
   }
   else if(today.getDate()===4){
    day = "THUSDAY";
   }
   else if(today.getDate()===5){
    day = "FRIDAY";
   }
   else{
    day = "SATURDAY";
   }
   res.render('list.ejs',{kindofday: day});

});

app.listen(3000, function(){
    console.log('server is running on the 3000 server');
});