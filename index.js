const  express = require("express")
const bodyParser = require("body-parser")

const server = express()

const port = 3050

// const game = require("./game")
const game = []
const ID = {
    server:0,
    player:0
}



const routes =  require("./routes")

server.use(bodyParser.json())


routes(server,game,ID)



server.listen(port, ()=> console.log(`Servidor em http://localhost:${port}`))