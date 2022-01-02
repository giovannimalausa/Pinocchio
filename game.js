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

    game.load.spritesheet('dust', 'assets/sprites/dust_spritesheet1.png', 200, 150, 10)

    game.load.image('marionettaBomba', 'assets/sprites/marionetta-bomba.png');

    game.load.image('bullet', 'assets/sprites/Pallino_rosso.png'); //bullet placeholder

    // Globali
    game.load.image('globalFloor', 'assets/global/Floor16k.png');
    game.load.image('sfondoAzzurro', 'assets/global/Lightblue background.png');

    game.load.image('ControlsTutorial_UI', 'assets/global/ControlsTutorial.png');

    game.load.image('modulo2x2', 'assets/global/Modulo2x2.png');
    game.load.image('modulo1x1', 'assets/global/Modulo1x1.png');

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

    // Level 1
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

    // Level 2
    game.load.image('level2_calpestabile_parte1', 'assets/levelTwo/level2_calpestabile_parte1.png');
    game.load.image('level2_calpestabile_parte2', 'assets/levelTwo/level2_calpestabile_parte2.png');
    game.load.image('level2_collineRosse', 'assets/levelTwo/colline rosse2@72x.png');
    game.load.image('level2_collineGialle', 'assets/levelTwo/colline gialle2@72x.png');
    game.load.image('level2_cielo', 'assets/levelTwo/cielo2@72x.png');
    game.load.image('level2_ruota_supporto', 'assets/levelTwo/ruota_supporto.png');
    game.load.image('level2_ruota_centrale', 'assets/levelTwo/ruota_centrale.png');
    game.load.image('level2_ruota_cabina', 'assets/levelTwo/ruota_cabina.png');

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
var shadow; // per camera tracking con offset
var platforms; // dal codice di base di Phaser. Variabile non utilizzata nel Livello 1.
var enemy;
var dust; // sprite polvere del salto
var dustVar;

// Variabili di gioco
var showingControlsTutorial = true;
var facing = "right";
var jumpPower = 0;
var onInteraction = false;
var enablePlayerMovement = true;
var interactionEnabled = false;
var interactionPointLabelShown = false;

// Variabili scelta livello
var levelPlaying = 2;

// Variabili globali
var controlsTutorialUI;
var sfondoAzzurro;
var deathGap2x;
var deathGap3x;
var deathGap4x;
var deathGap5x;
var deathGap6x;
var deathGap7x;
var modulo1x1;
var modulo2x2;

// Variabili livello 1
var level1_floor;
var level1_platform2x1;
var level1_platform3x1;
var level1_platform4x1;
var level1_platform5x1;
var level1_platform6x1;
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

// Variabili livello 2
var level2_calpestabile_parte1;
var level2_calpestabile_parte2;
var level2_cielo;
var level2_collineRosse;
var level2_collineGialle;

var level2_floor;

var level2_ruota_supporto;
var level2_ruota_centrale;
var level2_ruota_cabina;
var level2_ruota_cabinaA;
var level2_ruota_cabinaB;
var level2_ruota_cabinaC;
var level2_ruota_cabinaD;
var level2_ruota_cabinaE;
var level2_ruota_cabinaF;
var level2_ruota_cabinaG;
var level2_ruota_cabinaH;


var angleCounterA = 45;
var angleCounterB = 22.5;
var angleCounterC = 0;
var angleCounterD = 157.5;
var angleCounterE = 135;
var angleCounterF = 112.5;
var angleCounterG = 90;
var angleCounterH = 67.5;

var level2_mongolfiera;
var onMongolfiera = false;
var i = 0;
var mongolfieraUsed = false;
var movimentoMongolfiera1;

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

//Armi
var bullets;
var bulletTime = 0;
var gun1

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
var animStandR;
var animStandL;
var animWalkR;
var animWalkL;
var animJumpR;
var animJumpL;
var animDropR;
var animDropL;
var animSkidR;
var animSkidL;
var animWalkFireR;
var animWalkFireL;
var animFireR;
var animFireL;

