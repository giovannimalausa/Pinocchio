/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/MgJQoBkv
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.stage.backgroundColor = '#85b5e1';
    game.load.crossOrigin = 'anonymous';

    game.load.image('background', 'images/circo-illlustrazione.png')
    game.load.image('marionettaBomba', 'images/marionetta-bomba.png');
    game.load.image('platform', 'images/blocco1.png');
    game.load.spritesheet('pinocchio', 'images/sprite-tutte-pinocchio.png', 128, 100, 14);

    // Sfondi
    game.load.image('sfondoLivello1', 'images/backgrounds/Livello1.png');
    game.load.image('sfondoLivello2', 'images/backgrounds/Livello2.png'); // Livello 2
    game.load.image('sfondoLivello3', 'images/backgrounds/Livello3.png'); // Livello 3
    game.load.image('sfondoLivello4', 'images/backgrounds/Livello4.png'); // Livello 4


}

var player;
var enemy1;
var cursors;
var jumpButton;
var platforms;
var facing = "left";
var lifePoints = 100;
var timer = 100;
//var playerOffset

//var sfondoLivello1;
//var sfondoLivello2;
//var sfondoLivello3;
//var sfondoLivello4;

//aabbcc

function create() {

    game.world.setBounds(0, 0, 1600, 1000);

    game.add.image(0, 0, 'background');

    player = game.add.sprite(100, 200, 'pinocchio');
    player.animations.add('walkR', [0, 1, 2, 3, 4, 5]);
    player.animations.add('walkL', [6, 7, 8, 9, 10, 11]);


    enemy1 = game.add.sprite(700, 200, 'marionettaBomba');

    game.physics.arcade.enable(player);
    game.physics.arcade.enable(enemy1);

    player.body.setSize(80, 100, 20, 0);


    player.body.collideWorldBounds = true;
    player.body.gravity.y = 1500;

    enemy1.body.collideWorldBounds = true;
    enemy1.body.gravity.y = 1500;

    platforms = game.add.physicsGroup();


    platforms.create(0, 695, 'platform');
    platforms.create(64 , 695, 'platform');
    platforms.create(64 * 2, 695, 'platform');
    platforms.create(64 * 3, 695, 'platform');
    platforms.create(64 * 4, 695, 'platform');
    platforms.create(64 * 5, 695, 'platform');
    platforms.create(64 * 6, 695, 'platform');
    platforms.create(64 * 7, 695, 'platform');
    platforms.create(64 * 8, 585, 'platform');
    platforms.create(64 * 9, 585, 'platform');
    platforms.create(64 * 10, 585, 'platform');
    platforms.create(64 * 11, 585, 'platform');
    platforms.create(64 * 12, 585, 'platform');
    platforms.create(64 * 13, 585, 'platform');
    platforms.create(64 * 14, 585, 'platform');
    platforms.create(64 * 15, 585, 'platform');
    platforms.create(64 * 16, 585, 'platform');


    platforms.setAll('body.immovable', true);
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    // Camera Follow
    //playerOffset.position.x = player.position.x + 200;

    game.camera.follow(player, 1, 0.1, 0.1); // 1) chi segue 2) preset "style" (0= lock-on, 1= platformer) 3) lerpX 4) lerpY [LERP = valore da 0 a 1]


}

function update () {

    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(enemy1, platforms);
    game.physics.arcade.overlap(player, enemy1, contact);



if (player.body.touching.down) {
  player.body.velocity.x = (0.8 *  player.body.velocity.x) ;
}
else {
  player.body.velocity.x = (0.97 *  player.body.velocity.x) ;

}



if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
  {
    player.body.velocity.x = -300;
    player.animations.play('walkL', 10, true);
    if (facing !== "left"){  //il player guarda a sinistra
    facing = "left";
  }
}
else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
{
  player.body.velocity.x = 300;

  player.animations.play('walkR', 10, true);
  if (facing !== "right"){  //il player guarda a destra
    facing = "right";
  }
  player.animations.play('walkR', 10, true);
}
else
{
if (facing === "left") {  //assegno frame 13 se player guarda a sinistra
  player.frame = 13;
}
else {   //assegno frame 12+ se player guarda a sinistra
  player.frame = 12;
}
player.animations.stop('walkR');
player.animations.stop('walkL');
}

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && (player.body.onFloor() || player.body.touching.down))
    {
        player.body.velocity.y = -800;
    }

    if (enemy1.x >= player.x){
    enemy1.body.velocity.x = -100;
}
    else {
      enemy1.body.velocity.x = 100;
    }

    if ((enemy1.body.touching.left || enemy1.body.touching.right) && (enemy1.body.onFloor() || enemy1.body.touching.down)){
      enemy1.body.velocity.y = -600;
    }


    function contact (p, e) {
      //p.kill();
      e.kill();
      lifePoints = lifePoints - 20;
      player.body.velocity.x = -800;
      player.body.velocity.y = -400;
    }
    if (lifePoints <= 0) {
      player.kill();
    }


    console.log(lifePoints);

}


function render () {


}
