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

    // Globali
    game.load.image('globalFloor', 'assets/global/Floor16k.png');
    game.load.image('sfondoAzzurro', 'assets/global/Lightblue background.png');

    game.load.image('ControlsTutorial_UI', 'assets/global/ControlsTutorial.png');

    game.load.image('modulo2x2', 'assets/global/Modulo 2x2.png');

    game.load.image('platform2x1', 'assets/global/Size=2x1.png');
    game.load.image('platform3x1', 'assets/global/Size=3x1.png');
    game.load.image('platform4x1', 'assets/global/Size=4x1.png');
    game.load.image('platform5x1', 'assets/global/Size=5x1.png');
    game.load.image('platform6x1', 'assets/global/Size=6x1.png');

    game.load.image('death-gap-2x', 'assets/global/Size=2xdeath-gap.png')
    game.load.image('death-gap-3x', 'assets/global/Size=3xdeath-gap.png')
    game.load.image('death-gap-4x', 'assets/global/Size=4xdeath-gap.png')
    game.load.image('death-gap-5x', 'assets/global/Size=5xdeath-gap.png')
    game.load.image('death-gap-6x', 'assets/global/Size=6xdeath-gap.png')
    game.load.image('death-gap-7x', 'assets/global/Size=7xdeath-gap.png')
    // Livello 1
    game.load.image('placeholder_CasaGeppetto', 'assets/levelOne/Placeholder Casa di Geppetto.png');
    game.load.image('interactionPoint', 'assets/levelOne/interactionPoint.png');
    game.load.image('interactionPointLabel', 'assets/levelOne/interactionPointLabel.png');
    game.load.image('level1_casa1', 'assets/levelOne/casa1.png');
    game.load.image('level1_casa2', 'assets/levelOne/casa2.png');
    game.load.image('level1_casa3', 'assets/levelOne/casa3_balconies.png');
    game.load.image('level1_casa3_balcone', 'assets/levelOne/casa3_balcone3x2.png');
    game.load.image('level1_casa3_hitbox', 'assets/levelOne/casa3_hitbox.png');
    game.load.image('level1_casa4', 'assets/levelOne/casa4_SenzaTettoia.png');
    game.load.image('level1_casa4_tettoia', 'assets/levelOne/casa4_tettoia.png');
    game.load.image('level1_casa4_supportoTettoia', 'assets/levelOne/casa4_SupportoTettoia.png');



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

// Variabili sprite
var player;
var shadow; // per camera tracking con offset
var platforms; // dal codice di base di Phaser. Variabile non utilizzata nel Livello 1.

// Variabili di gioco
var showingControlsTutorial = true;
var facing = "right";
var jumpPower = 0;
var onInteraction = false;
var interactionEnabled = false;
var interactionPointLabelShown = false;

// Variabili scelta livello
var levelPlaying = 1;

// Variabili globali
var controlsTutorialUI;
var sfondoAzzurro;
var deathGap2x;
var deathGap3x;
var deathGap4x;
var deathGap5x;
var deathGap6x;
var deathGap7x;

// Variabili livello 1
var level1_floor;
var level1_platform2x1;
var level1_platform3x1;
var level1_platform4x1;
var level1_platform5x1;
var level1_platform6x1;
var level1_modulo2x2;
var placeholder_CasaGeppetto;
var interactionPoint;
var interactionPointLabel;
var level1_casa1;
var level1_casa2;
var level1_casa3;
var level1_casa3_balcone;
var level1_casa3_hitbox;
var level1_casa4;
var level1_casa4_supportoTettoia;
var level1_casa4_tettoia;


// Variabili livello 3
var floor;
var level3_layer1;
var level3_layer2;
var level3_layer3;

// Variabili menu
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


// ++++++++++ CREATE ++++++++++

