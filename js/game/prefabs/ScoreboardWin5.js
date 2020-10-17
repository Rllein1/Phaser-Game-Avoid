var ScoreboardWin5 = function(game){
    Phaser.Group.call(this, game); //Group is inheritance of Phaser with reference to the 'game'
};
ScoreboardWin5.prototype = Object.create(Phaser.Group.prototype);
ScoreboardWin5.prototype.constructor = ScoreboardWin5;

//Two scoreboard function: show and restart
//scoreboard show will display a gameover text, the score, the high score and the the tap to play again text
ScoreboardWin5.prototype.show = function(){
    //declare local variables
    var bmd, background, scrbrd, victoryText;

    //bitmapdata is like a canvass where we can draw or write on them
    //in this game we use game.width and game.height to show our bitmapdata full screen
    bmd = this.game.add.bitmapData(this.game.width, this.game.height);
    bmd.ctx.fillStyle = '#000'; //black color
    bmd.ctx.fillRect(0,0, this.game.width, this.game.height); //draw rectangle

    background = this.game.add.sprite(0,0, bmd);
    background.alpha = 0.5; //opacity
    background.fixedToCamera = true;

    this.add(background); // our scoreboard

    scrbrd = this.game.add.sprite(485,100,'scrbrd');//add gray background
    scrbrd.fixedToCamera = true;
    this.add(scrbrd);

    victoryText =  this.game.add.bitmapText(0, 250, 'minecraftia', 'VICTORY!!', 40);// show "VICTORY!!" text
    victoryText.x = this.game.width/2 - (victoryText.textWidth/ 2);
    victoryText.fixedToCamera = true;
    this.add(victoryText);

};