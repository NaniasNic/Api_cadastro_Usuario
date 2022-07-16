const { request, response } = require("express");
const express = require("express")

const { randomUUID } = require("crypto")

const app = express();

app.use(express.json());

const usuarios = [];

app.post("/usuarios", (request, response) => {
    
    const { nick, Nivel, champ, lane, sublane} = request.body;

    usuarios.push({
        nick : nick,
        Nivel : Nivel,
        champ : champ,
        lane : lane,
        sublane : sublane,
        id : randomUUID()
    })

    return response.send("cadastrou")

});

app.get("/usuarios", (request, response) =>{
    return response.json(usuarios)
})


app.listen(3030, () => console.log("O Servidor está Vivo!"))