var Avoid=function(){};

Avoid.Boot= function(){};

Avoid.Boot.prototype={
    preload:function(){

        this.load.image('bgk', 'assets/images/bgk.png')
        this.load.image('logo1','assets/images/logo1.png');
        this.load.image('preloadbar','assets/images/preloaderbar.png');

    },
    create:function(){
        this.game.stage.backgroundColor='#808080';
        this.input.maxPointers=1;

        if(this.game.device.desktop){
            this.scale.pageAlignHorizontally=true;
        }else{
            this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth=568;
            this.scale.minheight=600;
            this.scale.maxWidth=2048;
            this.scale.maxheight=1536;
            this.scale.forceLandscape=true;
            this.scale.pageAlignHorizontally=true;
            this.scale.setScreenSize(true);

        }
        this.state.start('Preloader');
    }
};
