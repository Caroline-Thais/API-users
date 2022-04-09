const User = require("../models/User");

class UserController{

    async index(req, res){};

    async create(req, res){

        var{ email, name, password } = req.body;

        if(email == undefined){
            res.status(400);
            res.json({err: "E-mail inválido."});
            return
        }

        
        if(emailExists){
            res.status(406)
            res.json({ err:"O email já está cadastrado"})
            return
        }

        await User.new(email, password, name);
        
        res.status(200)
        res.send("Tudo OK!")

        if(name == undefined){
            res.status(400);
            res.json({err: "Nome de usuário inválido."})
            return
        }
        res.status(200)
        res.send("OK")

        if(password == undefined){
            res.status(400);
            res.json({err: "Senha inválida"})
            return
        }

        res.status(200)
        res.send("OK")
    }
}

module.exports = new UserController();