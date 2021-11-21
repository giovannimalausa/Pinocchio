/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/nfvkMJyh
 *
 * This source requires Phaser 2.6.2
 */

/* READ ME
   Level = Livello di Gioco
   Layer = Singolo livello di sfondo del Level
   Percorso tipo: assets/background/level0/layer0.png
*/



var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

// ++++++++++ PRELOAD ++++++++++

function preload() {

    game.load.crossOrigin = 'anonymous';

    game.load.spritesheet('pinocchio', 'assets/sprites/pinocchio/pinocchio_v1.png', 128, 100, 14);
    game.load.image('shadow', 'http://examples.phaser.io/assets/sprites/phaser-dude.png');
    game.load.image('platform', 'http://examples.phaser.io/assets/sprites/platform.png');

    
    // Assets sfondi Level 3
    game.load.image('level3_layer3', 'assets/backgrounds/level3/layer3.png'); // Layer 3
    game.load.image('level3_layer2', 'assets/backgrounds/level3/layer2.png'); // Layer 2
    game.load.image('level3_layer1', 'assets/backgrounds/level3/layer1.png'); // Layer 1

}

// Variabili sprite interattivi
var player;
var shadow; // per camera tracking con offset
var platforms;

// Variabili sfondi
var level3_layer1;
var level3_layer2;
var level3_layer3;

// Altre variabili
var facing = "right";
var cursors;
var jumpButton;


// ++++++++++ CREATE ++++++++++

function create() {

    game.world.setBounds(0, 0, 2000, 1000);

    // Sfondi di gioco

        // Livello 1

        // Livello 2

        // Livello 3 (circo)
        level3_layer3 = game.add.sprite(0, 0, 'level3_layer3');
        level3_layer2 = game.add.sprite(0, 0, 'level3_layer2');
        level3_layer1 = game.add.sprite(0, 0, 'level3_layer1');

    // Fine-sfondi


    // Player
    player = game.add.sprite(100, 200, 'pinocchio');
    player.animations.add('walkR', [0, 1, 2, 3, 4, 5]); // Animazione camminata verso dx
    player.animations.add('walkL', [6, 7, 8, 9, 10, 11]); // Animazione camminata verso sx
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 1500;
    player.body.setSize(80, 100, 20, 0); // Dimensione hitbox (questa linea funziona solo se inserita dopo 'game.physics.arcade.enable')
    

    // Player shadow (per camera tracking con offset)
    shadow = game.add.sprite(100+200, 200, 'player');
    shadow.alpha = 0;

    // Platforms
    platforms = game.add.physicsGroup();
    platforms.create(500, 450, 'platform');
    platforms.create(-200, 700, 'platform');
    platforms.create(400, 850, 'platform');
    platforms.setAll('body.immovable', true);

    // Cursors
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    // Camera Follow
    game.camera.follow(shadow, 1, 0.1, 0.1); // 1) chi segue 2) preset "style" (0= lock-on, 1= platformer) 3) lerpX 4) lerpY [LERP = valore da 0 a 1]


}

function update () {

    game.physics.arcade.collide(player, platforms);

    // Player shadow offset
    shadow.x = player.x+200
    shadow.y = player.y

    player.body.velocity.x = 0;

    if (cursors.left.isDown) // Camminata verso sinistra
    {
        player.body.velocity.x = -300;
        player.animations.play('walkL', 10, true);
        if (facing !== "left") // Se il player è rivolto a sinistra
        {  
            facing = "left";
        }
    }

    else if (cursors.right.isDown) // Camminata verso destra
    {
        player.body.velocity.x = 300;
        player.animations.play('walkR', 10, true);
        if (facing !== "right") // Se il player è rivolto a destra
        {
          facing = "right";
        }
    }

    else if (facing === "left") //Frame = 13 SE player rivolto a sinistra
    {
        player.frame = 13;
    }

    else // Frame = 12 SE player rivolto a destra
    {
        player.frame = 12;
    }

    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
    {
        player.body.velocity.y = -800;
    }

    // Scivolamento
    if (player.body.touching.down) {
        player.body.velocity.x = (0.8 *  player.body.velocity.x) ;
      }
      else {
        player.body.velocity.x = (0.97 *  player.body.velocity.x) ;
    }

}

function render () {

}
