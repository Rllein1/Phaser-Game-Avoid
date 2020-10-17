var Capsule = function(game, x, y, key, frame){ //the same parameters as sprite does
    key = 'capsule';
    Phaser.Sprite.call(this, game, x, y, key, frame);

    this.scale.setTo(0.3);//size of capsule

    this.animations.add('fly'); // name this animation as 'fly', animation of capsule

    this.game.physics.arcade.enableBody(this); //enable physics

    this.checkWorldBounds = true; //Phaser will check if capsule is inside the gameworld or not
    this.onOutOfBoundsKill = true; //hide or kill the capsule when it goes off screen

    this.events.onKilled.add(this.onKilled, this); //see function below
    this.events.onRevived.add(this.onRevived, this); //see function below
};
//standard javascript inheritance
Capsule.prototype = Object.create(Phaser.Sprite.prototype);
Capsule.prototype.constructor = Capsule;

Capsule.prototype.onRevived = function(){
    this.body.velocity.y = 200; //vertical speed of the capsule
    this.animations.play('fly', 3, true); //fly animation at 3fps
};

Capsule.prototype.onKilled = function(){
    this.animations.frame = 2; //the capsule will face the screen when it fly
};
