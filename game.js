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



var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'main-frame', { preload: preload, create: create, update: update, render: render });

// ++++++++++ PRELOAD ++++++++++

function preload() {

  game.load.crossOrigin = 'anonymous';

  game.load.spritesheet('pinocchio', 'assets/sprites/pinocchio/pinocchio_spritesheet3.png', 200, 150, 120);
  game.load.image('shadow', 'assets/sprites/pinocchio/pinocchio_v1.png');

  game.load.spritesheet('dust', 'assets/sprites/dust_spritesheet1.png', 200, 150, 10);

  game.load.spritesheet('marionettaJug', 'assets/sprites/marionettaJug1.png', 300, 225, 40);
  game.load.spritesheet('marionettaSniper', 'assets/sprites/spritesheet_enemySniper.png', 150, 100, 40);
  game.load.image('marionettaBomba', 'assets/sprites/marionetta-bomba.png');

  game.load.image('bullet', 'assets/sprites/Pallino_rosso.png'); //bullet placeholder

  // Globali
  game.load.image('globalFloor', 'assets/global/Floor16k.png');
  game.load.image('sfondoAzzurro', 'assets/global/Lightblue background.png');

  game.load.image('ControlsTutorial_UI', 'assets/global/ControlsTutorial.png');

  game.load.image('modulo1x1', 'assets/global/Modulo1x1.png');
  game.load.image('modulo2x2', 'assets/global/Modulo2x2.png');
  game.load.image('modulo2x4', 'assets/global/Modulo2x4.png');

  game.load.image('platform2x1', 'assets/global/Size=2x1.png');
  game.load.image('platform3x1', 'assets/global/Size=3x1.png');
  game.load.image('platform4x1', 'assets/global/Size=4x1.png');
  game.load.image('platform5x1', 'assets/global/Size=5x1.png');
  game.load.image('platform6x1', 'assets/global/Size=6x1.png');

  // Interfaccia
  game.load.image('healthFull', 'assets/interface/healthFull.png');
  game.load.image('healthHalf', 'assets/interface/healthHalf.png');

  // Level 1
  game.load.image('placeholder_CasaGeppetto', 'assets/levelOne/Placeholder Casa di Geppetto.png');
  game.load.image('interactionPoint', 'assets/levelOne/interactionPoint.png');
  game.load.image('interactionPointLabel', 'assets/levelOne/interactionPointLabel.png');
  game.load.image('level1_calpestabile_parte1', 'assets/levelOne/calpestabile_parte1.png');
  game.load.image('level1_calpestabile_parte2', 'assets/levelOne/calpestabile_parte2.png');

  // Level 1 /Floor
  game.load.image('level1_floor1', 'assets/levelOne/floor/1.png');
  game.load.image('level1_floor2', 'assets/levelOne/floor/2.png');
  game.load.image('level1_floor3', 'assets/levelOne/floor/3.png');
  game.load.image('level1_floor4', 'assets/levelOne/floor/4.png');
  game.load.image('level1_floor5', 'assets/levelOne/floor/5.png');
  game.load.image('level1_floor6', 'assets/levelOne/floor/6.png');
  game.load.image('level1_floor7', 'assets/levelOne/floor/7.png');
  game.load.image('level1_floor8', 'assets/levelOne/floor/8.png');
  game.load.image('level1_floor9', 'assets/levelOne/floor/9.png');
  game.load.image('level1_floor10', 'assets/levelOne/floor/10.png');
  game.load.image('level1_floor11', 'assets/levelOne/floor/11.png');
  game.load.image('level1_floor12', 'assets/levelOne/floor/12.png');
  game.load.image('level1_floor13', 'assets/levelOne/floor/13.png');
  game.load.image('level1_floor14', 'assets/levelOne/floor/14.png');
  game.load.image('level1_floor15', 'assets/levelOne/floor/15.png');
  game.load.image('level1_floor16', 'assets/levelOne/floor/16.png');
  game.load.image('level1_floor17', 'assets/levelOne/floor/17.png');
  game.load.image('level1_floor18', 'assets/levelOne/floor/18.png');
  game.load.image('level1_floor19', 'assets/levelOne/floor/19.png');
  game.load.image('level1_floor20', 'assets/levelOne/floor/20.png');
  game.load.image('level1_floor21', 'assets/levelOne/floor/21.png');
  game.load.image('level1_floor22', 'assets/levelOne/floor/22.png');

  // Level 1 /Houses
  game.load.image('level1_house1', 'assets/levelOne/houses/Casa 1.png');
  game.load.image('level1_house2', 'assets/levelOne/houses/Casa 2.png');
  game.load.image('level1_house3', 'assets/levelOne/houses/Casa 3.png');
  game.load.image('level1_house4', 'assets/levelOne/houses/Casa 4.png');
  game.load.image('level1_house5', 'assets/levelOne/houses/Casa 5.png');
  game.load.image('level1_house6', 'assets/levelOne/houses/Casa 6.png');
  game.load.image('level1_house7', 'assets/levelOne/houses/Casa 7.png');
  game.load.image('level1_house8', 'assets/levelOne/houses/Casa 8.png');
  game.load.image('level1_house9', 'assets/levelOne/houses/Casa 9.png');
  game.load.image('level1_house10', 'assets/levelOne/houses/Casa 10.png');
  game.load.image('level1_house11', 'assets/levelOne/houses/Casa 11.png');
  game.load.image('level1_house12', 'assets/levelOne/houses/Casa 12.png');
  game.load.image('level1_house13', 'assets/levelOne/houses/Casa 13.png');
  game.load.image('level1_house14', 'assets/levelOne/houses/Casa 14.png');
  game.load.image('level1_house15', 'assets/levelOne/houses/Casa 15.png');
  game.load.image('level1_house16', 'assets/levelOne/houses/Casa 16.png');
  game.load.image('level1_house17', 'assets/levelOne/houses/Casa 17.png');
  game.load.image('level1_house18', 'assets/levelOne/houses/Casa 18.png');
  game.load.image('level1_house19', 'assets/levelOne/houses/Casa 19.png');

  // Level 2
  game.load.image('level2_calpestabile_parte1', 'assets/levelTwo/level2_calpestabile_parte1.png');
  game.load.image('level2_calpestabile_parte2', 'assets/levelTwo/level2_calpestabile_parte2.png');
  game.load.image('level2_collineRosse', 'assets/levelTwo/colline rosse2@72x.png');
  game.load.image('level2_collineGialle', 'assets/levelTwo/colline gialle2@72x.png');
  game.load.image('level2_cielo', 'assets/levelTwo/cielo2@72x.png');
  game.load.image('level2_ruota_supporto', 'assets/levelTwo/ruota_supporto.png');
  game.load.image('level2_ruota_centrale', 'assets/levelTwo/ruota_centrale_.png');
  game.load.image('level2_ruota_cabina', 'assets/levelTwo/ruota_cabina.png');
  game.load.image('level2_mongolfiera', 'assets/levelTwo/mongolfiera.png');

  // Level 2 /Floor
  game.load.image('level2_floor1', 'assets/levelTwo/floor/1.png');
  game.load.image('level2_floor2', 'assets/levelTwo/floor/2.png');
  game.load.image('level2_floor3', 'assets/levelTwo/floor/3.png');
  game.load.image('level2_floor4', 'assets/levelTwo/floor/4.png');
  game.load.image('level2_floor5', 'assets/levelTwo/floor/5.png');
  game.load.image('level2_floor6', 'assets/levelTwo/floor/6.png');
  game.load.image('level2_floor7', 'assets/levelTwo/floor/7.png');
  game.load.image('level2_floor8', 'assets/levelTwo/floor/8.png');
  game.load.image('level2_floor9', 'assets/levelTwo/floor/9.png');
  game.load.image('level2_floor10', 'assets/levelTwo/floor/10.png');
  game.load.image('level2_floor11', 'assets/levelTwo/floor/11.png');
  game.load.image('level2_floor12', 'assets/levelTwo/floor/12.png');
  game.load.image('level2_floor13', 'assets/levelTwo/floor/13.png');
  game.load.image('level2_floor14', 'assets/levelTwo/floor/14.png');
  game.load.image('level2_floor15', 'assets/levelTwo/floor/15.png');
  game.load.image('level2_floor16', 'assets/levelTwo/floor/16.png');
  game.load.image('level2_floor17', 'assets/levelTwo/floor/17.png');
  game.load.image('level2_floor18', 'assets/levelTwo/floor/18.png');
  game.load.image('level2_floor19', 'assets/levelTwo/floor/19.png');
  game.load.image('level2_floor20', 'assets/levelTwo/floor/20.png');
  game.load.image('level2_floor21', 'assets/levelTwo/floor/21.png');

  // Level 3
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
var shadow; // per camera-tracking con offset
var platforms; // dal codice di base di Phaser. Variabile non utilizzata nel Livello 1.
var enemyBomb;
var enemyJug;
var enemySniper;
var dust; // sprite polvere del salto
var dustVar;

// Variabili di gioco
var facing = "right";
var jumpPower = 0;
var onInteraction = false;

var enableUserMovement = true;
var autoPilot = false;
var spawning = true;
var spawningTimer = 0;

var interactionEnabled = false;
var interactionPointLabelShown = false;
var gameOverTimer = 0;
var gameWasOver = false;

// Variabili enemyBomb
enemyBomb_0_Direction = 'right';

// Variabili cambio livello
var levelPlaying = 1;
var timerLivello1Livello2 = 0;

// Variabili grafiche
var healthFull1;
var healthFull2;
var healthFull3;
var healthHalf1;
var healthHalf2;
var healthHalf3;
var controlsTutorialUI;
var sfondoAzzurro;

// Variabili globali
var modulo1x1;
var modulo2x2;
var modulo2x4;

// Variabili livello 1
var level1_floor;
var level1_houses;
var level1_calpestabile_parte1;
var level1_calpestabile_parte2;

var placeholder_CasaGeppetto;
var interactionPoint;
var interactionPointLabel;

// Variabili livello 2
var level2_calpestabile_parte1;
var level2_calpestabile_parte2;
var level2_cielo;
var level2_collineRosse;
var level2_collineGialle;

var level2_floor;

var level2_ruota1_supporto;
var level2_ruota1_centrale;
var level2_ruota1_cabina;
var level2_ruota1_cabinaA;
var level2_ruota1_cabinaB;
var level2_ruota1_cabinaC;
var level2_ruota1_cabinaD;
var level2_ruota1_cabinaE;
var level2_ruota1_cabinaF;
var level2_ruota1_cabinaG;
var level2_ruota1_cabinaH;

var level2_ruota2_supporto;
var level2_ruota2_centrale;
var level2_ruota2_cabina;
var level2_ruota2_cabinaA;
var level2_ruota2_cabinaB;
var level2_ruota2_cabinaC;
var level2_ruota2_cabinaD;
var level2_ruota2_cabinaE;
var level2_ruota2_cabinaF;
var level2_ruota2_cabinaG;
var level2_ruota2_cabinaH;

var level2_ruota3_supporto;
var level2_ruota3_centrale;
var level2_ruota3_cabina;
var level2_ruota3_cabinaA;
var level2_ruota3_cabinaB;
var level2_ruota3_cabinaC;
var level2_ruota3_cabinaD;
var level2_ruota3_cabinaE;
var level2_ruota3_cabinaF;
var level2_ruota3_cabinaG;
var level2_ruota3_cabinaH;

var angleCounterA = 45;
var angleCounterB = 22.5;
var angleCounterC = 0;
var angleCounterD = 157.5;
var angleCounterE = 135;
var angleCounterF = 112.5;
var angleCounterG = 90;
var angleCounterH = 67.5;

var level2_mongolfiera1;
var level2_mongolfiera2;

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

//Armi
//var bullets;
//var bulletTime = 0;
var gun1;
var bulletPool = 10;
var pickAmmo;

// Keys & input
var cursors;
var jumpButton;
var menuButton;
var menuButtonIsPressed = false;
var escapeKey;
var oneKey;
var twoKey;
var threeKey;
var fireButton;

//Animazioni (da eiminare se possibile)
var animDropR;
var animDropL;


var isFiring = false;
var isJumping = false;
var dustJump = false;

// ++++++++++ CREATE ++++++++++

function create() {
  console.log('Running create() with levelPlaying = '+ levelPlaying + '...')

  game.world.setBounds(0, 0, 20000, 2504);

  healthFull1 = game.add.sprite(50, 50, 'healthFull');
  healthFull1.fixedToCamera = true;
  healthFull1.scale.setTo(0.75, 0.75);
  healthFull2 = game.add.sprite(100, 50, 'healthFull');
  healthFull2.fixedToCamera = true;
  healthFull2.scale.setTo(0.75, 0.75);
  healthFull3 = game.add.sprite(150, 50, 'healthFull');
  healthFull3.fixedToCamera = true;
  healthFull3.scale.setTo(0.75, 0.75);
  healthHalf1 = game.add.sprite(50, 50, 'healthHalf');
  healthHalf1.fixedToCamera = true;
  healthHalf1.scale.setTo(0.75, 0.75);
  healthHalf2 = game.add.sprite(100, 50, 'healthHalf');
  healthHalf2.fixedToCamera = true;
  healthHalf2.scale.setTo(0.75, 0.75);
  healthHalf3 = game.add.sprite(150, 50, 'healthHalf');
  healthHalf3.fixedToCamera = true;
  healthHalf3.scale.setTo(0.75, 0.75);

  // BringToTop() alla fine di create().

  // Elementi modulari globali
  modulo1x1 = game.add.physicsGroup();
  modulo2x2 = game.add.physicsGroup();
  modulo2x4 = game.add.physicsGroup();

  // Livello 1
  if(levelPlaying == 1)
  {
    sfondoAzzurro = game.add.sprite(0, 0, 'sfondoAzzurro');

    // Calpestabile livello 1
    level1_calpestabile_parte1 = game.add.sprite(0, 0, 'level1_calpestabile_parte1');

    // Pavimento livello 1
    level1_floor = game.add.physicsGroup();
    level1_floor.create(0, 2200, 'level1_floor1');
    level1_floor.create(2350, 2200, 'level1_floor2');
    level1_floor.create(3000, 2200, 'level1_floor3');
    level1_floor.create(4100, 2200, 'level1_floor4');
    level1_floor.create(4650, 2200, 'level1_floor5');
    level1_floor.create(4900, 2200, 'level1_floor6');
    level1_floor.create(6350, 2200, 'level1_floor7');
    level1_floor.create(7000, 2200, 'level1_floor8');
    level1_floor.create(7650, 2200, 'level1_floor9');
    level1_floor.create(9300, 2200, 'level1_floor10');
    level1_floor.create(10350, 2200, 'level1_floor11');
    level1_floor.create(12300, 2200, 'level1_floor12');
    level1_floor.create(12750, 2200, 'level1_floor13');
    level1_floor.alpha = 0; // Controllo opacità // 0 = opacità 0% ; 1 = opacità 100%
    level1_floor.setAll('body.immovable', true);

    // Moduli 1x1 (piattaforme e tetti)
    modulo1x1.create(1350, 1950, 'modulo1x1');
    modulo1x1.create(1400, 1950, 'modulo1x1');
    modulo1x1.create(1450, 1950, 'modulo1x1');
    modulo1x1.create(1500, 1950, 'modulo1x1');
    modulo1x1.create(1550, 1950, 'modulo1x1');
    modulo1x1.create(1600, 1950, 'modulo1x1');

    modulo1x1.create(1800, 1800, 'modulo1x1');
    modulo1x1.create(1850, 1800, 'modulo1x1');
    modulo1x1.create(1900, 1800, 'modulo1x1');
    modulo1x1.create(1950, 1800, 'modulo1x1');
    modulo1x1.create(2000, 1800, 'modulo1x1');
    modulo1x1.create(2050, 1800, 'modulo1x1');

    modulo1x1.create(2845, 1650, 'modulo1x1');
    modulo1x1.create(2895, 1650, 'modulo1x1');
    modulo1x1.create(2845, 1650, 'modulo1x1');

    modulo1x1.create(3400, 1900, 'modulo1x1');
    modulo1x1.create(3450, 1900, 'modulo1x1');
    modulo1x1.create(3500, 1900, 'modulo1x1');

    modulo1x1.create(3500, 1700, 'modulo1x1');
    modulo1x1.create(3550, 1700, 'modulo1x1');
    modulo1x1.create(3600, 1700, 'modulo1x1');

    modulo1x1.create(3650, 1550, 'modulo1x1');
    modulo1x1.create(3700, 1550, 'modulo1x1');
    modulo1x1.create(3750, 1550, 'modulo1x1');

    modulo1x1.create(5150, 1950, 'modulo1x1');
    modulo1x1.create(5200, 1950, 'modulo1x1');
    modulo1x1.create(5250, 1950, 'modulo1x1');
    modulo1x1.create(5300, 1950, 'modulo1x1');
    modulo1x1.create(5350, 1950, 'modulo1x1');

    modulo1x1.create(5400, 1700, 'modulo1x1');
    modulo1x1.create(6000, 1700, 'modulo1x1');

    modulo1x1.create(5150, 1750, 'modulo1x1');
    modulo1x1.create(5200, 1750, 'modulo1x1');

    modulo1x1.create(6300, 1800, 'modulo1x1');
    modulo1x1.create(6750, 1800, 'modulo1x1');

    modulo1x1.create(8050, 1700, 'modulo1x1');
    modulo1x1.create(8100, 1700, 'modulo1x1');
    modulo1x1.create(8150, 1700, 'modulo1x1');

    modulo1x1.create(8350, 1800, 'modulo1x1');
    modulo1x1.create(8400, 1800, 'modulo1x1');
    modulo1x1.create(8450, 1800, 'modulo1x1');

    modulo1x1.create(9250, 1750, 'modulo1x1');
    modulo1x1.create(9700, 1750, 'modulo1x1');

    modulo1x1.create(9900, 1900, 'modulo1x1');
    modulo1x1.create(9950, 1900, 'modulo1x1');
    
    modulo1x1.create(10100, 2000, 'modulo1x1');
    modulo1x1.create(10150, 2000, 'modulo1x1');
    
    modulo1x1.create(10950, 1750, 'modulo1x1');
    modulo1x1.create(11000, 1750, 'modulo1x1');
    modulo1x1.create(11050, 1750, 'modulo1x1');
    
    modulo1x1.create(11000, 1950, 'modulo1x1');
    modulo1x1.create(11050, 1950, 'modulo1x1');
    modulo1x1.create(11100, 1950, 'modulo1x1');
    modulo1x1.create(11150, 1950, 'modulo1x1');
    modulo1x1.create(11200, 1950, 'modulo1x1');
    modulo1x1.create(11250, 1950, 'modulo1x1');
    
    modulo1x1.create(11250, 1700, 'modulo1x1');
    modulo1x1.create(11700, 1700, 'modulo1x1');

    modulo1x1.create(11850, 1900, 'modulo1x1');
    modulo1x1.create(11900, 1900, 'modulo1x1');

    modulo1x1.setAll('body.immovable', true);

    // Moduli 2x2 (casse singole)
    modulo2x2.create(1100, 2100, 'modulo2x2');
    modulo2x2.create(1800, 2100, 'modulo2x2');
    modulo2x2.create(3750, 2100, 'modulo2x2');
    modulo2x2.create(4450, 2100, 'modulo2x2');
    modulo2x2.create(4895, 2100, 'modulo2x2');
    modulo2x2.create(8100, 2100, 'modulo2x2');
    modulo2x2.create(8400, 2100, 'modulo2x2');
    modulo2x2.create(9850, 2100, 'modulo2x2');
    modulo2x2.create(10800, 2100, 'modulo2x2');
    modulo2x2.create(12000, 2100, 'modulo2x2');
    modulo2x2.create(12295, 2100, 'modulo2x2');
    modulo2x2.setAll('body.immovable', true);

    // Moduli 2x4 (casse doppie)
    modulo2x4.create(4650, 2000, 'modulo2x4');  // <=== sintassi per aggiungere moduli 2x4
    modulo2x4.create(8200, 2000, 'modulo2x4');
    modulo2x4.create(17750, 2000, 'modulo2x4');
    modulo2x4.create(19700, 2000, 'modulo2x4');
    modulo2x4.setAll('body.immovable', true);

    // Case (pareti)
    level1_houses = game.add.physicsGroup();
    level1_houses.create(100, 1700, 'level1_house1');
    level1_houses.create(2345, 1800, 'level1_house2');
    level1_houses.create(2995, 1450, 'level1_house3');
    level1_houses.create(5450, 1700, 'level1_house4');
    level1_houses.create(6345, 1800, 'level1_house5');
    level1_houses.create(6995, 1700, 'level1_house6');
    level1_houses.create(7645, 1500, 'level1_house7');
    level1_houses.create(8500, 1600, 'level1_house8');
    level1_houses.create(9295, 1750, 'level1_house9');
    level1_houses.create(10395, 1900, 'level1_house10');
    level1_houses.create(11300, 1700, 'level1_house11');
    level1_houses.alpha = 0;
    level1_houses.setAll('body.immovable', true);

    // Interaction point (probabilmente verrà tolto ma teniamo finché non si sa con certezza)
    // interactionPoint = game.add.sprite(60, 2113, 'interactionPoint');
    // game.physics.arcade.enable(interactionPoint); // attiva la possibilità di usare l'overlap
  }

  // Livello 2
  if(levelPlaying == 2)
  {
    level2_cielo = game.add.sprite(-1800.8767, 0, 'level2_cielo');
    level2_collineGialle = game.add.sprite(-690.1809, 0, 'level2_collineGialle');
    level2_collineRosse = game.add.sprite(-1800.8767, 0, 'level2_collineRosse');
    level2_calpestabile_parte1 = game.add.sprite(0, 0, 'level2_calpestabile_parte1');
    level2_calpestabile_parte2 = game.add.sprite(11649, 0, 'level2_calpestabile_parte2');

    // Pavimento livello 2
    level2_floor = game.add.physicsGroup();
    level2_floor.create(0, 2200, 'level2_floor1');
    level2_floor.create(1100, 2200, 'level2_floor2');
    level2_floor.create(1750, 2200, 'level2_floor3');
    level2_floor.create(3300, 2200, 'level2_floor4');
    level2_floor.create(4400, 2200, 'level2_floor5');
    level2_floor.create(5350, 2200, 'level2_floor6');
    level2_floor.create(5700, 2200, 'level2_floor7');
    level2_floor.create(6300, 2200, 'level2_floor8');
    level2_floor.create(6750, 2200, 'level2_floor9');
    level2_floor.create(7400, 2200, 'level2_floor10');
    level2_floor.create(7750, 2200, 'level2_floor11');
    level2_floor.create(8500, 2200, 'level2_floor12');
    level2_floor.create(10000, 2200, 'level2_floor13')
    level2_floor.create(11650, 2200, 'level2_floor14')
    level2_floor.create(12300, 2200, 'level2_floor15')
    level2_floor.create(12650, 2200, 'level2_floor16')
    level2_floor.create(13150, 2200, 'level2_floor17')
    level2_floor.create(14400, 2200, 'level2_floor19')
    level2_floor.create(13800, 2200, 'level2_floor18')
    level2_floor.create(14800, 2200, 'level2_floor20')
    level2_floor.create(17850, 2200, 'level2_floor21')
    level2_floor.alpha = 0;
    level2_floor.setAll('body.immovable', true);

    // Moduli 1x1
    modulo1x1.create(1125, 1900, 'modulo1x1');
    modulo1x1.create(1175, 1900, 'modulo1x1');
    modulo1x1.create(1225, 1900, 'modulo1x1');
    modulo1x1.create(1275, 1900, 'modulo1x1');
    modulo1x1.create(1325, 1900, 'modulo1x1');

    modulo1x1.create(1650, 2000, 'modulo1x1');
    modulo1x1.create(1700, 2000, 'modulo1x1');
    modulo1x1.create(1750, 2000, 'modulo1x1');
    modulo1x1.create(1800, 2000, 'modulo1x1');
    modulo1x1.create(1850, 2000, 'modulo1x1');
    modulo1x1.create(1900, 2000, 'modulo1x1');

    modulo1x1.create(3100, 1650, 'modulo1x1');
    modulo1x1.create(3150, 1650, 'modulo1x1');

    modulo1x1.create(3300, 1800, 'modulo1x1');
    modulo1x1.create(3350, 1800, 'modulo1x1');
    modulo1x1.create(3400, 1800, 'modulo1x1');

    modulo1x1.create(3600, 1950, 'modulo1x1');
    modulo1x1.create(3650, 1950, 'modulo1x1');
    modulo1x1.create(3700, 1950, 'modulo1x1');
    modulo1x1.create(3750, 1950, 'modulo1x1');

    modulo1x1.create(3950, 1950, 'modulo1x1');
    modulo1x1.create(4000, 1950, 'modulo1x1');
    modulo1x1.create(4050, 1950, 'modulo1x1');
    modulo1x1.create(4100, 1950, 'modulo1x1');
    modulo1x1.create(4150, 1950, 'modulo1x1');
    modulo1x1.create(4200, 1950, 'modulo1x1');

    modulo1x1.create(4550, 2000, 'modulo1x1');
    modulo1x1.create(4600, 2000, 'modulo1x1');
    modulo1x1.create(4650, 2000, 'modulo1x1');

    modulo1x1.create(4800, 1850, 'modulo1x1');
    modulo1x1.create(4850, 1850, 'modulo1x1');
    modulo1x1.create(4900, 1850, 'modulo1x1');
    modulo1x1.create(4950, 1850, 'modulo1x1');
    modulo1x1.create(5000, 1850, 'modulo1x1');
    modulo1x1.create(5050, 1850, 'modulo1x1');
    modulo1x1.create(5100, 1850, 'modulo1x1');
    modulo1x1.create(5150, 1850, 'modulo1x1');

    modulo1x1.create(5350, 2000, 'modulo1x1');
    modulo1x1.create(5400, 2000, 'modulo1x1');
    modulo1x1.create(5450, 2000, 'modulo1x1');

    modulo1x1.create(6550, 2000, 'modulo1x1');
    modulo1x1.create(6600, 2000, 'modulo1x1');
    modulo1x1.create(6650, 2000, 'modulo1x1');
    modulo1x1.create(6700, 2000, 'modulo1x1');

    modulo1x1.create(7300, 1600, 'modulo1x1');
    modulo1x1.create(7350, 1600, 'modulo1x1');
    modulo1x1.create(7400, 1600, 'modulo1x1');
    modulo1x1.create(7450, 1600, 'modulo1x1');
    modulo1x1.create(7500, 1600, 'modulo1x1');
    modulo1x1.create(7550, 1600, 'modulo1x1');

    modulo1x1.create(7750, 1750, 'modulo1x1');
    modulo1x1.create(7800, 1750, 'modulo1x1');
    modulo1x1.create(7850, 1750, 'modulo1x1');

    modulo1x1.create(8025, 1900, 'modulo1x1');
    modulo1x1.create(8075, 1900, 'modulo1x1');
    modulo1x1.create(8125, 1900, 'modulo1x1');
    modulo1x1.create(8175, 1900, 'modulo1x1');
    modulo1x1.create(8225, 1900, 'modulo1x1');

    modulo1x1.create(8500, 1950, 'modulo1x1');
    modulo1x1.create(8550, 1950, 'modulo1x1');
    modulo1x1.create(8600, 1950, 'modulo1x1');
    modulo1x1.create(8650, 1950, 'modulo1x1');

    modulo1x1.create(9500, 1950, 'modulo1x1');
    modulo1x1.create(9550, 1950, 'modulo1x1');
    modulo1x1.create(9600, 1950, 'modulo1x1');
    modulo1x1.create(9650, 1950, 'modulo1x1');
    modulo1x1.create(9700, 1950, 'modulo1x1');
    modulo1x1.create(9750, 1950, 'modulo1x1');

    modulo1x1.create(9900, 1900, 'modulo1x1');
    modulo1x1.create(9950, 1900, 'modulo1x1');

    modulo1x1.create(10000, 2000, 'modulo1x1');
    modulo1x1.create(10050, 2000, 'modulo1x1');
    modulo1x1.create(10100, 2000, 'modulo1x1');

    modulo1x1.create(11100, 1850, 'modulo1x1');
    modulo1x1.create(11200, 1850, 'modulo1x1');
    modulo1x1.create(11250, 1850, 'modulo1x1');
    modulo1x1.create(11300, 1850, 'modulo1x1');
    modulo1x1.create(11350, 1850, 'modulo1x1');
    modulo1x1.create(11400, 1850, 'modulo1x1');

    modulo1x1.create(11650, 1750, 'modulo1x1');
    modulo1x1.create(11700, 1750, 'modulo1x1');
    modulo1x1.create(11750, 1750, 'modulo1x1');

    modulo1x1.create(11850, 1600, 'modulo1x1');
    modulo1x1.create(11900, 1600, 'modulo1x1');
    modulo1x1.create(11950, 1600, 'modulo1x1');
    modulo1x1.create(12000, 1600, 'modulo1x1');
    modulo1x1.create(12050, 1600, 'modulo1x1');

    modulo1x1.create(12850, 2000, 'modulo1x1');
    modulo1x1.create(12900, 2000, 'modulo1x1');
    modulo1x1.create(12950, 2000, 'modulo1x1');

    modulo1x1.create(13150, 1850, 'modulo1x1');
    modulo1x1.create(13200, 1850, 'modulo1x1');
    modulo1x1.create(13250, 1850, 'modulo1x1');
    modulo1x1.create(13300, 1850, 'modulo1x1');
    modulo1x1.create(13350, 1850, 'modulo1x1');
    modulo1x1.create(13400, 1850, 'modulo1x1');
    modulo1x1.create(13450, 1850, 'modulo1x1');
    modulo1x1.create(13500, 1850, 'modulo1x1');

    modulo1x1.create(13800, 2000, 'modulo1x1');
    modulo1x1.create(13850, 2000, 'modulo1x1');

    modulo1x1.create(14400, 1950, 'modulo1x1');
    modulo1x1.create(14450, 1950, 'modulo1x1');
    modulo1x1.create(14500, 1950, 'modulo1x1');
    modulo1x1.create(14550, 1950, 'modulo1x1');

    modulo1x1.create(14800, 2000, 'modulo1x1');
    modulo1x1.create(14850, 2000, 'modulo1x1');

    modulo1x1.create(17250, 1850, 'modulo1x1');
    modulo1x1.create(17300, 1850, 'modulo1x1');
    modulo1x1.create(17350, 1850, 'modulo1x1');
    modulo1x1.create(17400, 1850, 'modulo1x1');
    modulo1x1.create(17450, 1850, 'modulo1x1');
    modulo1x1.create(17500, 1850, 'modulo1x1');
    modulo1x1.create(17550, 1850, 'modulo1x1');

    modulo1x1.create(17750, 2000, 'modulo1x1');
    modulo1x1.create(17800, 2000, 'modulo1x1');

    modulo1x1.create(17800, 1700, 'modulo1x1');
    modulo1x1.create(17850, 1700, 'modulo1x1');
    modulo1x1.create(17900, 1700, 'modulo1x1');
    modulo1x1.create(17950, 1700, 'modulo1x1');
    modulo1x1.create(18000, 1700, 'modulo1x1');
    modulo1x1.create(18050, 1700, 'modulo1x1');

    modulo1x1.create(18800, 1850, 'modulo1x1');
    modulo1x1.create(18850, 1850, 'modulo1x1');
    modulo1x1.create(18900, 1850, 'modulo1x1');
    modulo1x1.create(18950, 1850, 'modulo1x1');
    modulo1x1.create(19000, 1850, 'modulo1x1');
    modulo1x1.create(19050, 1850, 'modulo1x1');
    modulo1x1.create(19100, 1850, 'modulo1x1');
    modulo1x1.create(19150, 1850, 'modulo1x1');

    modulo1x1.create(19350, 1750, 'modulo1x1');
    modulo1x1.create(19400, 1750, 'modulo1x1');
    modulo1x1.create(19450, 1750, 'modulo1x1');
    modulo1x1.create(19500, 1750, 'modulo1x1');
    modulo1x1.create(19550, 1750, 'modulo1x1');
    modulo1x1.create(19600, 1750, 'modulo1x1');

    modulo1x1.create(19350, 2000, 'modulo1x1');
    modulo1x1.create(19400, 2000, 'modulo1x1');
    modulo1x1.create(19450, 2000, 'modulo1x1');

    modulo1x1.setAll('body.immovable', true);

    // Moduli 2x2
    modulo2x2.create(600, 2100, 'modulo2x2');
    modulo2x2.create(800, 2100, 'modulo2x2');
    modulo2x2.create(800, 2000, 'modulo2x2');
    modulo2x2.create(2950, 2100, 'modulo2x2');
    modulo2x2.create(3300, 2100, 'modulo2x2');
    modulo2x2.create(4400, 2100, 'modulo2x2');
    modulo2x2.create(6100, 2100, 'modulo2x2');
    modulo2x2.create(6300, 2100, 'modulo2x2');
    modulo2x2.create(6300, 2000, 'modulo2x2');
    modulo2x2.create(8800, 2100, 'modulo2x2');
    modulo2x2.create(8800, 2100, 'modulo2x2');
    modulo2x2.create(9200, 2100, 'modulo2x2');
    modulo2x2.create(9200, 2100, 'modulo2x2');
    modulo2x2.create(9300, 2100, 'modulo2x2');
    modulo2x2.create(9300, 2000, 'modulo2x2');
    modulo2x2.create(10750, 2100, 'modulo2x2');
    modulo2x2.create(10850, 2100, 'modulo2x2');
    modulo2x2.create(10850, 2000, 'modulo2x2');
    modulo2x2.create(14200, 2100, 'modulo2x2');
    modulo2x2.create(18000, 2100, 'modulo2x2');
    modulo2x2.create(18450, 2100, 'modulo2x2');
    modulo2x2.create(18550, 2100, 'modulo2x2');
    modulo2x2.create(18550, 2000, 'modulo2x2');
    modulo2x2.create(19700, 2100, 'modulo2x2');
    modulo2x2.create(19700, 2000, 'modulo2x2');
    modulo2x2.setAll('body.immovable', true);

    // Interattivi
    // Ruota 1
    level2_ruota1_supporto = game.add.sprite(2250, 1553, 'level2_ruota_supporto');
    level2_ruota1_centrale = game.add.sprite(2451, 1574, 'level2_ruota_centrale');
    level2_ruota1_centrale.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(level2_ruota1_centrale);

    level2_ruota1_cabinaA = game.add.sprite(2929, 1574, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota1_cabinaA);
    level2_ruota1_cabinaA.body.immovable = true;
    level2_ruota1_cabinaA.anchor.setTo(0.5, 0.5);
    level2_ruota1_cabinaA.body.setSize(176, 20, 0, 0);

    level2_ruota1_cabinaB = game.add.sprite(2790, 1909, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota1_cabinaB);
    level2_ruota1_cabinaB.body.immovable = true;
    level2_ruota1_cabinaB.anchor.setTo(0.5, 0.5);
    level2_ruota1_cabinaB.body.setSize(176, 20, 0, 0);

    level2_ruota1_cabinaC = game.add.sprite(2448, 2050, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota1_cabinaC);
    level2_ruota1_cabinaC.body.immovable = true;
    level2_ruota1_cabinaC.anchor.setTo(0.5, 0.5);
    level2_ruota1_cabinaC.body.setSize(176, 20, 0, 0);

    level2_ruota1_cabinaD = game.add.sprite(2112, 1909, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota1_cabinaD);
    level2_ruota1_cabinaD.body.immovable = true;
    level2_ruota1_cabinaD.anchor.setTo(0.5, 0.5);
    level2_ruota1_cabinaD.body.setSize(176, 20, 0, 0);

    level2_ruota1_cabinaE = game.add.sprite(1969, 1574, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota1_cabinaE);
    level2_ruota1_cabinaE.body.immovable = true;
    level2_ruota1_cabinaE.anchor.setTo(0.5, 0.5);
    level2_ruota1_cabinaE.body.setSize(176, 20, 0, 0);

    level2_ruota1_cabinaF = game.add.sprite(2112, 1239, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota1_cabinaF);
    level2_ruota1_cabinaF.body.immovable = true;
    level2_ruota1_cabinaF.anchor.setTo(0.5, 0.5);
    level2_ruota1_cabinaF.body.setSize(176, 20, 0, 0);

    level2_ruota1_cabinaG = game.add.sprite(2448, 1100, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota1_cabinaG);
    level2_ruota1_cabinaG.body.immovable = true;
    level2_ruota1_cabinaG.anchor.setTo(0.5, 0.5);
    level2_ruota1_cabinaG.body.setSize(176, 20, 0, 0);

    level2_ruota1_cabinaH = game.add.sprite(2790, 1239, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota1_cabinaH);
    level2_ruota1_cabinaH.body.immovable = true;
    level2_ruota1_cabinaH.anchor.setTo(0.5, 0.5);
    level2_ruota1_cabinaH.body.setSize(176, 20, 0, 0);

    // Ruota 2
    level2_ruota2_supporto = game.add.sprite(15151, 1553, 'level2_ruota_supporto');
    level2_ruota2_centrale = game.add.sprite(15351, 1574, 'level2_ruota_centrale');
    level2_ruota2_centrale.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(level2_ruota2_centrale);

    level2_ruota2_cabinaA = game.add.sprite(15831, 1574, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota2_cabinaA);
    level2_ruota2_cabinaA.body.immovable = true;
    level2_ruota2_cabinaA.anchor.setTo(0.5, 0.5);
    level2_ruota2_cabinaA.body.setSize(176, 20, 0, 0);

    level2_ruota2_cabinaB = game.add.sprite(15688, 1909, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota2_cabinaB);
    level2_ruota2_cabinaB.body.immovable = true;
    level2_ruota2_cabinaB.anchor.setTo(0.5, 0.5);
    level2_ruota2_cabinaB.body.setSize(176, 20, 0, 0);

    level2_ruota2_cabinaC = game.add.sprite(15351, 2050, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota2_cabinaC);
    level2_ruota2_cabinaC.body.immovable = true;
    level2_ruota2_cabinaC.anchor.setTo(0.5, 0.5);
    level2_ruota2_cabinaC.body.setSize(176, 20, 0, 0);

    level2_ruota2_cabinaD = game.add.sprite(15014, 1909, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota2_cabinaD);
    level2_ruota2_cabinaD.body.immovable = true;
    level2_ruota2_cabinaD.anchor.setTo(0.5, 0.5);
    level2_ruota2_cabinaD.body.setSize(176, 20, 0, 0);

    level2_ruota2_cabinaE = game.add.sprite(14871, 1574, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota2_cabinaE);
    level2_ruota2_cabinaE.body.immovable = true;
    level2_ruota2_cabinaE.anchor.setTo(0.5, 0.5);
    level2_ruota2_cabinaE.body.setSize(176, 20, 0, 0);

    level2_ruota2_cabinaF = game.add.sprite(15014, 1239, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota2_cabinaF);
    level2_ruota2_cabinaF.body.immovable = true;
    level2_ruota2_cabinaF.anchor.setTo(0.5, 0.5);
    level2_ruota2_cabinaF.body.setSize(176, 20, 0, 0);

    level2_ruota2_cabinaG = game.add.sprite(15351, 1100, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota2_cabinaG);
    level2_ruota2_cabinaG.body.immovable = true;
    level2_ruota2_cabinaG.anchor.setTo(0.5, 0.5);
    level2_ruota2_cabinaG.body.setSize(176, 20, 0, 0);

    level2_ruota2_cabinaH = game.add.sprite(15688, 1239, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota2_cabinaH);
    level2_ruota2_cabinaH.body.immovable = true;
    level2_ruota2_cabinaH.anchor.setTo(0.5, 0.5);
    level2_ruota2_cabinaH.body.setSize(176, 20, 0, 0);

    // Ruota 3
    level2_ruota3_supporto = game.add.sprite(16301, 1553, 'level2_ruota_supporto');
    level2_ruota3_centrale = game.add.sprite(16501, 1574, 'level2_ruota_centrale');
    level2_ruota3_centrale.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(level2_ruota3_centrale);

    level2_ruota3_cabinaA = game.add.sprite(16981, 1574, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota3_cabinaA);
    level2_ruota3_cabinaA.body.immovable = true;
    level2_ruota3_cabinaA.anchor.setTo(0.5, 0.5);
    level2_ruota3_cabinaA.body.setSize(176, 20, 0, 0);

    level2_ruota3_cabinaB = game.add.sprite(16838, 1909, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota3_cabinaB);
    level2_ruota3_cabinaB.body.immovable = true;
    level2_ruota3_cabinaB.anchor.setTo(0.5, 0.5);
    level2_ruota3_cabinaB.body.setSize(176, 20, 0, 0);

    level2_ruota3_cabinaC = game.add.sprite(16501, 2050, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota3_cabinaC);
    level2_ruota3_cabinaC.body.immovable = true;
    level2_ruota3_cabinaC.anchor.setTo(0.5, 0.5);
    level2_ruota3_cabinaC.body.setSize(176, 20, 0, 0);

    level2_ruota3_cabinaD = game.add.sprite(16164, 1909, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota3_cabinaD);
    level2_ruota3_cabinaD.body.immovable = true;
    level2_ruota3_cabinaD.anchor.setTo(0.5, 0.5);
    level2_ruota3_cabinaD.body.setSize(176, 20, 0, 0);

    level2_ruota3_cabinaE = game.add.sprite(16021, 1574, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota3_cabinaE);
    level2_ruota3_cabinaE.body.immovable = true;
    level2_ruota3_cabinaE.anchor.setTo(0.5, 0.5);
    level2_ruota3_cabinaE.body.setSize(176, 20, 0, 0);

    level2_ruota3_cabinaF = game.add.sprite(16164, 1239, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota3_cabinaF);
    level2_ruota3_cabinaF.body.immovable = true;
    level2_ruota3_cabinaF.anchor.setTo(0.5, 0.5);
    level2_ruota3_cabinaF.body.setSize(176, 20, 0, 0);

    level2_ruota3_cabinaG = game.add.sprite(16501, 1100, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota3_cabinaG);
    level2_ruota3_cabinaG.body.immovable = true;
    level2_ruota3_cabinaG.anchor.setTo(0.5, 0.5);
    level2_ruota3_cabinaG.body.setSize(176, 20, 0, 0);

    level2_ruota3_cabinaH = game.add.sprite(16838, 1239, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota3_cabinaH);
    level2_ruota3_cabinaH.body.immovable = true;
    level2_ruota3_cabinaH.anchor.setTo(0.5, 0.5);
    level2_ruota3_cabinaH.body.setSize(176, 20, 0, 0);

    // Mongolfiera
    level2_mongolfiera1 = game.add.sprite(6700, 1218, 'level2_mongolfiera');
    game.physics.arcade.enable(level2_mongolfiera1);
    level2_mongolfiera1.body.setSize(105, 100, 277, 883);
    level2_mongolfiera1.body.immovable = true;

    level2_mongolfiera2 = game.add.sprite(12050, 1218, 'level2_mongolfiera');
    game.physics.arcade.enable(level2_mongolfiera2);
    level2_mongolfiera2.body.setSize(105, 100, 277, 883);
    level2_mongolfiera2.body.immovable = true;
  }

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

  // Player (Pinocchio)
  // Coordinate di spawn [variano a seconda del livello caricato]
  spawn();

  player.animations.add('standR', [76, 77, 78, 79, 80, 81, 82, 83, 84]);
  player.animations.add('standL', [85, 86, 87, 88, 89, 90, 91, 92, 93]);
  player.animations.add('walkR', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]); // Animazione camminata verso dx
  player.animations.add('walkL', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]); // Animazione camminata verso sx
  player.animations.add('jumpR', [100, 101, 102, 103, 104]);
  player.animations.add('jumpL', [110, 111, 112, 113, 114]);
  animDropR = player.animations.add('dropR', [105, 106]);
  animDropL = player.animations.add('dropL', [115, 116]);
  player.animations.add('skidR', [24, 25, 26]);
  player.animations.add('skidL', [27, 28, 29]);
  player.animations.add('walkFireR', [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]);
  player.animations.add('walkFireL', [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]);
  player.animations.add('fireR', [60, 64, 62, 63, 64, 65, 66, 67]);
  player.animations.add('fireL', [68 ,69, 70, 71, 72, 73, 74, 75]);
  player.animations.add('landR', [107, 108, 109]);
  player.animations.add('landL', [117, 118, 119]);
  //Assegnando una variabile loop = false funziona!
  //Comunque da eliminare se possibile

  game.physics.arcade.enable(player);
  player.body.collideWorldBounds = true;
  player.body.gravity.y = 2000; // valore corretto 2000
  player.body.setSize(70, 100, 65, 43); // Hitbox (width, height, x-offset, y-offset) // questa linea funziona solo se inserita dopo 'game.physics.arcade.enable'
  player.health = 6;

  // FUNZIONE DI SPARO CON PHASER.WEAPON
  gun1 = game.add.weapon(100, 'bullet');
  gun1.trackSprite(player);
  gun1.fireRate = 200;
  gun1.fireAngle = 0;
  gun1.bulletSpeed = 700;
  gun1.trackOffset.y = 80;
  gun1.fireLimit = bulletPool;


  //  =====================ENEMIES============================
  enemyBomb = game.add.physicsGroup();
  //  enemy.create(2200, 1800, 'marionettaBomba');
  //  enemy.create(2400, 1800, 'marionettaBomba');
  //  enemy.create(2600, 1800, 'marionettaBomba');
  enemyBomb.create(710, 1500, 'marionettaBomba');
  enemyBomb.create(1200, 1800, 'marionettaBomba');
  game.physics.arcade.enable(enemyBomb);
  enemyBomb.setAll('health', 3);

