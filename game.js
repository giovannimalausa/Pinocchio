/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/nfvkMJyh
 *
 * This source requires Phaser 2.6.2
 */

// Prova a modificare questo commento.

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.crossOrigin = 'anonymous';

    game.load.image('player', 'http://examples.phaser.io/assets/sprites/phaser-dude.png');
    game.load.image('platform', 'http://examples.phaser.io/assets/sprites/platform.png');
    game.load.image('pallinoRosso', 'assets/sprites/Pallino_rosso_vettoriale.svg')

    // Assets sfondi
    game.load.image('sfondoLivello1', 'assets/backgrounds/Livello1.png'); // Livello 1
    game.load.image('sfondoLivello2', 'assets/backgrounds/Livello2.png'); // Livello 2
    game.load.image('sfondoLivello3', 'assets/backgrounds/Livello3.png'); // Livello 3
    game.load.image('sfondoLivello4', 'assets/backgrounds/Livello4.png'); // Livello 4

}

// Variabili

var player;
var platforms;
var cursors;
var jumpButton;
var pallinoRosso;
var sfondoLivello1;
var sfondoLivello2;
var sfondoLivello3;
var sfondoLivello4;

function create() {

    game.world.setBounds(0, 0, 1600, 1000);

    // Sfondi

        // Livello 4
        sfondoLivello4 = game.add.tileSprite(0, 400, 800, 600, 'sfondoLivello4');
        
        // Livello 3
        sfondoLivello3 = game.add.tileSprite(0, 400, 800, 600, 'sfondoLivello3');    
    
        // Livello 2
        sfondoLivello2 = game.add.tileSprite(0, 500, 800, 600, 'sfondoLivello2');

        // Livello 1
        sfondoLivello1 = game.add.tileSprite(0, 450, 800, 600, 'sfondoLivello1');
    
    // Fine-sfondi


    // Player
    player = game.add.sprite(100, 200, 'player');
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;

    // Pallino rosso
    pallinoRosso = game.add.sprite(600, 100, 'pallinoRosso');
    game.physics.arcade.enable(pallinoRosso);
    pallinoRosso.body.collideWorldBounds = true;
    pallinoRosso.body.gravity.y = 500;

    platforms = game.add.physicsGroup();

    platforms.create(500, 450, 'platform');
    platforms.create(-200, 700, 'platform');
    platforms.create(400, 850, 'platform');

    platforms.setAll('body.immovable', true);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    // Camera Follow
    game.camera.follow(player, 1, 0.1, 0.1); // 1) chi segue 2) preset "style" (0= lock-on, 1= platformer) 3) lerpX 4) lerpY [LERP = valore da 0 a 1]


}

function update () {

    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(pallinoRosso, platforms);

    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -250;
        sfondoLivello1.tilePosition.x += 0.75;
        sfondoLivello2.tilePosition.x += 0.3;
        sfondoLivello3.tilePosition.x += 0.15;

    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 250;
        sfondoLivello1.tilePosition.x -= 0.75;
        sfondoLivello2.tilePosition.x -= 0.3;
        sfondoLivello3.tilePosition.x -= 0.15;
    }

    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
    {
        player.body.velocity.y = -400;
    }
}

function render () {

}
