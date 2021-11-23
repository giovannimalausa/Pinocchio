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
    
    // Piattaforme e pavimento del livello 3
    game.load.image('platform', 'assets/backgrounds/level3/palco-platform.png');
    game.load.image('floorLevel3', 'assets/backgrounds/level3/floor.png');

    // Assets sfondi Level 3
    game.load.image('level3_layer3', 'assets/backgrounds/level3/layer3.png'); // Layer 3
    game.load.image('level3_layer2', 'assets/backgrounds/level3/layer2.png'); // Layer 2
    game.load.image('level3_layer1', 'assets/backgrounds/level3/layer1.png'); // Layer 1

    // Assets menu (placeholders)
    game.load.spritesheet('option1', 'assets/menu/Option1.png', 147, 160)
    game.load.spritesheet('option2', 'assets/menu/Option2.png', 147, 160)
    game.load.spritesheet('option3', 'assets/menu/Option3.png', 147, 160)
    game.load.spritesheet('selectionInterfaceIcon', 'assets/menu/SelectionInterfaceIcon.png', 30, 30, 3);
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
var menuButtonIsPressed = false;
var escapeKey;
var oneKey;
var twoKey;
var threeKey;


// Altre variabili
var facing = "right";


// ++++++++++ CREATE ++++++++++

function create() {

    game.world.setBounds(0, 0, 2048, 768);

    // Sfondi di gioco

        // Livello 1

        // Livello 2

        // Livello 3 (circo)
        level3_layer3 = game.add.sprite(0, 0, 'level3_layer3');
        level3_layer2 = game.add.sprite(0, 0, 'level3_layer2');
        level3_layer1 = game.add.sprite(0, 0, 'level3_layer1');

    // Fine-sfondi


    // Selection interface icons
    selectionIcon = game.add.sprite(0, 0, 'selectionInterfaceIcon');
    selectionIcon.fixedToCamera = true;
    selectionIcon.cameraOffset.setTo(0, 0);
    if (optionSelected == 1)
    {
        selectionIcon.frame = 0;
    }
    else if (optionSelected == 2)
    {
        selectionIcon.frame = 1;
    }
    else if (optionSelected == 3)
    {
        selectionIcon.frame = 3;
    }



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

    // Floor
    floor = game.add.physicsGroup();
    floor.create(0, 687, 'floorLevel3');
    floor.setAll('body.immovable', true);
    floor.alpha = 0;
    
    // Platforms
    platforms = game.add.physicsGroup();
    platforms.create(501, 576, 'platform');
    platforms.setAll('body.immovable', true);
    platforms.alpha = 0;

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
    game.physics.arcade.collide(player, floor);

    // Player shadow offset
    shadow.x = player.x+200
    shadow.y = player.y

    // Parallasse sfondi
    level3_layer1.x = game.camera.x*(-0.25);
    level3_layer3.x = game.camera.x*(-0.05);

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
        player.body.velocity.x = (0.85 *  player.body.velocity.x) ;
      }
    else {
        player.body.velocity.x = (0.97 *  player.body.velocity.x) ;
    }

    // MENU

    if (menuButton.isDown) // SE il tasto menuButton è premuto
    {

        if(menuButtonIsPressed === false) // SE il tasto non era GIÀ (!) premuto.
        {
            menuButtonIsPressed = true; // Cambia lo stato della variabile.
            if(menuOpen === false) // SE il menu NON è GIÀ aperto.
            {
                menuOpen = true; // Cambia lo stato della variabile.
                console.log('Menu was opened');
    
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
    
                // Al caricamento del menu, l'opzione selezionata in precedenza appare come tale: vengono impostati i frame delle opzioni.
                if (optionSelected == 1)
                {
                    menuOption1.frame = 0;
                    menuOption2.frame = 1;
                    menuOption3.frame = 1;
                }
                else if (optionSelected == 2)
                {
                    menuOption1.frame = 1;
                    menuOption2.frame = 0;
                    menuOption3.frame = 1;
                }
                else if (optionSelected == 3)
                {
                    menuOption1.frame = 1;
                    menuOption2.frame = 1;
                    menuOption3.frame = 0;
                }
            }
            else if(menuOpen === true) // SE il menu è GIÀ aperto.
            {
                menuOpen = false; // Cambia lo stato della variabile.
                console.log('Menu was closed');
                menuOption1.kill(); // Kill della grafica.
                menuOption2.kill(); // Kill della grafica.
                menuOption3.kill(); // Kill della grafica.
            }
            
        }
        
    } else
    menuButtonIsPressed = false;

    // Funzione che cambia l'opzione selezionata, modificando i frame mostrati.
    function changeOptionHovered() {
        if (optionHovered == 1)
        {
            menuOption1.frame = 0;
            menuOption2.frame = 1;
            menuOption3.frame = 1;
        }
        else if (optionHovered == 2)
        {
            menuOption1.frame = 1;
            menuOption2.frame = 0;
            menuOption3.frame = 1;
        }
        else if (optionHovered == 3)
        {
            menuOption1.frame = 1;
            menuOption2.frame = 1;
            menuOption3.frame = 0;
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
        if (optionSelected == 1)
        {
            selectionIcon.frame = 0;
        }
        else if (optionSelected == 2)
        {
            selectionIcon.frame = 1;
        }
        else if (optionSelected == 3)
        {
            selectionIcon.frame = 3;
        }
    }
}

function render () {
}