//Enemy Sniper
  enemySniper = game.add.physicsGroup();
  enemySniper.create(1300, 1800, 'marionettaSniper');
  enemySniper.create(1600, 1800, 'marionettaSniper');
  game.physics.arcade.enable(enemySniper);
  enemySniper.setAll('health', 5);
  enemySniper.callAll('animations.add', 'animations', 'sniperL', [29,28,27,26,25,24,23,22,21,20], 10, true);
  enemySniper.callAll('animations.add', 'animations', 'sniperR', [0,1,2,3,4,5,6,7,8,9], 10, true);
  enemySniper.callAll('animations.add', 'animations', 'sniperFireL', [39,38,37,36,35,34,33,32,31,30], 10, true);
  enemySniper.callAll('animations.add', 'animations', 'sniperFireR', [10,11,12,13,14,15,16,17,18,19], 10, true);
//EnemySniper Weapon
  enemySniperGun = game.add.weapon(100, 'bullet');
  enemySniperGun.fireRate = 300;

  enemyJug = game.add.sprite(1000, 1300, 'marionettaJug');
  game.physics.arcade.enable(enemyJug);
  enemyJug.body.collideWorldBounds = true;
  enemyJug.body.gravity.y = 2000;
  enemyJug.body.setSize(150, 120, 100, 93); // Hitbox (width, height, x-offset, y-offset) // questa linea funziona solo se inserita dopo 'game.physics.arcade.enable'
  enemyJug.animations.add('jugFireL', [30,31,32,33,34,35,36,37,38,39]);
  enemyJug.animations.play('jugFireL', 10, true);




  // Input (cursors and keys)
  cursors = game.input.keyboard.createCursorKeys();
  jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  menuButton = game.input.keyboard.addKey(Phaser.Keyboard.C);
  escapeKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
  oneKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
  twoKey = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
  threeKey = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
  fireButton = game.input.keyboard.addKey(Phaser.Keyboard.F);
  pickAmmo = game.input.keyboard.addKey(Phaser.Keyboard.R);

  // Phaser Signal
  pickAmmo.onDown.add(addAmmo);
  gun1.onFire.add(ammoSpent);
  fireButton.onDown.add(isFiringTrue);
  fireButton.onUp.add(isFiringFalse);

  jumpButton.onDown.add(dustJumpTrue);
  jumpButton.onUp.add(dustJumpFalse);


  // Camera Follow
  game.camera.follow(shadow, 1, 0.1, 0.1); // 1) chi segue 2) preset "style" (0= lock-on, 1= platformer) 3) lerpX 4) lerpY [LERP = valore da 0 a 1]

  // Time
  timeWhenLoaded = game.time.time;

  // Scritta menù Geppetto
  // interactionPointLabel = game.add.sprite(38, 2036, 'interactionPointLabel');
  
  // BringToTop()
  healthFull1.bringToTop();
  healthFull2.bringToTop();
  healthFull3.bringToTop();
  healthHalf1.bringToTop();
  healthHalf2.bringToTop();
  healthHalf3.bringToTop();
  
  console.log("create() completed.")
}

