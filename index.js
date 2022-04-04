var express = require("express")
var app = express()
var router = require("./routes/routes")
var bodyParser = require("body-parser")


 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/",router);

app.listen(8686,() => {
    console.log("Servidor rodando na porta 8686")
});
