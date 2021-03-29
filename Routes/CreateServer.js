function createServer(body,game,ids){
    const {name} = body
    const newServer = {
        name,
        id: ++ids.server
    }

    game.push(newServer)

    return game.filter(s => s.id == newServer.id)

}

module.exports = createServer