// ===== UPDATE =====

function update () {
  console.log(enemyBomb_0_Direction);
  // console.log('autoPilot: '+ autoPilot);
  // console.log('Player x = ' + player.x + ' y = ' + player.y);
  //  console.log(isJumping);
  // console.log("player health=" + player.health);
  //  console.log(enemy.getChildAt(0).health);

  // TIME
  gameStopWatch = Math.floor((game.time.time-timeWhenLoaded)/1000);

  // Collide
  // Collide /Globali
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.collide(player, floor);
  game.physics.arcade.collide(player, modulo1x1);
  game.physics.arcade.collide(player, modulo2x2);
  game.physics.arcade.collide(player, modulo2x4);

  // Collide /Livello 1
  if (levelPlaying == 1) {
    game.physics.arcade.collide(enemyBomb, level1_floor);
    game.physics.arcade.collide(enemyJug, level1_floor);
    game.physics.arcade.collide(enemySniper, level1_floor);

    game.physics.arcade.collide(player, level1_floor, landingCallback, landingProcessCallback, this);
    game.physics.arcade.collide(player, level1_floor);

    game.physics.arcade.collide(enemyBomb, level1_houses);
    game.physics.arcade.collide(player, level1_houses);
  }

  // Collide /Livello 2
  if (levelPlaying == 2) {
    game.physics.arcade.collide(player, level2_floor, landingCallback, landingProcessCallback, this);
    game.physics.arcade.collide(player, level2_floor);

    // Ruote panoramiche
    // Ruota 1
    game.physics.arcade.collide(player, level2_ruota1_cabinaA);
    game.physics.arcade.collide(player, level2_ruota1_cabinaB);
    game.physics.arcade.collide(player, level2_ruota1_cabinaC);
    game.physics.arcade.collide(player, level2_ruota1_cabinaD);
    game.physics.arcade.collide(player, level2_ruota1_cabinaE);
    game.physics.arcade.collide(player, level2_ruota1_cabinaF);
    game.physics.arcade.collide(player, level2_ruota1_cabinaG);
    game.physics.arcade.collide(player, level2_ruota1_cabinaH);
    // Ruota 2
    game.physics.arcade.collide(player, level2_ruota2_cabinaA);
    game.physics.arcade.collide(player, level2_ruota2_cabinaB);
    game.physics.arcade.collide(player, level2_ruota2_cabinaC);
    game.physics.arcade.collide(player, level2_ruota2_cabinaD);
    game.physics.arcade.collide(player, level2_ruota2_cabinaE);
    game.physics.arcade.collide(player, level2_ruota2_cabinaF);
    game.physics.arcade.collide(player, level2_ruota2_cabinaG);
    game.physics.arcade.collide(player, level2_ruota2_cabinaH);
    // Ruota 3
    game.physics.arcade.collide(player, level2_ruota3_cabinaA);
    game.physics.arcade.collide(player, level2_ruota3_cabinaB);
    game.physics.arcade.collide(player, level2_ruota3_cabinaC);
    game.physics.arcade.collide(player, level2_ruota3_cabinaD);
    game.physics.arcade.collide(player, level2_ruota3_cabinaE);
    game.physics.arcade.collide(player, level2_ruota3_cabinaF);
    game.physics.arcade.collide(player, level2_ruota3_cabinaG);
    game.physics.arcade.collide(player, level2_ruota3_cabinaH);

    game.physics.arcade.collide(player, level2_mongolfiera1, landingCallback, landingProcessCallback, this);
    game.physics.arcade.collide(player, level2_mongolfiera1);
    game.physics.arcade.collide(player, level2_mongolfiera2, landingCallback, landingProcessCallback, this);
    game.physics.arcade.collide(player, level2_mongolfiera2);

    game.physics.arcade.collide(enemyBomb, level2_floor);
  }

  // Livello 2 / Oggetti interattivi
  if (levelPlaying == 2) {

    // Ruota panoramica
    // La Ruota 1 e la Ruota 2, con le loro cabine, hanno gli stessi movimenti. Le Ruota 3 ha movimenti analoghi a quelli delle altre, ma nel verso opposto.
    level2_ruota1_centrale.angle -= 0.4; // Rotazione Parte Centrale Ruota 1
    level2_ruota2_centrale.angle -= 0.4; // Rotazione Parte Centrale Ruota 2
    level2_ruota3_centrale.angle += 0.4; // Rotazione Parte Centrale Ruota 3 (senso opposto alle altre)

    // Ciascuna ruota panoramica ha 8 cabine. Ogni cabina è chiamata con una lettera diversa (A-H).

    // Schema cabine-lettere:
    //        |H|
    //    |F|     |G|
    //   •           •
    // |E|     o     |A|
    //   •           •
    //    |D|     |B|
    //        |C|
    //      //   \\
    //     //     \\

    // Cabina A
    angleCounterA += 0.2;
    if (angleCounterA == 180) {
      angleCounterA = 0;
    }
    sinA = Math.sin(Math.PI*2*angleCounterA/180);
    cosA = Math.cos(Math.PI*2*angleCounterA/180);

    // Ruota 1/A
    level2_ruota1_cabinaA.body.velocity.x = (200)*cosA;
    level2_ruota1_cabinaA.body.velocity.y = -(200)*sinA;
    // Ruota 2/A
    level2_ruota2_cabinaA.body.velocity.x = (200)*cosA;
    level2_ruota2_cabinaA.body.velocity.y = -(200)*sinA;
    // Ruota 3/A
    level2_ruota3_cabinaA.body.velocity.x = (200)*cosA;
    level2_ruota3_cabinaA.body.velocity.y = (200)*sinA;

    // Cabina B
    angleCounterB += 0.2;
    if (angleCounterB == 180) {
      angleCounterB = 0;
    }
    sinB = Math.sin(Math.PI*2*angleCounterB/180);
    cosB = Math.cos(Math.PI*2*angleCounterB/180);

    // Ruota 1/B
    level2_ruota1_cabinaB.body.velocity.x = (200)*cosB;
    level2_ruota1_cabinaB.body.velocity.y = -(200)*sinB;
    // Ruota 2/B
    level2_ruota2_cabinaB.body.velocity.x = (200)*cosB;
    level2_ruota2_cabinaB.body.velocity.y = -(200)*sinB;
    // Ruota 3/B
    level2_ruota3_cabinaB.body.velocity.x = -(200)*sinB;
    level2_ruota3_cabinaB.body.velocity.y = (200)*cosB;

    // Cabina C
    angleCounterC += 0.2;
    if (angleCounterC == 180) {
      angleCounterC = 0;
    }
    sinC = Math.sin(Math.PI*2*angleCounterC/180);
    cosC = Math.cos(Math.PI*2*angleCounterC/180);

    // Ruota 1/C
    level2_ruota1_cabinaC.body.velocity.x = (200)*cosC;
    level2_ruota1_cabinaC.body.velocity.y = -(200)*sinC;
    // Ruota 2/C
    level2_ruota2_cabinaC.body.velocity.x = (200)*cosC;
    level2_ruota2_cabinaC.body.velocity.y = -(200)*sinC;
    // Ruota 3/C
    level2_ruota3_cabinaC.body.velocity.x = -(200)*cosC;
    level2_ruota3_cabinaC.body.velocity.y = -(200)*sinC;

    // Cabina D
    angleCounterD += 0.2;
    if (angleCounterD == 180) {
      angleCounterD = 0;
    }
    sinD = Math.sin(Math.PI*2*angleCounterD/180);
    cosD = Math.cos(Math.PI*2*angleCounterD/180);

    // Ruota 1/D
    level2_ruota1_cabinaD.body.velocity.x = (200)*cosD;
    level2_ruota1_cabinaD.body.velocity.y = -(200)*sinD;
    // Ruota 2/D
    level2_ruota2_cabinaD.body.velocity.x = (200)*cosD;
    level2_ruota2_cabinaD.body.velocity.y = -(200)*sinD;
    // Ruota 3/D
    level2_ruota3_cabinaD.body.velocity.x = (200)*sinD;
    level2_ruota3_cabinaD.body.velocity.y = -(200)*cosD;

    // Cabina E
    angleCounterE += 0.2;
    if (angleCounterE == 180) {
      angleCounterE = 0;
    }
    sinE = Math.sin(Math.PI*2*angleCounterE/180);
    cosE = Math.cos(Math.PI*2*angleCounterE/180);

    // Ruota 1/E
    level2_ruota1_cabinaE.body.velocity.x = (200)*cosE;
    level2_ruota1_cabinaE.body.velocity.y = -(200)*sinE;
    // Ruota 2/E
    level2_ruota2_cabinaE.body.velocity.x = (200)*cosE;
    level2_ruota2_cabinaE.body.velocity.y = -(200)*sinE;
    // Ruota 3/E
    level2_ruota3_cabinaE.body.velocity.x = (200)*cosE;
    level2_ruota3_cabinaE.body.velocity.y = (200)*sinE;

    // Cabina F
    angleCounterF += 0.2;
    if (angleCounterF == 180) {
      angleCounterF = 0;
    }
    sinF = Math.sin(Math.PI*2*angleCounterF/180);
    cosF = Math.cos(Math.PI*2*angleCounterF/180);

    // Ruota 1/F
    level2_ruota1_cabinaF.body.velocity.x = (200)*cosF;
    level2_ruota1_cabinaF.body.velocity.y = -(200)*sinF;
    // Ruota 2/F
    level2_ruota2_cabinaF.body.velocity.x = (200)*cosF;
    level2_ruota2_cabinaF.body.velocity.y = -(200)*sinF;
    // Ruota 3/F
    level2_ruota3_cabinaF.body.velocity.x = -(200)*sinF;
    level2_ruota3_cabinaF.body.velocity.y = (200)*cosF;

    // Cabina G
    angleCounterG += 0.2;
    if (angleCounterG == 180) {
      angleCounterG = 0;
    }
    sinG = Math.sin(Math.PI*2*angleCounterG/180);
    cosG = Math.cos(Math.PI*2*angleCounterG/180);

    // Ruota 1/G
    level2_ruota1_cabinaG.body.velocity.x = (200)*cosG;
    level2_ruota1_cabinaG.body.velocity.y = -(200)*sinG;
    // Ruota 2/G
    level2_ruota2_cabinaG.body.velocity.x = (200)*cosG;
    level2_ruota2_cabinaG.body.velocity.y = -(200)*sinG;
    // Ruota 3/G
    level2_ruota3_cabinaG.body.velocity.x = -(200)*cosG;
    level2_ruota3_cabinaG.body.velocity.y = -(200)*sinG;

    // Cabina H
    angleCounterH += 0.2;
    if (angleCounterH == 180) {
      angleCounterH = 0;
    }
    sinH = Math.sin(Math.PI*2*angleCounterH/180);
    cosH = Math.cos(Math.PI*2*angleCounterH/180);

    // Ruota 1/H
    level2_ruota1_cabinaH.body.velocity.x = (200)*cosH;
    level2_ruota1_cabinaH.body.velocity.y = -(200)*sinH;
    // Ruota 2/H
    level2_ruota2_cabinaH.body.velocity.x = (200)*cosH;
    level2_ruota2_cabinaH.body.velocity.y = -(200)*sinH;
    // Ruota 3/H
    level2_ruota3_cabinaH.body.velocity.x = (200)*sinH;
    level2_ruota3_cabinaH.body.velocity.y = -(200)*cosH;

    // Movimento mongolfiere
    if (level2_mongolfiera1.y <= 550) {
      level2_mongolfiera1.body.velocity.y = +125;
      level2_mongolfiera2.body.velocity.y = +125;
    }
    if (level2_mongolfiera1.y > 1100) {
      level2_mongolfiera1.body.velocity.y = -125;
      level2_mongolfiera2.body.velocity.y = -125;
    }
  }

  // Automovement spawn
  if (levelPlaying == 1 && spawning == true) {
    spawningTimer += 1;
    if (spawningTimer >= 70) {
      player.body.velocity.x = 300;
      if (player.x > 500) {
        spawning = false;
        autoPilot = false;
        spawningTimer = 0;
        console.log('autoPilot is OFF. User has control.')
      }
    }
  }
  if (levelPlaying == 2 && spawning == true) {
    console.log("levelPlaying 2")
    spawningTimer += 1;
    if (spawningTimer >= 70) {
      player.body.velocity.x = 300;
      if (player.x > 160) {
        spawning = false;
        autoPilot = false;
        enableUserMovement = true;
        spawningTimer = 0;
        console.log('autoPilot is OFF. User has control.')
      }
    }
  }

  // Player shadow offset
  if (player.y > 2060) {
    shadow.y = 1987;
  }
  else if(player.y < 1900 && player.y > 1600)
  {
    shadow.x = player.x+350;
    shadow.y = player.y+100;
  }
  else if(player.y < 1600)
  {
    shadow.x = player.x+350;
    shadow.y = player.y+120;
  } else {
    shadow.y = player.y-70;
    if (autoPilot == false) {
      shadow.x = player.x+350;
    }
  }

  // Game Over
  // Game over per caduta
  if (player.y > 2060 && autoPilot == false) {
    gameWasOver = true;
    gameOverTimer += 1;
    if (gameOverTimer === 60) {
      console.log("Game Over: player fell below y=2060");
      // game.paused = true;
      if (levelPlaying == 1) {
        destroyLevel1();
        create();
      }
    }
  }

  // Parallasse sfondi
  if(levelPlaying == 2) {
    level2_cielo.x = game.camera.x*(-0.005);
    level2_collineGialle.x = game.camera.x*(-0.025);
    level2_collineRosse.x = game.camera.x*(-0.04);
  }

  if(levelPlaying == 3) {
    level3_layer1.x = game.camera.x*(-0.25);
    level3_layer3.x = game.camera.x*(-0.05);
  }


  // Overlap tra player e enemy
  game.physics.arcade.overlap(player, enemyBomb, touchEnemy);
  game.physics.arcade.overlap(gun1.bullets, enemyBomb, shootEnemy);

  // Interaction point
  game.physics.arcade.overlap(player, interactionPoint, enableInteraction);

  // Controls
  if (cursors.left.isDown && enableUserMovement == true && menuOpen == false) // Camminata verso sinistra
  {
    player.body.velocity.x = -300;
    if (facing !== "left") // Se il player è rivolto a sinistra
    {
      facing = "left";
    }
  }

  else if (cursors.right.isDown && enableUserMovement == true && menuOpen == false) // Camminata verso destra
  {
    player.body.velocity.x = 300;
    if (facing !== "right") // Se il player è rivolto a destra
    {
      facing = "right";
    }
  }

  //===========Animazioni===================

  if (facing === "left" && player.body.velocity.x < 5 && player.body.velocity.x > -5 && (player.body.onFloor() || player.body.touching.down) && isFiring === false) { // SE player rivolto a sinistra
      player.animations.play('standL', 10, true);  // per qualche motivo l'animazione stand rompe le altre animazioni :-(
    }
    if (facing === 'right' && player.body.velocity.x < 5 && player.body.velocity.x > -5 && (player.body.onFloor() || player.body.touching.down)&& isFiring === false) { // player rivolto a destra
      player.animations.play('standR', 10, true); // eliminando questa linea e quella sopra le altre animazioni funzionano meglio
    }
    if (isFiring === true  && facing === "left" && player.body.velocity.x < 100 && player.body.velocity.x > -100 && (player.body.onFloor() || player.body.touching.down)) {
      player.animations.play('fireL', 15);
    }
    if (isFiring === true && facing === "right" && player.body.velocity.x < 100 && player.body.velocity.x > -100 && (player.body.onFloor() || player.body.touching.down)) {
      player.animations.play('fireR', 15)
    }

    if(facing === "right" && player.body.velocity.x > 100 && (player.body.onFloor() || player.body.touching.down))
    {  //Camminata dx
      if(isFiring === false)
      {
      player.animations.play('walkR', 15, true);
      } else {
      player.animations.play('walkFireR', 15, true);
      }
    } else if(facing === "left" && player.body.velocity.x < -100 && (player.body.onFloor() || player.body.touching.down))
    {  //Camminata sx
      if(isFiring === false)
      {
      player.animations.play('walkL', 15, true);
      } else {
      player.animations.play('walkFireL', 15, true);
      }
    }

    if(player.body.velocity.y < -300 && facing === "right") // Salto dx
    {
      player.animations.play('jumpR', 10, false);
    }
    if(player.body.velocity.y < -100 && facing === "left") // Salto sx
    {
      player.animations.play('jumpL', 10, false);
    }

    if(player.body.velocity.y > 100 && facing === "right") //Atterraggio salto dx
    {
      animDropR.play(10, false);
    }
    if(player.body.velocity.y > 100 && facing === "left") // Atterraggio salto sx
    {
    player.animations.play('dropL', 10, false);
    }

    if(player.body.velocity.x < 100 && player.body.velocity.x > 10 && facing === "right" && (player.body.onFloor() || player.body.touching.down)) {
      player.animations.play('skidR', 10, false);
    }
    if(player.body.velocity.x > -100 && player.body.velocity.x < -10 &&  facing === "left" && (player.body.onFloor() || player.body.touching.down)) {
    player.animations.play('skidL', 10, false);
    }

  if (player.body.velocity.y < -100) {
    isJumping = true;
  }

//ENEMY Animazioni

enemySniper.forEach(function (enemy2) {
  if (enemy2.x > player.x) {
    enemy2.animations.play('sniperL')
  }
   else if (enemy2.x < player.x) {
    enemy2.animations.play('sniperR')
  }
})

enemySniperGun.fire()

  //WEAPONs
  if(fireButton.isDown) {
    gun1.fire();
    // enemySniperGun.fire()
  }
  if (facing === 'right') {
    gun1.trackOffset.x = 170;
    gun1.fireAngle = 0;
  } else {
    gun1.trackOffset.x = 40;
    gun1.fireAngle = 180;
  }
  //console.log(player.animations.frame);

    // Salto con funzione di potenza variabile
    if (jumpButton.isDown && menuOpen == false && (player.body.onFloor() || player.body.touching.down || (jumpPower > 0 && jumpPower < 4)))
    {
      player.body.velocity.y = -650;
      jumpPower = jumpPower + .3;
    }
    else
    {
      jumpPower = 0;
    }

    // Scivolamento
    if(player.body.touching.down || player.body.onFloor())
    {
      player.body.velocity.x = (0.85 *  player.body.velocity.x) ;
    }
    else {
      player.body.velocity.x = (0.97 *  player.body.velocity.x);
    }
    //console.log(facing)
    //console.log(game.physics.arcade.distanceBetween(player, enemy.getChildAt(0)));

    //ENEMY
    enemyBomb.forEach(function (enemy1) {
      // if (game.physics.arcade.distanceBetween(player, enemy1) < 600 && enemy1.x > player.x + 80) {
      //   enemy1.body.velocity.x = -100;
      // }
      //  else if (game.physics.arcade.distanceBetween(player, enemy1) < 600 && enemy1.x < player.x + 80) {
      //   enemy1.body.velocity.x = 100;
      // }
    })


    if (enemyBomb_0_Direction === 'right') {
      enemyBomb.getChildAt(0).body.velocity.x = 100;
    } else {
      enemyBomb.getChildAt(0).body.velocity.x = -100;
    }
    if (enemyBomb.getChildAt(0).x > 950 && enemyBomb_0_Direction === 'right') {
      enemyBomb_0_Direction = 'left';
      enemyBomb.getChildAt(0).body.velocity.x = -100;
    } else if (enemyBomb.getChildAt(0).x < 700 && enemyBomb_0_Direction === 'left') {
      enemyBomb_0_Direction = 'right';
      enemyBomb.getChildAt(0).body.velocity.x = 100;
    }



    enemyBomb.setAll('body.gravity.y', 2000);
    enemyBomb.setAll('body.collideWorldBounds', true);

    enemySniper.setAll('body.gravity.y', 2000);
    enemySniper.setAll('body.collideWorldBounds', true);


    // Player health UI 
    if (player.health == 6) {
      healthHalf1.alpha = 0;
      healthFull1.alpha = 1;
      healthHalf2.alpha = 0;
      healthFull2.alpha = 1;
      healthHalf3.alpha = 0;
      healthFull3.alpha = 1;

    } else if (player.health == 5) {
      healthFull1.alpha = 1;
      healthFull2.alpha = 1;
      healthHalf3.alpha = 1;
      healthFull3.alpha = 0.1;
    } else if (player.health == 4) {
      healthFull1.alpha = 1;
      healthFull2.alpha = 1;
      healthHalf3.alpha = 0.1;
      healthFull3.alpha = 0.1;
    } else if (player.health == 3) {
      healthFull1.alpha = 1;
      healthHalf2.alpha = 1;
      healthFull2.alpha = 0.1;
      healthFull3.alpha = 0.1;
      healthHalf3.alpha = 0;
    } else if (player.health == 2) {
      healthFull1.alpha = 1;
      healthHalf2.alpha = 0;
      healthFull2.alpha = 0.1;
      healthHalf3.alpha = 0;
      healthFull3.alpha = 0.1;
    } else if (player.health == 1) {
      healthHalf1.alpha = 1;
      healthFull1.alpha = 0;
      healthHalf2.alpha = 0;
      healthFull2.alpha = 0.1;
      healthHalf3.alpha = 0;
      healthFull3.alpha = 0.1;

    } else if (player.health == 0) {
      healthHalf1.alpha = 0;
      healthFull1.alpha = 0.1;
      healthHalf2.alpha = 0;
      healthFull2.alpha = 0.1;
      healthHalf3.alpha = 0;
      healthFull3.alpha = 0.1;
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

  // ===== CAMBIO LIVELLI =====
  // Cambio Livello 1 => 2
  if (levelPlaying == 1 && player.x >= 19500) {
    if (autoPilot == false) {
      autoPilot = true; // Fa sapere che il giocatore è controllato dal codice (disattiva il gameover)
      enableUserMovement = false; // Disabilita i controlli da parte dell'utente
      player.body.collideWorldBounds = false; // Il giocatore può uscire dall'area di gioco
      console.log("Turning ON Autopilot...")
    }
    player.body.velocity.x = 300; // Fa proseguire il giocatore verso destra, fuori dall'area di gioco
    timerLivello1Livello2 += 1;
    if (timerLivello1Livello2 == 150) {
      // Destroy gli sprite del Livello 1
      console.log("Destroying Level 1 sprites...");
      destroyLevel1();
      
      levelPlaying = 2;

      // enableUserMovement = true; // Attiva i controlli da parte dell'utente
      // autoPilot = true; // Fa sapere che il giocatore NON è controllato dal codice.
      console.log("Turning OFF Autopilot...")
      create(); // <=== Riesegue la funzione create con la nuova variabile levelPlaying
    }
  }
}

function spawn() {
  autoPilot = true;
  console.log('spawn() started. AutoPilot is ON.');
  gameOverTimer = 0;
  console.log('gameOverTimer reset to 0.');
  spawning = true;
  if (levelPlaying == 1) {
    if (gameWasOver == false) { // Il livello viene caricato per la prima volta. Gli sprite 'player' e 'shadow' devono essere creati.
      console.log("Level 1: player & shadow created.");
      player = game.add.sprite(250, 1900, 'pinocchio'); // VALORI CORRETTI: Inizio x = 250; y = 1900 / Test Finale x = 18860 (senza camera follow)
      shadow = game.add.sprite(1000, 200, 'player');
      shadow.alpha = 0;
    }
    if (gameWasOver == true) { // Il livello NON viene caricato per la prima volta. Gli sprite 'player' e 'shadow' devono essere spostati.
      console.log("Level 1: player coordinates reset.");
      gameWasOver = false;
      console.log("gameWasOver reset to " + gameWasOver);
      player.x = 250;
      player.y = 1900;
      player.bringToTop();
    }
    
  } else if (levelPlaying == 2) {
    console.log("Level 2: player move")
    player.x = -90;
    player.y = 1900;
    player.bringToTop();
    // player = game.add.sprite(-90, 1900, 'pinocchio');
    // shadow = game.add.sprite(680, 200, 'player');
    // shadow.alpha = 0;
  } else if (levelPlaying == 3) {
    console.log("layer 3 player create")
    player = game.add.sprite(200, 1900, 'pinocchio');
    shadow = game.add.sprite(300, 200, 'player');
    shadow.alpha = 0;
  }
  console.log("spawn() completed.")
}

function destroyLevel1() {
  level1_calpestabile_parte1.destroy();
  level1_calpestabile_parte2.destroy();
  level1_floor.destroy();
  level1_houses.destroy();
  modulo1x1.destroy();
  modulo2x2.destroy();
  modulo2x4.destroy();
}

function destroyLevel2() {
  
}

function destroyLevel3() {
  
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
      //  interactionPointLabel = game.add.sprite(38, 2036, 'interactionPointLabel');
    }

  }
  else
  {
    onInteraction = false;
    interactionEnabled = false;
    interactionPointLabelShown = false;
    //  interactionPointLabel.kill();
  }

}
function touchEnemy(player, enemyBomb) {
  // <== Inserire animazione [esplosione enemyBomb]
  enemyBomb.kill();
  player.health = player.health - 3;
}

