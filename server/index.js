const express = require('express');
const bodyParser = require('body-parser');


const App = express();

//cors
App.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: 'true'}))
//respond with typed info from the client
App.post('/server/hello', function(req, res){
    //req.body.text
    res.send(req.body.text);
    //res.send("Hello world")

})

// App.post('/',(req,res)=>{ 
//     console.log(res.body)
// })

//respond with calculations
App.post('/server/calculate', function(req, res){
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    const answer = num1 * num2;

    res.send(`The answer: ${answer}`);
})


App.listen(8000, (req,res, next) => {
    console.log("Server running of port 8000");
});