function create() {

    game.world.setBounds(0, 0, 20000, 2304);

    // Elementi livelli

        // Livello 1
        if(levelPlaying == 1)
        {
            sfondoAzzurro = game.add.sprite(0, 0, 'sfondoAzzurro');

            level1_floor = game.add.physicsGroup();
            level1_floor.create(0, 2200, 'globalFloor');
            level1_floor.create(16000, 2200, 'globalFloor');
            level1_floor.setAll('body.immovable', true);

            placeholder_CasaGeppetto = game.add.sprite(0, 1853, 'placeholder_CasaGeppetto');

            interactionPoint = game.add.sprite(60, 2113, 'interactionPoint');
            game.physics.arcade.enable(interactionPoint); // attiva la possibilità di usare l'overlap


            level1_modulo2x2 = game.add.physicsGroup();
            level1_modulo2x2.create(550, 2100, 'modulo2x2');
            level1_modulo2x2.create(3750, 2100, 'modulo2x2');
            level1_modulo2x2.create(4450, 2100, 'modulo2x2');
            level1_modulo2x2.create(4650, 2100, 'modulo2x2');
            level1_modulo2x2.create(4650, 2000, 'modulo2x2');
            level1_modulo2x2.create(4900, 2100, 'modulo2x2');
            level1_modulo2x2.create(16000, 2100, 'modulo2x2');
            level1_modulo2x2.setAll('body.immovable', true);

            level1_platform2x1 = game.add.physicsGroup();
            level1_platform2x1.create(3900, 1900, 'platform2x1');
            level1_platform2x1.setAll('body.immovable', true);

            level1_platform5x1 = game.add.physicsGroup();
            level1_platform5x1.create(4100, 1700, 'platform5x1');
            level1_platform5x1.setAll('body.immovable', true);

            level1_platform6x1 = game.add.physicsGroup();
            level1_platform6x1.create(800, 1950, 'platform6x1');
            level1_platform6x1.create(1250, 1800, 'platform6x1');
            level1_platform6x1.create(3600, 1600, 'platform6x1');
            level1_platform6x1.setAll('body.immovable', true);

            deathGap3x = game.add.physicsGroup();
            deathGap3x.create(2200, 2200, 'death-gap-3x');
            deathGap3x.setAll('body.immovable', true);

            deathGap4x = game.add.physicsGroup();
            deathGap4x.create(1550, 2200,'death-gap-4x');
            deathGap4x.setAll('body.immovable', true);

            deathGap5x = game.add.physicsGroup();
            deathGap5x.create(2750, 2200,'death-gap-5x');
            deathGap5x.setAll('body.immovable', true);

            level1_casa1 = game.add.physicsGroup();
            level1_casa1.create(1725, 1650, 'level1_casa1');
            level1_casa1.setAll('body.immovable', true);

            level1_casa2 = game.add.physicsGroup();
            level1_casa2.create(2300, 1800, 'level1_casa2');
            level1_casa2.setAll('body.immovable', true);

            level1_casa3 = game.add.physicsGroup();
            level1_casa3.create(2850, 1450, 'level1_casa3');
            level1_casa3.setAll('body.immovable', true);

            level1_casa3_hitbox = game.add.physicsGroup();
            level1_casa3_hitbox.create(3000, 1450, 'level1_casa3_hitbox');
            level1_casa3_hitbox.setAll('body.immovable', true);
            level1_casa3_hitbox.alpha = 0;


            level1_casa3_balcone = game.add.physicsGroup();
            level1_casa3_balcone.create(2850, 1650, 'level1_casa3_balcone');
            level1_casa3_balcone.create(3400, 1900, 'level1_casa3_balcone');
            level1_casa3_balcone.setAll('body.immovable', true);

            level1_casa4 = game.add.physicsGroup();
            level1_casa4.create(5400, 1700, 'level1_casa4');
            level1_casa4.setAll('body.immovable', true);

            level1_casa4_supportoTettoia = game.add.physicsGroup();
            level1_casa4_supportoTettoia.create(5167, 2000, 'level1_casa4_supportoTettoia');
            level1_casa4_supportoTettoia.setAll('body.immovable', true);

            level1_casa4_tettoia = game.add.physicsGroup();
            level1_casa4_tettoia.create(5150, 1950, 'level1_casa4_tettoia');
            level1_casa4_tettoia.setAll('body.immovable', true);
        }

        // Livello 2

        // Livello 3 (circo)
        if(levelPlaying == 3)
        {
            level3_layer3 = game.add.sprite(0, 0, 'level3_layer3');
            level3_layer2 = game.add.sprite(0, 0, 'level3_layer2');
            level3_layer1 = game.add.sprite(0, 0, 'level3_layer1');

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

        }


    // Selection interface icons – Mostra all'interno della UI di gioco l'icona relativa alla selezione effettuata nel menu.
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
    player = game.add.sprite(450, 1800, 'pinocchio');
    player.animations.add('walkR', [0, 1, 2, 3, 4, 5]); // Animazione camminata verso dx
    player.animations.add('walkL', [6, 7, 8, 9, 10, 11]); // Animazione camminata verso sx
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 2000;
    player.body.setSize(80, 100, 20, 0); // Dimensione hitbox (questa linea funziona solo se inserita dopo 'game.physics.arcade.enable')

    // Tutorial
    if(showingControlsTutorial == true)
    {
        controlsTutorialUI = game.add.sprite(0, 0, 'ControlsTutorial_UI');
        controlsTutorialUI.fixedToCamera = true;
        controlsTutorialUI.cameraOffset.setTo(0, 0);
    }

    // Player shadow (per camera tracking con offset). NOTA: Vedi update() per i valori di offset x,y rispetto al player.
    shadow = game.add.sprite(100+200, 200, 'player');
    shadow.alpha = 0;

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

    //  MenuButtonTimer – [non in uso]
    // menuButtonTimer = game.time.create(false);

    //  Set a TimerEvent to occur after 2 seconds – [non in uso]
    // menuButtonTimer.loop(2000, updateCounter, this);
}

