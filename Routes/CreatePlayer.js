function CreatePlayer(body, game, ids) {
    const {name,serverId} = body
    const player = {name, id:++ids.player}
    game.forEach(server => {
        if(server.id == serverId){
            if(server.players == undefined) server.players = []
            
            server.players.push(player)
        }
    });
    return player;
}


module.exports = CreatePlayer