function shootEnemy(bullets, enemyBomb) {
  bullets.kill();
  enemyBomb.health = enemyBomb.health - 1;
  if (enemyBomb.health <= 0) {
    enemyBomb.kill();
  }
}

function isFiringTrue() {
  isFiring = true;
  console.log('isFiring = ' + isFiring);
}
function isFiringFalse() {
  isFiring = false;
  console.log('isFiring = ' + isFiring);
}

function addAmmo() {
  bulletPool = bulletPool + 10;
  gun1.resetShots(bulletPool);
  console.log('Bullet N' + bulletPool);
}
function ammoSpent() {
  bulletPool = bulletPool - 1;
  console.log('Bullet N' + bulletPool);
}

function dustJumpTrue() {
  dustJump = true;
  if (player.body.onFloor() || player.body.touching.down) {
    if (facing === 'right') {
      dust = game.add.sprite(player.x, player.y + 5, 'dust');
      dustJumpR = dust.animations.add('dustJumpR', [0, 1]);
      dustJumpR.play(10, false);
      dustJumpR.killOnComplete = true;
    } else {
      dust = game.add.sprite(player.x, player.y + 5, 'dust');
      dustJumpL = dust.animations.add('dustJumpL', [2, 3]);
      dustJumpL.play(10, false);
      dustJumpL.killOnComplete = true;
    }
  }
  // console.log(dustJump)
}

function dustJumpFalse() {
  dustJump = false;
  // console.log(dustJump);
}

function landingCallback(player, obj) {
  isJumping = false;
  if (facing === 'right') {
    dust = game.add.sprite(player.x, player.y + 5, 'dust');
    dustLandR = dust.animations.add('dustLandR', [4, 5, 6]);
    dustLandR.play(10, false);
    dustLandR.killOnComplete = true;
  } else {
    dust = game.add.sprite(player.x, player.y + 5, 'dust');
    dustLandL = dust.animations.add('dustLandL', [7, 8, 9]);
    dustLandL.play(10, false);
    dustLandL.killOnComplete = true;
  }
}

function landingProcessCallback(player, obj) {
  if (isJumping === true) {
    return true;
  } else {
    return false;
  }
}

function render () {
  // game.debug.body(level2_mongolfiera1);
  // game.debug.body(level2_mongolfiera2);
  // game.debug.body(player);
  // game.debug.body(enemyJug);
  // game.debug.spriteInfo(player, 30, 100);
}
