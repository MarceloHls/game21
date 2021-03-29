const express = require("express")

const server = express()

const CreateServer = require("./Routes/CreateServer")
const CreatePlayer = require("./Routes/CreatePlayer")
const CreateMatch = require("./Routes/CreateMatch")

function routes(server, game, ids) {

    server.post("/server/create", (req, resp) => {
        resp.send(CreateServer(req.body, game, ids))
    })
    server.get("/server/id/:id",(req,resp)=>{
        const {id} = req.params
        resp.send(game.filter(s => s.id == id))
    })
    server.get("/server/list",(req, resp) => {
        resp.send(game)
    })
    server.post("/player/create", (req, resp) => {
        resp.send(CreatePlayer(req.body, game, ids))
    })
    server.get("/match/create/:id", (req, resp) => {
        const {id} = req.params
        resp.send(CreateMatch(id,game))
    })

    server.get("/match/get/:serveid",(req,resp)=>{
        const {serveid} = req.params
        const match = game.filter(s => s.id == serveid)[0].match
        resp.send(match)
    })

    
    
}

module.exports = routes