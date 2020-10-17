Avoid.Preload=function(){
    this.ready=false;
};

Avoid.Preload.prototype={
    preload: function(){
        this.splash=this.add.sprite(this.game.world.centerX,this.game.world.centerY-30, 'bgk' );
        this.splash.anchor.setTo(0.5);
        
        this.splash=this.add.sprite(this.game.world.centerX,this.game.world.centerY-30, 'logo1' );
        this.splash.anchor.setTo(0.5);

        this.preloadBar=this.add.sprite(this.game.world.centerX,this.game.world.centerY+185, 'preloadbar' );
        this.preloadBar.anchor.setTo(0.5);

        this.load.setPreloadSprite(this.preloadBar);

        //load image assets
        this.load.image('background', 'assets/images/background.png');
        this.load.image('building', 'assets/images/building.png');
        this.load.image('logo2', 'assets/images/logo2.png');
        this.load.image('sky', 'assets/images/sky.png');
        this.load.image('sun', 'assets/images/sun.png');
        this.load.image('road', 'assets/images/foreground.png');
        this.load.image('bullet', 'assets/images/waterbullet.png');
        this.load.image('safe', 'assets/images/safe.png');
        this.load.image('background1', 'assets/images/level1/morningbackground.png');
        this.load.image('building1', 'assets/images/level1/morningbuilding.png');
        this.load.image('sky1', 'assets/images/level1/morningsky.png');
        this.load.image('sun1', 'assets/images/level1/morningsun.png');
        this.load.image('background2', 'assets/images/level2/noonbackground.png')
        this.load.image('building2', 'assets/images/level2/noonbuilding.png');
        this.load.image('sky2', 'assets/images/level2/noonsky.png');
        this.load.image('background3', 'assets/images/level3/evebackground.png');
        this.load.image('building3', 'assets/images/level3/evebuilding.png');
        this.load.image('sky3', 'assets/images/level3/evesky.png');
        this.load.image('background4', 'assets/images/level4/debackground.png');
        this.load.image('desert', 'assets/images/level4/desert.png');
        this.load.image('star4', 'assets/images/level4/destar.png');
        this.load.image('background5', 'assets/images/level5/snowbackground.png');
        this.load.image('building5', 'assets/images/level5/snowbuilding.png');
        this.load.image('sky5', 'assets/images/level5/snowsky.png');
        this.load.image('snow', 'assets/images/level5/snow.png');
        this.load.image('scrbrd', 'assets/buttons/scrbrd.png');
        this.load.image('GAMELEVELS', 'assets/buttons/GAMELEVELS.png');

        //load spritesheet assets
        this.load.spritesheet('hero', 'assets/images/hero.png', 314,351);
        this.load.spritesheet('capsule', 'assets/images/capsule.png', 306, 302, 3);
        this.load.spritesheet('virus', 'assets/images/virus.png', 200, 289, 5);
        this.load.spritesheet('startbutton', 'assets/buttons/play.png', 193, 71);
        this.load.spritesheet('nextbutton', 'assets/buttons/next.png', 193, 71);
        this.load.spritesheet('level1', 'assets/buttons/level1.png', 193, 71);
        this.load.spritesheet('level2', 'assets/buttons/level2.png', 193, 71);
        this.load.spritesheet('level3', 'assets/buttons/level3.png', 193, 71);
        this.load.spritesheet('level4', 'assets/buttons/level4.png', 193, 71);
        this.load.spritesheet('level5', 'assets/buttons/level5.png', 193, 71);

        //load audio assets
        this.load.audio('ingame1', 'assets/audio/ingame1.mp3');
        this.load.audio('ingame2', 'assets/audio/ingame2.mp3');
        this.load.audio('charattack', 'assets/audio/charattack.mp3');
        this.load.audio('enemyattack', 'assets/audio/enemyattack.mp3');
        this.load.audio('chardied', 'assets/audio/chardied.wav');
        this.load.audio('life', 'assets/audio/life.mp3');
        this.load.audio('steps', 'assets/audio/steps.mp3');
        this.load.audio('victory', 'assets/audio/victory.mp3');
        this.load.audio('win', 'assets/audio/win.mp3');

        //load font assets
        this.load.bitmapFont('minecraftia', 'assets/fonts/minecraftia/minecraftia.png', 'assets/fonts/minecraftia/minecraftia.xml');

        this.load.onLoadComplete.add(this.onLoadComplete, this);
    },
    create: function(){
        this.preloadBar.cropEnabled=false;
    },
    update: function(){
        if(this.cache.isSoundDecoded('ingame1') && this.ready === true){
            this.state.start('MainMenu');
        }
    },
    onLoadComplete: function(){
        this.ready=true;
    }
};