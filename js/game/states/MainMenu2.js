Avoid.MainMenu2 = function(){};

Avoid.MainMenu2.prototype = {
    create: function(){
    	//ADDING BACKGROUND
        this.levels = this.game.add.sprite(450,100,'GAMELEVELS');//add gray background

        //Adding game level buttons
        this.level1 = this.game.add.button( 600, 200, 'level1', this.Level1, this, 1, 0);
        this.level2 = this.game.add.button( 600, 260, 'level2', this.Level2, this, 1, 0);
        this.level3 = this.game.add.button( 600, 320, 'level3', this.Level3, this, 1, 0);
        this.level4 = this.game.add.button( 600, 380, 'level4', this.Level4, this, 1, 0);
        this.level5 = this.game.add.button( 600, 440, 'level5', this.Level5, this, 1, 0);
        
   	},
       Level1: function(){
            this.game.state.start('Level1'); //start state when "Level1" button is press
        },
        Level2: function(){
            this.game.state.start('Level2'); //start state when "Level2" button is press
        },
        Level3: function(){
            this.game.state.start('Level3'); //start state when "Level3" button is press
        },
        Level4: function(){
            this.game.state.start('Level4'); //start state when "Level4" button is press
        },
        Level5: function(){
            this.game.state.start('Level5'); //start state when "Level5" button is press
        }
};