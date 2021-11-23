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

    // Assets menu (placeholders)
    game.load.spritesheet('option1', 'assets/menu/Option1.png', 147, 160)
    game.load.spritesheet('option2', 'assets/menu/Option2.png', 147, 160)
    game.load.spritesheet('option3', 'assets/menu/Option3.png', 147, 160)

    game.load.image('option1_selected', 'assets/menu/Property 1=Option1, Property 2=selected.png');
    game.load.image('option1_unselected', 'assets/menu/Property 1=Option1, Property 2=unselected.png');
    game.load.image('option2_selected', 'assets/menu/Property 1=Option2, Property 2=selected.png');
    game.load.image('option2_unselected', 'assets/menu/Property 1=Option2, Property 2=unselected.png');
    game.load.image('option3_selected', 'assets/menu/Property 1=Option3, Property 2=selected.png');
    game.load.image('option3_unselected', 'assets/menu/Property 1=Option3, Property 2=unselected.png');

}

// Variabili sprite interattivi
var player;
var shadow; // per camera tracking con offset
var platforms;

// Variabili sfondi
var level3_layer1;
var level3_layer2;
var level3_layer3;

// Variabili elementi menu
var menuOption1;
var menuOption2;
var menuOption3;
var menuOpen = false;
var optionSelected = 1;
var optionHovered = 1; 

// Tempo
var timeWhenLoaded;
var gameStopWatch;
var menuButtonTimer;
var total = 0;

// Keys & input
var cursors;
var jumpButton;
var menuButton;
var escapeKey;
var oneKey;
var twoKey;
var threeKey;


// Altre variabili
var facing = "right";


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

    // Input (cursors and keys)
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    menuButton = game.input.keyboard.addKey(Phaser.Keyboard.C);
    escapeKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    oneKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    twoKey = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    threeKey = game.input.keyboard.addKey(Phaser.Keyboard.THREE);


    // Camera Follow
    game.camera.follow(shadow, 1, 0.1, 0.1); // 1) chi segue 2) preset "style" (0= lock-on, 1= platformer) 3) lerpX 4) lerpY [LERP = valore da 0 a 1]

    // Time
    timeWhenLoaded = game.time.time;
    
    //  MenuButtonTimer
    menuButtonTimer = game.time.create(false);

    //  Set a TimerEvent to occur after 2 seconds
    menuButtonTimer.loop(2000, updateCounter, this);
}

function updateCounter() {
    total++;
}

function update () {

    // TIME
    gameStopWatch = Math.floor((game.time.time-timeWhenLoaded)/1000);

    // Collide
    game.physics.arcade.collide(player, platforms);

    // Player shadow offset
    shadow.x = player.x+200
    shadow.y = player.y

    // Player
    player.body.velocity.x = 0;

    // Controls
    if (cursors.left.isDown && menuOpen == false) // Camminata verso sinistra
    {
        player.body.velocity.x = -300;
        player.animations.play('walkL', 10, true);
        if (facing !== "left") // Se il player è rivolto a sinistra
        {  
            facing = "left";
        }
    }

    else if (cursors.right.isDown && menuOpen == false) // Camminata verso destra
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

    if (jumpButton.isDown && menuOpen == false && (player.body.onFloor() || player.body.touching.down))
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

    // Menu (bozza di come potrebbe funzionare il menu di selezione delle armi)
    // Il menu dovrebbe comparire alla pressione del tasto C (Choose).
    // button.OnDown non funziona come previsto (Phaser si comporta come se il tasto fosse premuto e rilasciato anche quando non lo è).
    // button.isDown è "vero" decine di volte al secondo, mentre si preme il tasto, quindi non si può usare.
    // Un workaround potrebbe essere collegare un "timer" all'if per evitare che l'argomento dell'if venga eseguito più di una volta di seguito.


    if (menuButton.isDown && menuOpen == false) // SE il tasto menuButton è premuto & SE la variabile menoOpen è 'false' -> apri il menu (= mostra gli sprite)
    {
        // menuButtonTimer.start();
        menuOpen = true;
        console.log('menuOpen = ' + menuOpen)

        // Crea gli sprite che mostrano le opzioni (la grafica) del menu
        menuOption1 = game.add.sprite(180, 170, 'option1');
        menuOption1.fixedToCamera = true;
        menuOption1.cameraOffset.setTo(180, 170);
        menuOption2 = game.add.sprite(438, 170, 'option2');
        menuOption2.fixedToCamera = true;
        menuOption2.cameraOffset.setTo(438, 170);
        menuOption3 = game.add.sprite(696, 170, 'option3');
        menuOption3.fixedToCamera = true;
        menuOption3.cameraOffset.setTo(696, 170);

        // Al caricamente del menu, l'opzione selezionata in precedenza appare come tale: vengono impostati i frame delle opzioni.
        if (optionSelected == 1)
        {
            menuOption1.frame = 2;
            menuOption2.frame = 1;
            menuOption3.frame = 1;
        }
        else if (optionSelected == 2)
        {
            menuOption1.frame = 1;
            menuOption2.frame = 2;
            menuOption3.frame = 1;
        }
        else if (optionSelected == 3)
        {
            menuOption1.frame = 1;
            menuOption2.frame = 1;
            menuOption3.frame = 2;
        }
    
    }

    // Funzione che cambia l'opzione selezionata, modificando i frame mostrati.
    function changeOptionHovered() {
        if (optionHovered == 1)
        {
            menuOption1.frame = 2;
            menuOption2.frame = 1;
            menuOption3.frame = 1;
        }
        else if (optionHovered == 2)
        {
            menuOption1.frame = 1;
            menuOption2.frame = 2;
            menuOption3.frame = 1;
        }
        else if (optionHovered == 3)
        {
            menuOption1.frame = 1;
            menuOption2.frame = 1;
            menuOption3.frame = 2;
        }
    }

    // Esegue la funzione quando vengono premuti i tasti 1, 2, 3 per la selezione delle opzioni.
    if (oneKey.isDown && menuOpen == true)
    {
        optionHovered = 1;
        console.log('Hovering option ' + optionHovered);
        changeOptionHovered();
    }
    if (twoKey.isDown && menuOpen == true)
    {
        optionHovered = 2;
        console.log('Hovering option ' + optionHovered);
        changeOptionHovered();
    }
    if (threeKey.isDown && menuOpen == true)
    {
        optionHovered = 3;
        console.log('Hovering option ' + optionHovered);
        changeOptionHovered();
    }

    // Imposta l'opzione selezionata.
    if (jumpButton.isDown && menuOpen == true)
    {
        optionSelected = optionHovered;
        console.log('Option selected: '+optionSelected);
    }
    
    // Esce dal menu con tasto ESC.
    else if (escapeKey.isDown && menuOpen == true) // SE il tasto menuButton è premuto & SE la variabile menoOpen è 'true' -> chiudi il menu (= killa gli sprite)
    {
        menuOpen = false;
        console.log('Menu was closed with ESC');
        menuOption1.kill();
        menuOption2.kill();
        menuOption3.kill();
    }
}

function render () {
}