var Scoreboard2 = function(game){
    Phaser.Group.call(this, game); //Group is inheritance of Phaser with reference to the 'game'
};
Scoreboard2.prototype = Object.create(Phaser.Group.prototype);
Scoreboard2.prototype.constructor = Scoreboard2;

//Two scoreboard function: show and restart
//scoreboard show will display a gameover text, the score, the high score and the the tap to play again text
Scoreboard2.prototype.show = function(score){
    //declare local variables
    var bmd, background, scrbrd, gameoverText, scoreText, highScoreText, newHighScoreText, starText;

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

    gameoverText =  this.game.add.bitmapText(0, 150, 'minecraftia', 'You Died.', 36);//show "You Died" text
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

    starText = this.game.add.bitmapText(0, 400, 'minecraftia', 'Tap to play again!', 16);//show "Tap to play again!" text
    starText.x = this.game.width / 2 - (highScoreText.textWidth/ 4);
    starText.fixedToCamera = true;
    this.add(starText);

    if (isNewHighScore) {
        newHighScoreText = this.game.add.bitmapText(0, 100, 'minecraftia', 'New High Score!', 12);
        newHighScoreText.tint = 0x4ebef7; //'#4ebef7'
        newHighScoreText.x = gameoverText.x + gameoverText.textWidth + 40;
        newHighScoreText.angle = 45;
        newHighScoreText.fixedToCamera = true;
        this.add(newHighScoreText);
    }
    this.game.add.tween(this).to({y:0}, 1000, Phaser.Easing.Bounce.Out, true);

    //restart the game
    this.game.input.onDown.addOnce(this.restart, this);
};
Scoreboard2.prototype.restart = function(){//enable to restart the game
    this.game.state.start('Level2', true, false);
};