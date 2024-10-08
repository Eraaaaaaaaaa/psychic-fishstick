var express = require('express');
var app = express();
app.get("/user", function(req, res) {
    var user ={
        name:"Filan",
        surname:'Fisteku'
    }
    res.send(`Pershendetje ${user.name} ${user.surname}`);
})
// app.get("/home", function(req, res) {
//     res.send('text response');
// })
app.listen('1168');
