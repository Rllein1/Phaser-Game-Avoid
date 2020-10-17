var ScoreboardWin3 = function(game){
    Phaser.Group.call(this, game); //Group is inheritance of Phaser with reference to the 'game'
};
ScoreboardWin3.prototype = Object.create(Phaser.Group.prototype);
ScoreboardWin3.prototype.constructor = ScoreboardWin3;

//Two scoreboard function: show and restart
//scoreboard show will display a gameover text, the score, the high score and the the tap to play again text
ScoreboardWin3.prototype.show = function(score){
    //declare local variables
    var bmd, background, scrbrd, gameoverText, scoreText, highScoreText, newHighScoreText, nextbutton;

    //bitmapdata is like a canvass where we can draw or write on them
    //in this game we use game.width and game.height to show our bitmapdata full screen
    bmd = this.game.add.bitmapData(this.game.width, this.game.height);
    bmd.ctx.fillStyle = '#000'; //black color
    bmd.ctx.fillRect(0,0, this.game.width, this.game.height); //draw rectangle

    background = this.game.add.sprite(0,0, bmd);
    background.alpha = 0.5; //opacity
    background.fixedToCamera = true;

    this.add(background); // our scoreboard

    var isNewHighScore = false;
    var highscore = localStorage.getItem('highscore');
    if (!highscore || highscore < score) {
        isNewHighScore = true;
        highscore = score;
        localStorage.setItem('highscore', highscore);
    }
    this.y = this.game.height; //starting position of scoreboard at the bottom of the screen

    scrbrd = this.game.add.sprite(485,100,'scrbrd');//add gray background
    scrbrd.fixedToCamera = true;
    this.add(scrbrd);

    gameoverText =  this.game.add.bitmapText(0, 150, 'minecraftia', 'You Win.', 36);//show "You Win!" text
    gameoverText.x = this.game.width/2 - (gameoverText.textWidth/ 2);
    gameoverText.fixedToCamera = true;
    this.add(gameoverText);

    scoreText = this.game.add.bitmapText(0, 250, 'minecraftia', 'Your Score: ' + score, 24);//show score
    scoreText.x = this.game.width / 2 - (scoreText.textWidth/ 2);
    scoreText.fixedToCamera = true;
    this.add(scoreText);

    highScoreText = this.game.add.bitmapText(0, 300, 'minecraftia', 'Your High Score: ' + highscore, 24);//show high score
    highScoreText.x = this.game.width / 2 - (highScoreText.textWidth/ 2);
    highScoreText.fixedToCamera = true;
    this.add(highScoreText);

    //Adding next button enable to proceed next button
    nextbutton = this.game.add.button(600, 400, 'nextbutton', this.onClick, this, 1, 0);//add next button, and call the onClick button
    nextbutton.fixedToCamera = true;
    this.add(nextbutton);

    if (isNewHighScore) {
        newHighScoreText = this.game.add.bitmapText(0, 100, 'minecraftia', 'New High Score!', 12);
        newHighScoreText.tint = 0x4ebef7; //'#4ebef7'
        newHighScoreText.x = gameoverText.x + gameoverText.textWidth + 40;
        newHighScoreText.angle = 45;
        newHighScoreText.fixedToCamera = true;
        this.add(newHighScoreText);
    }
    this.game.add.tween(this).to({y:0}, 1000, Phaser.Easing.Bounce.Out, true);

};
ScoreboardWin3.prototype.onClick = function(){//enable to go to MainMenu2 state to choose game level
    this.game.state.start('MainMenu2');
};