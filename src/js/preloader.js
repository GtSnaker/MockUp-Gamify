(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function () {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('player', 'assets/player.png');
      this.load.image('logo', 'assets/logo1.png');
      this.load.image('hit', 'assets/hit.png');
      this.load.image('bars', 'assets/bars.png');

      this.load.image('top-banner', 'assets/top-banner.png');
      this.load.image('centro', 'assets/centro.png');
      this.load.image('side', 'assets/banner-side.png');
      this.load.image('izq', 'assets/izq.png');
      this.load.image('dcha', 'assets/dcha.png');

      this.load.image('sean', 'assets/sean.jpg');
      this.load.image('ivo', 'assets/ivo.jpg');
      this.load.image('gon', 'assets/gon.jpg');
      this.load.image('javi', 'assets/javi.jpg');
      this.load.image('edu', 'assets/edu.jpg');
      this.load.image('batman', 'assets/batman.jpg');

      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('game');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['gamify'] = window['gamify'] || {};
  window['gamify'].Preloader = Preloader;

}());