function updateCounter() { // [non in uso]
    total++;
}

function update () {

    // TIME
    gameStopWatch = Math.floor((game.time.time-timeWhenLoaded)/1000);

    // Collide
    game.physics.arcade.collide(player, level1_floor);
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(player, floor);
    game.physics.arcade.collide(player, level1_modulo2x2);
    game.physics.arcade.collide(player, level1_platform2x1);
    game.physics.arcade.collide(player, level1_platform5x1);
    game.physics.arcade.collide(player, level1_platform6x1);
    game.physics.arcade.collide(player, level1_casa1);
    game.physics.arcade.collide(player, level1_casa2);
    game.physics.arcade.collide(player, level1_casa3_hitbox);
    game.physics.arcade.collide(player, level1_casa3_balcone);
    game.physics.arcade.collide(player, level1_casa4_tettoia);

    // Player shadow offset
    shadow.x = player.x+350;
    shadow.y = player.y+200;

    // Parallasse sfondi
    if(levelPlaying == 3)
    {
        level3_layer1.x = game.camera.x*(-0.25);
        level3_layer3.x = game.camera.x*(-0.05);
    }


    // Interaction point
    game.physics.arcade.overlap(player, interactionPoint, enableInteraction);

    // Controls
    if (cursors.left.isDown && menuOpen == false && showingControlsTutorial == false) // Camminata verso sinistra
    {
        player.body.velocity.x = -300;
        if (facing !== "left") // Se il player è rivolto a sinistra
        {
            facing = "left";
        }
    }

    else if (cursors.right.isDown && menuOpen == false && showingControlsTutorial == false) // Camminata verso destra
    {
        player.body.velocity.x = 300;
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

//Animazioni
if (player.body.velocity.x > 100 && (player.body.onFloor() || player.body.touching.down)) {  //Camminata dx
  player.animations.play('walkR', 10, true);
}

if (player.body.velocity.x < -100 && (player.body.onFloor() || player.body.touching.down)) {  //Camminata sx
  player.animations.play('walkL', 10, true);
}

if (player.body.velocity.y < -10 && facing === "right") {  //salto dx
  player.frame = 3;
}
if (player.body.velocity.y < -10 && facing === "left") {  //Salto sx
  player.frame = 8;
}




    // Salto con funzione di potenza variabile
    if (jumpButton.isDown && menuOpen == false && (player.body.onFloor() || player.body.touching.down || (jumpPower > 0 && jumpPower < 4)))
    {
        if(showingControlsTutorial == true)
        {
            showingControlsTutorial = false;
            controlsTutorialUI.kill();
        }
        player.body.velocity.y = -650;
        jumpPower = jumpPower + .3;
    }
    else
    {
        jumpPower = 0;
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

        if(menuButtonIsPressed === false && interactionEnabled === true) // SE il tasto non era GIÀ (!) premuto.
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
            selectionIcon.frame = 2;
        }
    }
}


function enableInteraction() {
    if(onInteraction === false)
    {
        onInteraction = true;
        interactionEnabled = true;
        console.log("Interazione possibile");
        if (interactionPointLabelShown == false)
        {
            interactionPointLabelShown = true;
            interactionPointLabel = game.add.sprite(38, 2036, 'interactionPointLabel');
        }

    }
    else
    {
        onInteraction = false;
        interactionEnabled = false;
        interactionPointLabelShown = false;
        interactionPointLabel.kill();
    }

}

function render () {
}
