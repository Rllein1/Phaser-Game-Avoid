Avoid.MainMenu = function(){};

Avoid.MainMenu.prototype = {
    create: function(){
    	//ADDING BACKGROUND
        this.background = this.game.add.tileSprite(0, 0, this.game.width, 700, 'background');

        this.sun = this.game.add.tileSprite(400, 0, this.game.width, 312, 'sun');
        this.sun.autoScroll(0,60); //this will move the sun down

        this.building = this.game.add.tileSprite(0, 0, this.game.width, 700, 'building');

        this.sky = this.game.add.tileSprite(0, 0, this.game.width, 512, 'sky');
        this.sky.autoScroll(-100, 0); //this will move the sky to the left

        this.logo=this.add.sprite(this.game.world.centerX,this.game.world.centerY-30, 'logo2' );
        this.logo.anchor.setTo(0.5);//set the position of logo
        //applying tween to the logo
        this.game.add.tween(this.logo).to( { y: 330 }, 2000, Phaser.Easing.Back.In, true, 0, 2000, true);

        //Adding start button
        this.startbutton = this.game.add.button(game.world.centerX - 95, 530, 'startbutton', this.onClick, this, 1, 0);
        
   	},
    onClick: function(){
           this.game.state.start('MainMenu2'); // start state when the button bove was click
    }
};