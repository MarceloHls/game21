function CreateMatch(serverID,game){
    game.forEach(server => {
        if(server.id == serverID){
            if(server.match == undefined) server.match = []
            server.players.forEach(player =>{
                const playerMatch = {
                    player : player.id,
                    cards:[],
                    play:true,
                    sum:0
                }
                server.match.push(playerMatch)
            })
            
        }
    });
    let match;

    game.forEach(server =>{
        if(server.id == serverID){
            match = server.match
            
        } 
    })

    return match

}

module.exports = CreateMatch