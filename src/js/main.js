window.onload = function () {
  'use strict';

  var game
    , ns = window['gamify'];

  game = new Phaser.Game(2000, 2000, Phaser.AUTO, 'gamify-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('game', ns.Game);

  game.state.start('boot');
};
