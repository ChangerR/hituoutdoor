var express = require('express');  
//var markdown = require("markdown").markdown;

var app = express();  

app.set('views', __dirname + '/views');  
app.set('view engine', 'jade');  
//app.engine('ejs', require('ejs').renderFile);
app.use(express.static(__dirname + '/content')); 

// url路由  
app.get('/', function(req, res){  
  res.render('index', {  
    title: 'hitu'  
  });  
});  

app.get('/document/:file',function(req,res) {
	var filename = '../markdown/' + req.params.file + '.js';
	res.render('doc',{'markdown':filename});
});

app.listen(8090); 