var isFiring = false;
var isJumping = false;
var dustJump = false;
var enemyIndex;
var child1;
// ++++++++++ CREATE ++++++++++

function create() {

  game.world.setBounds(0, 0, 20000, 2304);

  // Elementi livelli
  modulo2x2 = game.add.physicsGroup();
  modulo1x1 = game.add.physicsGroup();

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

    modulo2x2.create(550, 2100, 'modulo2x2');
    modulo2x2.create(3750, 2100, 'modulo2x2');
    modulo2x2.create(4450, 2100, 'modulo2x2');
    modulo2x2.create(4650, 2100, 'modulo2x2');
    modulo2x2.create(4650, 2000, 'modulo2x2');
    modulo2x2.create(4900, 2100, 'modulo2x2');
    modulo2x2.create(16000, 2100, 'modulo2x2');
    modulo2x2.setAll('body.immovable', true);

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
  if(levelPlaying == 2)
  {
    level2_cielo = game.add.sprite(-1800.8767, 0, 'level2_cielo');
    level2_collineGialle = game.add.sprite(-690.1809, 0, 'level2_collineGialle');
    level2_collineRosse = game.add.sprite(-1800.8767, 0, 'level2_collineRosse');
    level2_calpestabile_parte1 = game.add.sprite(0, 0, 'level2_calpestabile_parte1');
    level2_calpestabile_parte2 = game.add.sprite(11649, 0, 'level2_calpestabile_parte2');

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
    level2_floor.alpha = 1;
    level2_floor.setAll('body.immovable', true);

    // Moduli 1x1
    // modulo1x1 = game.add.physicsGroup();
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

    modulo1x1.create(9900, 1800, 'modulo1x1');
    modulo1x1.create(9950, 1800, 'modulo1x1');

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
    // modulo2x2 = game.add.physicsGroup();
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
    level2_ruota_supporto = game.add.sprite(2250, 1553, 'level2_ruota_supporto');
    level2_ruota_centrale = game.add.sprite(2451, 1574, 'level2_ruota_centrale');
    level2_ruota_centrale.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(level2_ruota_centrale);

    level2_ruota_cabinaA = game.add.sprite(2929, 1574, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota_cabinaA);
    level2_ruota_cabinaA.body.immovable = true;
    level2_ruota_cabinaA.anchor.setTo(0.5, 0.5);

    level2_ruota_cabinaB = game.add.sprite(2790, 1909, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota_cabinaB);
    level2_ruota_cabinaB.body.immovable = true;
    level2_ruota_cabinaB.anchor.setTo(0.5, 0.5);

    level2_ruota_cabinaC = game.add.sprite(2448, 2050, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota_cabinaC);
    level2_ruota_cabinaC.body.immovable = true;
    level2_ruota_cabinaC.anchor.setTo(0.5, 0.5);

    level2_ruota_cabinaD = game.add.sprite(2112, 1909, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota_cabinaD);
    level2_ruota_cabinaD.body.immovable = true;
    level2_ruota_cabinaD.anchor.setTo(0.5, 0.5);

    level2_ruota_cabinaE = game.add.sprite(1969, 1574, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota_cabinaE);
    level2_ruota_cabinaE.body.immovable = true;
    level2_ruota_cabinaE.anchor.setTo(0.5, 0.5);

    level2_ruota_cabinaF = game.add.sprite(2112, 1239, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota_cabinaF);
    level2_ruota_cabinaF.body.immovable = true;
    level2_ruota_cabinaF.anchor.setTo(0.5, 0.5);

    level2_ruota_cabinaG = game.add.sprite(2448, 1100, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota_cabinaG);
    level2_ruota_cabinaG.body.immovable = true;
    level2_ruota_cabinaG.anchor.setTo(0.5, 0.5);

    level2_ruota_cabinaH = game.add.sprite(2790, 1239, 'level2_ruota_cabina');
    game.physics.arcade.enable(level2_ruota_cabinaH);
    level2_ruota_cabinaH.body.immovable = true;
    level2_ruota_cabinaH.anchor.setTo(0.5, 0.5);

    

    level2_mongolfiera = game.add.sprite(4172, 1217, 'level2_mongolfiera');
    game.physics.arcade.enable(level2_mongolfiera);
    level2_mongolfiera.body.setSize(105, 100, 277, 883);

    movimentoMongolfiera1 = game.add.tween(level2_mongolfiera).to({ y: 600}, 4000, Phaser.Easing.Linear.None, true, 0, 5000, true);

    level2_piattaformaMongolfiera = game.add.physicsGroup();
    level2_piattaformaMongolfiera.create(4449, 2100, 'modulo2x2');
    movimentoPiattaformaMongolfiera = game.add.tween(level2_piattaformaMongolfiera).to({ y: -617}, 4000, Phaser.Easing.Linear.None, true, 0, 5000, true) // y: 1483
    level2_piattaformaMongolfiera.setAll('body.immovable', true);
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

  // Player
  player = game.add.sprite(1670, 1800, 'pinocchio');
  animStandR = player.animations.add('standR', [76, 77, 78, 79, 80, 81, 82, 83, 84]);
  animStandL = player.animations.add('standL', [85, 86, 87, 88, 89, 90, 91, 92, 93]);
  animWalkR = player.animations.add('walkR', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]); // Animazione camminata verso dx
  animWalkL = player.animations.add('walkL', [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]); // Animazione camminata verso sx
  animJumpR = player.animations.add('jumpR', [100, 101, 102, 103, 104]);
  animJumpL = player.animations.add('jumpL', [110, 111, 112, 113, 114]);
  animDropR = player.animations.add('dropR', [105, 106]);
  animDropL = player.animations.add('dropL', [115, 116]);
  animSkidR = player.animations.add('skidR', [24, 25, 26]);
  animSkidL = player.animations.add('skidL', [27, 28, 29]);
  animWalkFireR = player.animations.add('walkFireR', [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]);
  animWalkFireL = player.animations.add('walkFireL', [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]);
  animFireR = player.animations.add('fireR', [60, 64, 62, 63, 64, 65, 66, 67]);
  animFireL = player.animations.add('fireL', [68 ,69, 70, 71, 72, 73, 74, 75]);
  player.animations.add('landR', [107, 108, 109]);
  player.animations.add('landL', [117, 118, 119]);
  //Assegnando una variabile loop = false funziona!
  //Comunque da eliminare se possibile

  game.physics.arcade.enable(player);
  player.body.collideWorldBounds = true;
  player.body.gravity.y = 2000;
  player.body.setSize(100, 120, 50, 23); // Hitbox (width, height, x-offset, y-offset) // questa linea funziona solo se inserita dopo 'game.physics.arcade.enable'
  player.health = 10;


  // Enemy
  enemy = game.add.physicsGroup();
  //  enemy.create(2200, 1800, 'marionettaBomba');
  //  enemy.create(2400, 1800, 'marionettaBomba');
  //  enemy.create(2600, 1800, 'marionettaBomba');
  child1 = enemy.create(2800, 1800, 'marionettaBomba');
  child1 = enemy.create(3000, 1800, 'marionettaBomba');

  game.physics.arcade.enable(enemy);
  enemy.setAll('health', 3);
  //  enemy.getChildAt(0).body.velocity.x = 100;






  // Armi
  // FUNZIONE DI SPARO CON BULLET GROUP MANUALE
  /*  bullets = game.add.group();
  bullets.enableBody = true;
  bullets.physicsBodyType = Phaser.Physics.ARCADE;
  bullets.createMultiple(50, 'bullet');
  bullets.setAll('anchor.x', 0.5);
  bullets.setAll('anchor.y', 0.5);
  bullets.setAll('outOfBoundKill', true);
  bullets.setAll('checkWorldBounds', true);
  */
  
  // FUNZIONE DI SPARO CON PHASER.WEAPON
  gun1 = game.add.weapon(50, 'bullet');
  gun1.trackSprite(player);
  gun1.fireRate = 200;
  gun1.fireAngle = 0;
  gun1.bulletSpeed = 700;
  gun1.trackOffset.y = 80;

  // Tutorial
  if(showingControlsTutorial == true)  {
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
  fireButton = game.input.keyboard.addKey(Phaser.Keyboard.F);

  // Phaser Signal
  fireButton.onDown.add(isFiringTrue);
  fireButton.onUp.add(isFiringFalse);

  jumpButton.onDown.add(dustJumpTrue);
  jumpButton.onUp.add(dustJumpFalse);


  // Camera Follow
  game.camera.follow(shadow, 1, 0.1, 0.1); // 1) chi segue 2) preset "style" (0= lock-on, 1= platformer) 3) lerpX 4) lerpY [LERP = valore da 0 a 1]

  // Time
  timeWhenLoaded = game.time.time;

  // Scritta menù Geppetto
  interactionPointLabel = game.add.sprite(38, 2036, 'interactionPointLabel');


  //  MenuButtonTimer – [non in uso]
  // menuButtonTimer = game.time.create(false);

  //  Set a TimerEvent to occur after 2 seconds – [non in uso]
  // menuButtonTimer.loop(2000, updateCounter, this);

}

function updateCounter() { // [non in uso]
    total++;
}

function update () {
  //  console.log(isJumping);
  //  console.log(player.health);
  //  console.log(enemy.getChildAt(0).health);


  //  console.log(level2_piattaformaMongolfiera.x + ' ' +  level2_piattaformaMongolfiera.y);
    // console.log(level2_mongolfiera.body.x + ' ' + level2_mongolfiera.body.y);

    // TIME
    gameStopWatch = Math.floor((game.time.time-timeWhenLoaded)/1000);

    // Collide
    game.physics.arcade.collide(player, level1_floor);
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(player, floor);
    game.physics.arcade.collide(enemy, level1_floor );
    game.physics.arcade.collide(player, modulo1x1);
    game.physics.arcade.collide(player, modulo2x2);



    if (levelPlaying == 1)
    {
      game.physics.arcade.collide(player, level1_platform2x1);
      game.physics.arcade.collide(player, level1_platform5x1);
      game.physics.arcade.collide(player, level1_platform6x1);
      game.physics.arcade.collide(player, level1_casa1);
      game.physics.arcade.collide(player, level1_casa2);
      game.physics.arcade.collide(player, level1_casa3_hitbox);
      game.physics.arcade.collide(player, level1_casa3_balcone);
      game.physics.arcade.collide(player, level1_casa4_tettoia);
    }

    if (levelPlaying == 2)
    {
      game.physics.arcade.collide(player, level2_floor, landingCallback, landingProcessCallback, this);
      game.physics.arcade.collide(player, level2_floor);

      game.physics.arcade.collide(player, level2_ruota_cabinaA);
      game.physics.arcade.collide(player, level2_ruota_cabinaB);
      game.physics.arcade.collide(player, level2_ruota_cabinaC);
      game.physics.arcade.collide(player, level2_ruota_cabinaD);
      game.physics.arcade.collide(player, level2_ruota_cabinaE);
      game.physics.arcade.collide(player, level2_ruota_cabinaF);
      game.physics.arcade.collide(player, level2_ruota_cabinaG);
      game.physics.arcade.collide(player, level2_ruota_cabinaH);

      game.physics.arcade.collide(player, level2_piattaformaMongolfiera, landingCallback, landingProcessCallback, this);
      game.physics.arcade.collide(player, level2_piattaformaMongolfiera);

      game.physics.arcade.collide(enemy, level2_floor);
    }

    // Overlap e interazioni con oggetti interattivi
    if (levelPlaying == 2) {

      // Ruota panoramica
      level2_ruota_centrale.angle -= 0.4;

      // Cabina A
      angleCounterA += 0.2;
      if (angleCounterA == 180) {
        angleCounterA = 0;
      }
    
      sinA = Math.sin(Math.PI*2*angleCounterA/180);
      cosA = Math.cos(Math.PI*2*angleCounterA/180);
    
      // velocità = 
      level2_ruota_cabinaA.body.velocity.x = (200)*cosA;
      level2_ruota_cabinaA.body.velocity.y = -(200)*sinA;

      // Cabina B
      angleCounterB += 0.2;
      if (angleCounterB == 180) {
        angleCounterB = 0;
      }
    
      sinB = Math.sin(Math.PI*2*angleCounterB/180);
      cosB = Math.cos(Math.PI*2*angleCounterB/180);
    
      // velocità = 
      level2_ruota_cabinaB.body.velocity.x = (200)*cosB;
      level2_ruota_cabinaB.body.velocity.y = -(200)*sinB;

      // Cabina C
      angleCounterC += 0.2;
      if (angleCounterC == 180) {
      angleCounterC = 0;
      }

      sinC = Math.sin(Math.PI*2*angleCounterC/180);
      cosC = Math.cos(Math.PI*2*angleCounterC/180);

      // velocità = 
      level2_ruota_cabinaC.body.velocity.x = (200)*cosC;
      level2_ruota_cabinaC.body.velocity.y = -(200)*sinC;

      // Cabina D
      angleCounterD += 0.2;
      if (angleCounterD == 180) {
      angleCounterD = 0;
      }

      sinD = Math.sin(Math.PI*2*angleCounterD/180);
      cosD = Math.cos(Math.PI*2*angleCounterD/180);

      // velocità = 
      level2_ruota_cabinaD.body.velocity.x = (200)*cosD;
      level2_ruota_cabinaD.body.velocity.y = -(200)*sinD;


      // Cabina E
      angleCounterE += 0.2;
      if (angleCounterE == 180) {
        angleCounterE = 0;
      }

      sinE = Math.sin(Math.PI*2*angleCounterE/180);
      cosE = Math.cos(Math.PI*2*angleCounterE/180);
    
      // velocità = 
      level2_ruota_cabinaE.body.velocity.x = (200)*cosE;
      level2_ruota_cabinaE.body.velocity.y = -(200)*sinE;

      // Cabina F
      angleCounterF += 0.2;
      if (angleCounterF == 180) {
        angleCounterF = 0;
      }

      sinF = Math.sin(Math.PI*2*angleCounterF/180);
      cosF = Math.cos(Math.PI*2*angleCounterF/180);
    
      // velocità = 
      level2_ruota_cabinaF.body.velocity.x = (200)*cosF;
      level2_ruota_cabinaF.body.velocity.y = -(200)*sinF;

      // Cabina G
      angleCounterG += 0.2;
      if (angleCounterG == 180) {
        angleCounterG = 0;
      }

      sinG = Math.sin(Math.PI*2*angleCounterG/180);
      cosG = Math.cos(Math.PI*2*angleCounterG/180);
    
      // velocità = 
      level2_ruota_cabinaG.body.velocity.x = (200)*cosG;
      level2_ruota_cabinaG.body.velocity.y = -(200)*sinG;

      // Cabina H
      angleCounterH += 0.2;
      if (angleCounterH == 180) {
        angleCounterH = 0;
      }

      sinH = Math.sin(Math.PI*2*angleCounterH/180);
      cosH = Math.cos(Math.PI*2*angleCounterH/180);

      // velocità = 
      level2_ruota_cabinaH.body.velocity.x = (200)*cosH;
      level2_ruota_cabinaH.body.velocity.y = -(200)*sinH;


      // Mongolfiera automatizzata
      function mongolfiera() {
        if (onMongolfiera == false && mongolfieraUsed == false) {
          onMongolfiera = true;
        }

        while (onMongolfiera == true && i == 0) {
          i = i + 1;
          enablePlayerMovement = false;
          player.body.velocity.x = 0;
          player.body.velocity.y = 0;
          player.x = 4420;
          player.y = 1960;
        }
      }

      if (onMongolfiera == true && jumpButton.isDown) { // La barra spaziatrice "slega" il Player dalla Mongolfiera. Salta verso destra.
        onMongolfiera = false;
        mongolfieraUsed = true;
        enablePlayerMovement = true;
        player.body.gravity.y = 2000;
        player.body.velocity.x = 450;
        player.body.velocity.y = -850;
      }

    }

    // console.log('enablePlayerMovement: ' + enablePlayerMovement);
    // console.log('onMongolfiera: ' + onMongolfiera);


    // Player shadow offset
    shadow.x = player.x+350;
    shadow.y = player.y+200;

    // Parallasse sfondi
    if(levelPlaying == 2)
    {
        level2_cielo.x = game.camera.x*(-0.005);
        level2_collineGialle.x = game.camera.x*(-0.025);
        level2_collineRosse.x = game.camera.x*(-0.04);
    }

    if(levelPlaying == 3)
    {
        level3_layer1.x = game.camera.x*(-0.25);
        level3_layer3.x = game.camera.x*(-0.05);
    }


    // Overlap tra player e enemy
    game.physics.arcade.overlap(player, enemy, touchEnemy);
    game.physics.arcade.overlap(gun1.bullets, enemy, shootEnemy);

    // Interaction point
    game.physics.arcade.overlap(player, interactionPoint, enableInteraction);

    // Controls
    if (cursors.left.isDown && enablePlayerMovement == true && menuOpen == false && showingControlsTutorial == false) // Camminata verso sinistra
    {
        player.body.velocity.x = -300;
        if (facing !== "left") // Se il player è rivolto a sinistra
        {
            facing = "left";
        }
    }

    else if (cursors.right.isDown && enablePlayerMovement == true && menuOpen == false && showingControlsTutorial == false) // Camminata verso destra
    {
        player.body.velocity.x = 300;
        if (facing !== "right") // Se il player è rivolto a destra
        {
          facing = "right";
        }
    }

   //Animazioni

  if (facing === "left" && player.body.velocity.x < 5 && player.body.velocity.x > -5 && (player.body.onFloor() || player.body.touching.down) && isFiring === false) //SE player rivolto a sinistra
    {
      player.animations.play('standL', 10, true);  // per qualche motivo l'animazione stand rompe le altre animazioni :-(
    }
    if (facing === 'right' && player.body.velocity.x < 5 && player.body.velocity.x > -5 && (player.body.onFloor() || player.body.touching.down)&& isFiring === false) // player rivolto a destra
    {
      player.animations.play('standR', 10, true); // eliminando questa linea e quella sopra le altre animazioni funzionano meglio
    }
    if (isFiring === true  && facing === "left" && player.body.velocity.x < 100 && player.body.velocity.x > -100 && (player.body.onFloor() || player.body.touching.down)) {
      player.animations.play('fireL', 15);
    }
    if (isFiring === true && facing === "right" && player.body.velocity.x < 100 && player.body.velocity.x > -100 && (player.body.onFloor() || player.body.touching.down)) {
      player.animations.play('fireR', 15)
    }

if (facing === "right" && player.body.velocity.x > 100 && (player.body.onFloor() || player.body.touching.down)) {  //Camminata dx
  if (isFiring === false) {
    player.animations.play('walkR', 15, true);
  } else {
    player.animations.play('walkFireR', 15, true);
  }
} else if (facing === "left" && player.body.velocity.x < -100 && (player.body.onFloor() || player.body.touching.down)) {  //Camminata sx
  if (isFiring === false) {
    player.animations.play('walkL', 15, true);
  } else {
    player.animations.play('walkFireL', 15, true);
  }
  }

if (player.body.velocity.y < -300 && facing === "right") {  //salto dx
  player.animations.play('jumpR', 10, false);
}
if (player.body.velocity.y < -100 && facing === "left") {  //Salto sx
  player.animations.play('jumpL', 10, false);
}

if (player.body.velocity.y > 100 && facing === "right") {  //salto dx
  animDropR.play(10, false);
}
if (player.body.velocity.y > 100 && facing === "left") {  //Salto sx
  player.animations.play('dropL', 10, false);
}

if (player.body.velocity.x < 100 && player.body.velocity.x > 10 && facing === "right" && (player.body.onFloor() || player.body.touching.down)) {
  player.animations.play('skidR', 10, false);
}
if (player.body.velocity.x > -100 && player.body.velocity.x < -10 &&  facing === "left" && (player.body.onFloor() || player.body.touching.down)) {
  player.animations.play('skidL', 10, false);
}

if (player.body.velocity.y < -100) {
  isJumping = true;
}



//WEAPONs
if(fireButton.isDown) {
  //fireBullet();
  gun1.fire()
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
    if (player.body.touching.down || player.body.onFloor()) {
        player.body.velocity.x = (0.85 *  player.body.velocity.x) ;
      }
    else {
        player.body.velocity.x = (0.97 *  player.body.velocity.x);
    }
    //console.log(facing)
    enemyIndex = enemy.getChildIndex(child1);
    console.log(enemy.getChildIndex(child1));

//console.log(game.physics.arcade.distanceBetween(player, enemy.getChildAt(0)));

//ENEMY ENEMIES
    if (game.physics.arcade.distanceBetween(player, enemy.getChildAt(0)) < 600 && enemy.getChildAt(0).x > player.x) {
      enemy.getChildAt(0).body.velocity.x = -100;
    }
     else if (game.physics.arcade.distanceBetween(player, enemy.getChildAt(0)) < 600 && enemy.getChildAt(0).x < player.x) {
      enemy.getChildAt(0).body.velocity.x = 100;
    }

    if (game.physics.arcade.distanceBetween(player, enemy.getChildAt(1)) < 600 && enemy.getChildAt(1).x > player.x) {
      enemy.getChildAt(1).body.velocity.x = -100;
    }
    else if (game.physics.arcade.distanceBetween(player, enemy.getChildAt(1)) < 600 && enemy.getChildAt(1).x < player.x) {
      enemy.getChildAt(1).body.velocity.x = 100;
    }


    enemy.setAll('body.gravity.y', 2000);
    enemy.setAll('body.collideWorldBounds', true);


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
function touchEnemy(player, enemy) {
    enemy.kill();
  //  player.health.damage = 1;
}

function shootEnemy(bullets, enemy) {
    bullets.kill();
    enemy.health = enemy.health - 1;
    if (enemy.health <= 0) {
      enemy.kill();
    }
}

function isFiringTrue() {
  isFiring = true;
  console.log(isFiring);
}
function isFiringFalse() {
  isFiring = false;
  console.log(isFiring);
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
  console.log(dustJump)
}

function dustJumpFalse() {
  dustJump = false;
console.log(dustJump);

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

/*
   //FUNZIONE DI SPARO CON BULLET GROUP MANUALE
 function fireBullet() {
  if(game.time.now > bulletTime){
    bullet = bullets.getFirstExists(false);

    if(bullet) {
      bullet.reset(player.x + 130, player.y + 50);
      bullet.body.velocity.x = 100;
      bulletTime = game.time.now + 50;
    }
  }
}
*/
function render () {
    // game.debug.body(level2_mongolfiera);
    game.debug.text(level2_ruota_centrale.angle, 100, 100);
}
