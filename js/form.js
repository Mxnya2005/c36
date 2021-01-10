class Form{
    constructor(){
this.input= createInput('')
 this.button= createButton('START')
 this.greeting= createElement('h2')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        var title= createElement('h1')
        title.html("Car Racing Game")
        title.position(450,0)
        this.input.position(470,200)
        this.button.position(520,250)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name= this.input.value()
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html('Welcome '+ player.name)
            this.greeting.position(470,250)
        })
    }       
}
