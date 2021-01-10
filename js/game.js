class Game{
    constructor(){

    }
    getState(){
      database.ref('gameState').on('value',function(data){
          gameState=data.val()
      })  
    }
    update(state){
        database.ref('/').update({
            gameState: state
        })
    }
    start(){
        if (gameState==0){
            player= new Player();
            player.getCount()
            form= new Form();
            form.display();
        }
    }
    play(){
        form.hide()
        textSize(30)
        text('GAME START',420,100)
        Player.getPlayerInfo()
        if(allPlayers!==undefined)
{
    var dp= 130
    for(var plr in allPlayers){
        dp= dp+20
        if(plr=="player"+player.index){
            fill('red') 
        }
        else{
     fill('black') 
        }
        textSize(15)
        text(allPlayers[plr].name+': '+allPlayers[plr].distance,400,dp)
    }
}  
if(keyDown(UP_ARROW)&&player.index!==null){
    player.distance= player.distance+30
    player.update()
}
}
}