var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO,'');

game.state.add('Boot', Avoid.Boot);
game.state.add('Preloader', Avoid.Preload);
game.state.add('MainMenu', Avoid.MainMenu);
game.state.add('MainMenu2', Avoid.MainMenu2);

game.state.add('Level1', Avoid.Level1);
game.state.add('Level2', Avoid.Level2);
game.state.add('Level3', Avoid.Level3);
game.state.add('Level4', Avoid.Level4);
game.state.add('Level5', Avoid.Level5);

game.state.start('Boot');