var Virus = function(game, x, y, key, frame){ //the same parameters as sprite does
    key = 'virus';
    Phaser.Sprite.call(this, game, x, y, key, frame);

    this.scale.setTo(0.5); //size of capsule
    this.anchor.setTo(-2.5); //position of virus 

    this.animations.add('bounce');//animation of the virus

    this.game.physics.arcade.enableBody(this); //enable physics
    this.body.allowGravity = true; //not allow the virus to fall

    this.checkWorldBounds = true; //Phaser will check if virus is inside the gameworld or not
    this.onOutOfBoundsKill = true;//hide or kill the capsule when it goes off screen

    this.events.onRevived.add(this.onRevived, this);//see function below
};

Virus.prototype = Object.create(Phaser.Sprite.prototype);
Virus.prototype.constructor = Virus;

Virus.prototype.onRevived = function(){
    this.body.velocity.x = -250; //horizontal speed of the virus
    this.animations.play('bounce', 5, true); //bounce animation at 3fps
};