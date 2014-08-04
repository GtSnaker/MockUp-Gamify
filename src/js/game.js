(function() {
  'use strict';


 function Logro (parent, usuario, x, y) {
      
      //this.logro = parent.elementName[Math.floor(Math.random() * 80)];
      this.usuario = usuario;
      this.sprite = null;
      this.initSprite= function () {
        this.sprite = parent.add.sprite(x, y, 'logro');
      };
      this.text = null;
      this.style = { font: '30px Arial', fill: '#ff0044', align: 'center' };

      this.initText = function(x, y) {
        this.text = parent.add.text(x, y, this.molecule, this.style);
      };
      this.getType = function() {
        console.log(this.molecule);
      };

  }

  function Usuario(parent, nombre, foto, ciudad) {

    this.nombre = nombre;
    this.foto = foto;
    this.sprite = null;
    this.initSprite= function () {
        this.sprite = parent.add.sprite(x, y, foto);
    };
    this.ciudad = ciudad;
}
  //this.logro = new Logro(this);


  function Game() {

  }


  Game.prototype = {

    create: function () {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      var x = this.game.width / 2
        , y = this.game.height / 2;
      this.scale1 = 0.65;

      this.centro = this.add.sprite(0, 0, 'centro');
      this.izq = this.add.sprite(-800, 0, 'izq');
      this.dcha = this.add.sprite(800, 0, 'dcha');

      this.bannertop = this.add.sprite(0, 0, 'top-banner');
      this.bannertop.fixedToCamera = true;

      // this.bannerleft = this.add.sprite(42.5, 90, 'side');
      // this.bannerright = this.add.sprite(530, 90, 'side');

      this.logo = this.add.button(368, 20, 'logo', function() {this.izqMove = false; this.dchaMove = false;} , this, 2, 1, 0);
      //this.logo = this.add.sprite(368, 20, 'logo');
      this.logo.scale.x = this.scale1;
      this.logo.scale.y = this.scale1;

      this.usuarios = new Array();

      this.usuarios.push(new Usuario (this, 'sean', 'sean', 'londres'));
      this.usuarios.push(new Usuario (this, 'ivo', 'ivo', 'murcia'));
      this.usuarios.push(new Usuario (this, 'gon', 'gon', 'madrid'));
      this.usuarios.push(new Usuario (this, 'javi', 'javi', 'orgrimmar'));
      this.usuarios.push(new Usuario (this, 'edu', 'edu', 'pandora'));
      this.usuarios.push(new Usuario (this, 'batman', 'batman', 'canarias'));

      this.logros = new Array();
      for(var i = 0; i < this.usuarios.length; i++) {
        
      }
      this.sitio = this.add.sprite(1052/2, 90, 'logo');
      this.sitio.visible = false;

      this.izqMove = false;
      this.dchaMove = false;
      this.buttonLeft = this.add.button(22, 9, 'hit', function() {this.izqMove = true; this.dchaMove = false;} , this, 2, 1, 0);
      this.buttonRight = this.add.button(730, 11, 'bars', function() {this.dchaMove = true; this.izqMove = false;} , this, 2, 1, 0);
      //this.buttonLeft = this.add.sprite(22, 9, 'hit');
      //this.buttonRight = this.add.sprite(730, 11, 'bars');
      //this.input.onDown.add(this.onInputDown, this);
    },

    update: function () {


      //this.centro.y = this.sitio.y;
  

      // if(this.input.keyboard.isDown(Phaser.Keyboard.UP) && this.sitio.y > -340){
      //     this.sitio.y -= 10;
      //     console.log(this.sitio.y);
      // }
      // else if(this.input.keyboard.isDown(Phaser.Keyboard.DOWN) && this.sitio.y < 90 ){
      //     this.sitio.y += 10;
      //     //console.log(this.sitio.y);
      // }
      if(this.izqMove) {
        if(this.izq.x != 0){
          this.izq.x += 50;
        }
      }
      else {
        if(this.izq.x != -800){
          this.izq.x -= 50;
        }
      }

      if(this.dchaMove) {
        if(this.dcha.x != 0){
          this.dcha.x -= 50;
        }
      }
      else {
        if(this.dcha.x != 800){
          this.dcha.x += 50;
        }
      }
      //console.log(this.izqMove);
    },

    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['gamify'] = window['gamify'] || {};
  window['gamify'].Game = Game;

}());
