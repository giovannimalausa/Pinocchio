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

WebFontConfig = {
  //  'active' means all requested fonts have finished loading
  //  un secondo di delay prima di creare il testo
  active: function() {game.time.events.add(Phaser.Timer.QUARTER, createText, this);},

  //  nome del font
  google: {
    families: ['Inter']
  }
};

// ++++++++++ PRELOAD ++++++++++

function preload() {

  game.load.crossOrigin = 'anonymous';

  //game.load.spritesheet('pinocchio', 'assets/sprites/pinocchio/pinocchio_spritesheet3.png', 200, 150, 120);
  game.load.spritesheet('pinocchio', 'assets/sprites/pinocchio/pinocchioV4.png', 200, 150, 140);
  game.load.spritesheet('pinocchioMorto', 'assets/sprites/pinocchio/pinocchiomortocrocifisso.png', 200, 150, 20);

  game.load.image('shadow', 'assets/sprites/shadow.png');
  game.load.image('cumuloDiMarionette', 'assets/sprites/cumuloDiMarionette.png');


  game.load.spritesheet('pinocchioBullet', 'assets/sprites/pinocchio/pinocchioBullet.png', 150, 100, 4);
  game.load.spritesheet('nemiciBullet', 'assets/sprites/nemiciBullet.png', 150, 100, 4);
  game.load.spritesheet('palleDiMangiafuoco', 'assets/sprites/pallaFuoco.png', 225, 150, 15);


  game.load.spritesheet('dust', 'assets/sprites/dust_spritesheet1.png', 200, 150, 10);

  game.load.spritesheet('marionettaJug', 'assets/sprites/marionettaJug.png', 200, 200, 40);
  game.load.spritesheet('marionettaSniper', 'assets/sprites/marionettaSniper.png', 160, 160, 40);
  game.load.spritesheet('marionettaSniperMorte', 'assets/sprites/marionettaSniperMorte.png', 200, 160, 32);
  game.load.spritesheet('marionettaJugMorte', 'assets/sprites/marionettaJugMorte.png', 200, 200, 38);

  game.load.spritesheet('marionettaBomba', 'assets/sprites/marionettaBomba.png', 180, 180, 22);
  game.load.spritesheet('marionettaEsplosione', 'assets/sprites/enemyBombEsplosione.png', 300, 200, 12);

  game.load.spritesheet('ilBoss', 'assets/sprites/mangiafuoco.png', 500, 500, 60);
  game.load.spritesheet('bossMorte', 'assets/sprites/mangiafuocoMorte.png', 500, 500, 22);

  game.load.spritesheet('fuocoATerra', 'assets/sprites/fuocoATerra.png', 225, 150, 30);

  // Globali
  game.load.image('modulo1x1', 'assets/global/Modulo1x1.png');
  game.load.image('modulo2x2', 'assets/global/Modulo2x2.png');
  game.load.image('modulo2x4', 'assets/global/Modulo2x4.png');

  game.load.image('gameOver', 'assets/interface/GameOver.jpg');
  game.load.image('win', 'assets/interface/win.jpg');

  // Elementi d'interazione
  game.load.image('ammoBox', 'assets/global/ammo.png');
  game.load.image('pozione', 'assets/global/pozione.png');

  // Health / Ammo UI
  game.load.spritesheet('healthUI', 'assets/interface/healthUI.png', 350, 100, 15);
  game.load.spritesheet('ammoUIv3', 'assets/interface/Ammo/ammoUIv3.png', 161, 73, 16);

  // Level 1
  game.load.image('placeholder_CasaGeppetto', 'assets/levelOne/Placeholder Casa di Geppetto.png');
  game.load.image('level1_calpestabile', 'assets/levelOne/calpestabile.png');
  game.load.image('level1_cielo', 'assets/levelOne/Cielo.png');
  game.load.image('level1_casedietro', 'assets/levelOne/Collina lontana.png');
  game.load.image('level1_casedavanti', 'assets/levelOne/Collina vicina.png');

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
  game.load.image('level2_calpestabile_parte1', 'assets/levelTwo/piattaformaDef1.png');
  game.load.image('level2_calpestabile_parte2', 'assets/levelTwo/piattaformaDef2.png');
  game.load.image('level2_collineRosse', 'assets/levelTwo/collinerosse1def.png');
  game.load.image('level2_collineRosse2', 'assets/levelTwo/collinerosse2def.png');
  game.load.image('level2_collineGialle', 'assets/levelTwo/collinegialle1def.png');
  game.load.image('level2_collineGialle2', 'assets/levelTwo/collinegialle2def.png');
  game.load.image('level2_cielo', 'assets/levelTwo/cielodef1.png');
  game.load.image('level2_cielo2', 'assets/levelTwo/cielodef2.png');
  game.load.image('level2_ruota_supporto', 'assets/levelTwo/ruota_supporto.png');
  game.load.image('level2_ruota_centrale', 'assets/levelTwo/ruota_centrale.png');
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

  // Level 2/Componenti
  game.load.image('level2_componente0', 'assets/levelTwo/componenti/bancarellastart1.png');
  game.load.image('level2_componente0.1', 'assets/levelTwo/componenti/bancarellastart2.png');
  game.load.image('level2_componente1', 'assets/levelTwo/componenti/bancarella 1.png');
  game.load.image('level2_componente2', 'assets/levelTwo/componenti/bancarella 2.png');
  game.load.image('level2_componente3', 'assets/levelTwo/componenti/bancarella 3.png');
  game.load.image('level2_componente4', 'assets/levelTwo/componenti/bancarella 4.png');
  game.load.image('level2_componente5', 'assets/levelTwo/componenti/bancarella 5.1.png');
  game.load.image('level2_componente6', 'assets/levelTwo/componenti/bancarella 5.2.png');
  game.load.image('level2_componente7', 'assets/levelTwo/componenti/bancarella 6.png');
  game.load.image('level2_componente8', 'assets/levelTwo/componenti/giostra cavalli.png');
  game.load.image('level2_componente9', 'assets/levelTwo/componenti/giostra cavalli2.png');
  game.load.image('level2_componente10', 'assets/levelTwo/componenti/giostra cavalli3.png');


  // Level 3
  // Level 3 /Sfondi
  game.load.image('level3_layer1', 'assets/levelThree/cielo.png');
  game.load.image('level3_layer2', 'assets/levelThree/colline1.png');
  game.load.image('level3_layer3', 'assets/levelThree/colline2.png');
  game.load.image('level3_calpestabile', 'assets/levelThree/calpestabiledef.png');
  game.load.image('level3_nuvola', 'assets/levelThree/nuvola.png');

  // Level 3 /Floor
  game.load.image('level3_floor1', 'assets/levelThree/floor/1.png');
  game.load.image('level3_floor2', 'assets/levelThree/floor/2.png');
  game.load.image('level3_floor3', 'assets/levelThree/floor/3.png');

  // Level 3 /Carrozza
  game.load.image('carrozza', 'assets/levelThree/Carrozza.png');

  // Level 3 /Teatro
  game.load.image('teatro', 'assets/levelThree/teatro.png');

  // Level 3 /Tenda
  game.load.image('tenda', 'assets/levelThree/tenda.png');

  // Level 3 /bossBattleBlock
  game.load.image('bossBattleBlock', 'assets/levelThree/bossBattleBlock.png');

  // Font
  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
}

// Variabili sprite
var player;
var shadow; // per camera-tracking con offset
var platforms; // dal codice di base di Phaser. Variabile non utilizzata nel Livello 1.
var enemyBomb;
var enemyBombEsplosione;
var enemyJug;
var enemySniper;
var dust; // sprite polvere del salto
var dustVar;

var pinocchioCrucified;
var enemySniperDead;
var enemyJugDead;

//Var armi enemyGun
var enemySniperGun0
var enemyJugGun0

// Variabili Mangiafuoco
var mangiafuoco;
var mfGunDx;
var mfGunSx;
var mfShootTimer = 0;
var mfShootTimerBase = 200;
var mfFireballSpeed;
var floorFire;
var animManoDX;
var animManoSX;
var animFastFire;
var mfDead;
var mfMonticchio;
var bossBattleBlock;
var bossBattleLockOn = false;

var randomAnim;

var danza = false;
var danzaTimer = 0;
var d = 0;
var danzaFinita = false;
var danzaStartingPointReached = false;

// Enemy x spawn position
var enemyBombX;
var enemySniperX;
var enemyJugX;
var enemyBombD;

var enemyBombQuantity;
var enemySniperQuantity;
var enemyJugQuantity;

// Variabili di gioco
var facing = "right";
var jumpPower = 0;

var isFiring = false;
var isJumping = false;
var dustJump = false;

var enableUserMovement = true;
var autoPilot = false;
var spawning = true;
var spawningTimer = 0;
var playerInvulnerable = false;

var showingGameOverUI = false;

var gameOverTimer = 0;
var gameWasOver = false;

// Variabili enemyBomb
enemyBomb_0_Direction = 'right';

// Variabili cambio livello
var levelPlaying = 1;
var timerLivello1Livello2 = 0;
var timerLivello2Livello3 = 0;
var cambioLivello = false;

// Variabili grafiche
var healthUI;
var timerLampeggioSalute = 0;

var ammoUIv3;
var timerLampeggioPieno = 0;

var gameOverImage;

var controlsTutorialUI;
var sfondoAzzurro;

// Variabili elementi grafici d'interazione
var ammoBox;
var ammoBoxX;
var ammoBoxY;
var pozione;
var pozioneX;
var pozioneY;

// Variabili globali
var modulo1x1;
var modulo2x2;
var modulo2x4;
var text;
var text2;
var textTween;
var textTween2;
var style1 = { font: "60px Inter", fontWeight: "700", fill: "#711854", align: "center", boundsAlignH: "center", boundsAlignV: "middle"};
var style2 = { font: "60px Inter", fontWeight: "700", fill: "#C7764D", align: "center", boundsAlignH: "center", boundsAlignV: "middle"};
var style3 = { font: "60px Inter", fontWeight: "700", fill: "#274256", align: "center", boundsAlignH: "center", boundsAlignV: "middle"};
var style4 = { font: "26px Inter", fontWeight: "400", fill: "#ffffff", align: "center", boundsAlignH: "center", boundsAlignV: "middle"};

// var style = { font: "bold 60px Inter", fill: "#fff", align: "center", boundsAlignH: "center", boundsAlignV: "middle"}; // <== Precedente

// Variabili livello 1
var level1_floor;
var level1_houses;
var level1_calpestabile;
var level1_cielo;
var level1_casedavanti;
var level1_casedietro;

var placeholder_CasaGeppetto;

// Variabili livello 2
var level2_calpestabile_parte1;
var level2_calpestabile_parte2;
var level2_cielo;
var level2_cielo2;
var level2_collineRosse;
var level2_collineRosse2;
var level2_collineGialle;
var level2_collineGialle2;

var level2_floor;
var level2_componente;

var level2_ruota1_supporto;
var level2_ruota1_centrale;
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

var level3_layer1;
var level3_layer2;
var level3_layer3;
var level3_calpestabile;
var level3_floor;
var carrozza;
var teatro;
var tenda;
var level3_nuvola;

// Tempo
var timeWhenLoaded;
var gameStopWatch;

//Armi
//var bullets;
//var bulletTime = 0;
var gun1;
var bulletPool = 50;
const maxAmmo = 50;
var pickAmmo;
var scatterShot;

const playerMaxHealth = 5;

// Keys & input
var cursors;
var jumpButton;
var fireButton;
var enterButton;

var punteggio = 1000;
var textScore;
// ++++++++++ CREATE ++++++++++

function create() {


  console.log('Running create() with levelPlaying = '+ levelPlaying + '...')

  game.world.setBounds(0, 0, 20000, 2304);

  if (gameWasOver == false && cambioLivello == false) {
    // Time
    timeWhenLoaded = game.time.time;

    healthUI = game.add.sprite(30, 30, 'healthUI');
    healthUI.fixedToCamera = true;
    healthUI.scale.setTo(0.75, 0.75);

    healthUI.animations.add('lampeggioRosso', [8,8,8,8,8,9,10,11,12,11,10,9,8,8,8,8,8], 10, true);
    saluteLampeggioPieno = healthUI.animations.add('saluteLampeggioPieno', [4,3,2,4,1,0,1,4,], 15, false);

    ammoUIv3 = game.add.sprite(863, 675, 'ammoUIv3');
    ammoUIv3.fixedToCamera = true;

    lampeggioPieno = ammoUIv3.animations.add('lampeggioPieno', [5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5], 40, false);
    ammoUIv3.animations.add('lampeggioVuoto', [10,11,12,13,14,15,15,14,13,12,11,10,11,12,13,14,15,15,14,13,12,11,10,11,12,13,14,15,15,14,13,12,11,10,11,12,13,14,15,15,14,13,12,11,10], 40, false);
  }

  if (gameWasOver == false) {
    // Elementi modulari globali
    modulo1x1 = game.add.physicsGroup();
    modulo2x2 = game.add.physicsGroup();
    modulo2x4 = game.add.physicsGroup();
  }

  // Livello 1
  if(levelPlaying == 1 && gameWasOver == false)
  {
    sfondoAzzurro = game.add.sprite(0, 0, 'sfondoAzzurro');

    // Calpestabile livello 1
    level1_cielo = game.add.sprite(0, 0, 'level1_cielo');
    level1_casedietro = game.add.sprite(0, 0, 'level1_casedietro');
    level1_casedavanti = game.add.sprite(0, 0, 'level1_casedavanti');
    level1_calpestabile = game.add.sprite(0, 0, 'level1_calpestabile');
    // Pavimento livello 1
    level1_floor = game.add.physicsGroup();
    level1_floor.create(0, 2200, 'level1_floor1');
    level1_floor.create(2350, 2200, 'level1_floor2');
    level1_floor.create(3000, 2200, 'level1_floor3');
    level1_floor.create(4000, 2200, 'level1_floor4');
    level1_floor.create(4650, 2200, 'level1_floor5');
    level1_floor.create(4900, 2200, 'level1_floor6');
    level1_floor.create(6350, 2200, 'level1_floor7');
    level1_floor.create(7000, 2200, 'level1_floor8');
    level1_floor.create(7650, 2200, 'level1_floor9');
    level1_floor.create(9300, 2200, 'level1_floor10');
    level1_floor.create(10350, 2200, 'level1_floor11');
    level1_floor.create(12300, 2200, 'level1_floor12');
    level1_floor.create(12750, 2200, 'level1_floor13');
    level1_floor.alpha = 0; // Controllo opacit?? // 0 = opacit?? 0% ; 1 = opacit?? 100%
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
    modulo2x2.create(9800, 2100, 'modulo2x2');
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
    level1_houses.create(5400, 1700, 'level1_house4');
    level1_houses.create(6345, 1800, 'level1_house5');
    level1_houses.create(6995, 1700, 'level1_house6');
    level1_houses.create(7645, 1500, 'level1_house7');
    level1_houses.create(8500, 1600, 'level1_house8');
    level1_houses.create(9295, 1750, 'level1_house9');
    level1_houses.create(10345, 1900, 'level1_house10');
    level1_houses.create(11250, 1700, 'level1_house11');
    level1_houses.alpha = 0;
    level1_houses.setAll('body.immovable', true);

    // Testo
    text = game.add.text(0, 0, "Livello 1\n Villaggio di Geppetto", style1);
    text.alpha = 0;
  }

  // Livello 2
  if(levelPlaying == 2 && gameWasOver == false)
  {
    level2_cielo = game.add.sprite(-1800.8767, 0, 'level2_cielo');
    level2_cielo2 = game.add.sprite(11649, 0, 'level2_cielo2');
    level2_collineGialle = game.add.sprite(-690.1809, 0, 'level2_collineGialle');
    level2_collineGialle2 = game.add.sprite(13824, 0, 'level2_collineGialle2');
    level2_collineRosse = game.add.sprite(-1800.8767, 0, 'level2_collineRosse');
    level2_collineRosse2 = game.add.sprite(13824, 0, 'level2_collineRosse2');
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

    // Componenti livello 2
    level2_componente = game.add.physicsGroup();
    level2_componente.create(0, 1950, 'level2_componente0');
    level2_componente.create(0, 1850, 'level2_componente0.1');
    level2_componente.create(1095, 1900, 'level2_componente1');
    level2_componente.create(3600, 1950, 'level2_componente2');
    level2_componente.create(4800, 1850, 'level2_componente8');
    level2_componente.create(8000, 1900, 'level2_componente3');
    level2_componente.create(8750, 1950, 'level2_componente4');
    level2_componente.create(11050, 1950, 'level2_componente5');
    level2_componente.create(11100, 1850, 'level2_componente6');
    level2_componente.create(13145, 1850, 'level2_componente9');
    level2_componente.create(14395, 1950, 'level2_componente7');
    level2_componente.create(17200, 1950, 'level2_componente5');
    level2_componente.create(17250, 1850, 'level2_componente6');
    level2_componente.create(18800, 1850, 'level2_componente10');
    level2_componente.alpha = 0;
    level2_componente.setAll('body.immovable', true);

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
    modulo1x1.create(12100, 1600, 'modulo1x1');

    modulo1x1.create(12600, 1600, 'modulo1x1');
    modulo1x1.create(12650, 1600, 'modulo1x1');
    modulo1x1.create(12700, 1600, 'modulo1x1');

    modulo1x1.create(12800, 1750, 'modulo1x1');
    modulo1x1.create(12850, 1750, 'modulo1x1');
    modulo1x1.create(12900, 1750, 'modulo1x1');

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

    modulo1x1.create(17150, 1550, 'modulo1x1');
    modulo1x1.create(17200, 1550, 'modulo1x1');
    modulo1x1.create(17250, 1550, 'modulo1x1');

    modulo1x1.create(17500, 1550, 'modulo1x1');
    modulo1x1.create(17550, 1550, 'modulo1x1');

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
    modulo1x1.setAll('body.immovable', true);

    // Moduli 2x2
    modulo2x2.create(600, 2100, 'modulo2x2');
    modulo2x2.create(2950, 2100, 'modulo2x2');
    modulo2x2.create(3300, 2100, 'modulo2x2');
    modulo2x2.create(4400, 2100, 'modulo2x2');
    modulo2x2.create(6100, 2100, 'modulo2x2');
    modulo2x2.create(9100, 2100, 'modulo2x2');
    modulo2x2.create(9700, 2100, 'modulo2x2');
    modulo2x2.create(10750, 2100, 'modulo2x2');
    modulo2x2.create(14200, 2100, 'modulo2x2');
    modulo2x2.create(18000, 2100, 'modulo2x2');
    modulo2x2.create(18450, 2100, 'modulo2x2');
    modulo2x2.setAll('body.immovable', true);

    // Moduli 2x4
    modulo2x4.create(800, 2000, 'modulo2x4');
    modulo2x4.create(4550, 2000, 'modulo2x4');
    modulo2x4.create(6300, 2000, 'modulo2x4');
    modulo2x4.create(8500, 2000, 'modulo2x4');
    modulo2x4.create(10850, 2000, 'modulo2x4');
    modulo2x4.create(12650, 2000, 'modulo2x4');
    modulo2x4.create(14800, 2000, 'modulo2x4');
    modulo2x4.create(18550, 2000, 'modulo2x4');
    modulo2x4.create(19350, 2000, 'modulo2x4');
    modulo2x4.setAll('body.immovable', true);

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

    //testo
    text = game.add.text(-400, 0, "Livello 2\n Paese dei Balocchi", style2);
    text.alpha = 0;
    createText(text);
  }

  // Livello 3 (circo)
  if(levelPlaying == 3 && gameWasOver == false)
  {
    level3_layer1 = game.add.sprite(0, 0, 'level3_layer1');
    level3_layer2 = game.add.sprite(0, 0, 'level3_layer2');
    level3_layer3 = game.add.sprite(0, 0, 'level3_layer3');
    level3_calpestabile = game.add.sprite(0, 0, 'level3_calpestabile');
    level3_nuvola = game.add.sprite(7209, 1925, 'level3_nuvola');

    // Floor
    level3_floor = game.add.physicsGroup();
    level3_floor.create(0, 2200, 'level3_floor1');
    level3_floor.create(1200, 2200, 'level3_floor2');
    level3_floor.create(2450, 2200, 'level3_floor3');
    level3_floor.setAll('body.immovable', true);
    level3_floor.alpha = 0;

    // Casse singole
    modulo2x2.create(0, 1900, 'modulo2x2');
    modulo2x2.create(900, 2100, 'modulo2x2');
    modulo2x2.create(1650, 2100, 'modulo2x2');
    modulo2x2.create(2700, 2100, 'modulo2x2');
    modulo2x2.create(3450, 2100, 'modulo2x2');
    modulo2x2.setAll('body.immovable', true);

    // Moduli 2x4 (casse doppie)
    modulo2x4.create(1750, 2000, 'modulo2x4');
    modulo2x4.create(0, 2000, 'modulo2x4');
    modulo2x4.setAll('body.immovable', true);

    // Piattaforme
    modulo1x1.create(2000, 2050, 'modulo1x1');
    modulo1x1.create(2050, 2050, 'modulo1x1');
    modulo1x1.create(2100, 2050, 'modulo1x1');
    modulo1x1.create(2150, 2050, 'modulo1x1');
    modulo1x1.create(2200, 2050, 'modulo1x1');
    modulo1x1.create(2250, 2050, 'modulo1x1');
    modulo1x1.create(2300, 2050, 'modulo1x1');

    modulo1x1.create(7250, 1940, 'modulo1x1');
    modulo1x1.create(7300, 1940, 'modulo1x1');
    modulo1x1.create(7350, 1940, 'modulo1x1');

    modulo1x1.setAll('body.immovable', true);

    // Carrozza
    carrozza = game.add.physicsGroup();
    carrozza.create(3000, 1950, 'carrozza');
    carrozza.setAll('body.immovable', true);
    carrozza.alpha = 0;

    // Teatro
    teatro = game.add.physicsGroup();
    teatro.create(6800, 2100, 'teatro');
    teatro.setAll('body.immovable', true);
    teatro.alpha = 0;

    tenda = game.add.sprite(0, 0, 'tenda');

    //testo
    text = game.add.text(-400,0, "Livello 3\n Circo di Mangiafuoco", style3);
    text.alpha = 0;
    createText(text);
  }

  // Munizioni
  if (levelPlaying == 1) {
    ammoBoxX = [3690, 5265, 8315, 10715];
    ammoBoxY = [1485, 2125, 2125, 2125];
  } else if (levelPlaying == 2) {
    ammoBoxX = [1865, 4700, 8990, 10650, 13815, 17775];
    ammoBoxY = [2125, 2125, 2125, 2125, 2125, 1925];
  } else if (levelPlaying == 3) {
    ammoBoxX = [915, 3465, 5825, 6625, 7100];
    ammoBoxY = [2025, 2025, 2125, 2125, 2025];
  }
  ammoBox = game.add.physicsGroup();
  ammoBox.create(ammoBoxX[0], ammoBoxY[0], 'ammoBox');
  ammoBox.create(ammoBoxX[1], ammoBoxY[1], 'ammoBox');
  ammoBox.create(ammoBoxX[2], ammoBoxY[2], 'ammoBox');
  ammoBox.create(ammoBoxX[3], ammoBoxY[3], 'ammoBox');
  if (levelPlaying == 2) {
    ammoBox.create(ammoBoxX[4], ammoBoxY[4], 'ammoBox');
    ammoBox.create(ammoBoxX[5], ammoBoxY[5], 'ammoBox');
  }
  if (levelPlaying == 3) {
    ammoBox.create(ammoBoxX[4], ammoBoxY[4], 'ammoBox');
  }
  game.physics.arcade.enable(ammoBox);

  // Pozioni
  if (levelPlaying == 1) {
    pozioneX = [3520, 8225, 11125];
    pozioneY = [2135, 1925, 2125];
  } else if (levelPlaying == 2) {
    pozioneX = [3340, 6825, 9625, 12870, 15225, 19365];
    pozioneY = [1725, 2125, 2125, 1675, 2125, 1925];
  } else if (levelPlaying == 3) {
    pozioneX = [3090, 4975, 6925];
    pozioneY = [1875, 2125, 2025];
  }
  pozione = game.add.physicsGroup();
  pozione.create(pozioneX[0], pozioneY[0], 'pozione');
  pozione.create(pozioneX[1], pozioneY[1], 'pozione');
  pozione.create(pozioneX[2], pozioneY[2], 'pozione');
  if (levelPlaying == 2){
    pozione.create(pozioneX[3], pozioneY[3], 'pozione');
    pozione.create(pozioneX[4], pozioneY[4], 'pozione');
    pozione.create(pozioneX[5], pozioneY[5], 'pozione');
  }
  game.physics.arcade.enable(pozione);

  // Player (Pinocchio)
  // Coordinate di spawn [variano a seconda del livello caricato]
  spawn();

  //PINOCHIO SPRITESHEET V4
  player.animations.add('standR', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14]);
  player.animations.add('standL', [15, 16, 17, 18, 19, 20, 21, 22, 23,24,25,26,27,28,29]);
  player.animations.add('walkR', [86, 87, 88, 89, 90, 91, 92, 93,94,95,96,97]); // Animazione camminata verso dx
  player.animations.add('walkL', [110,111,112,113,114,115,116,117,118,119,120,121]); // Animazione camminata verso sx
  player.animations.add('jumpR', [68,69,70,71,72,73,74,75]);
  player.animations.add('jumpL', [78,79,80,81,82,83,84,85]);
  player.animations.add('dropR', [58,59,60,61]);
  player.animations.add('dropL', [62,63,64,65]);
  player.animations.add('skidR', [30,31,32]);
  player.animations.add('skidL', [33,34,35]);
  player.animations.add('skidFireR', [52,53,54]);
  player.animations.add('skidFireL', [55,56,57]);
  player.animations.add('walkFireR', [98,99,100,101,102,103,104,105,106,107,108,109]);
  player.animations.add('walkFireL', [122,123,124,125,126,127,128,129,130,131,32,133]);
  player.animations.add('fireR', [36,37,38,39,40,41,42,43]);
  player.animations.add('fireL', [44,45,46,47,48,49,50,51]);

  game.physics.arcade.enable(player);
  player.body.collideWorldBounds = false;
  player.body.gravity.y = 2000; // valore corretto 2000
  player.body.setSize(70, 100, 65, 43); // Hitbox (width, height, x-offset, y-offset) // questa linea funziona solo se inserita dopo 'game.physics.arcade.enable'
  player.health = playerMaxHealth;

  // FUNZIONE DI SPARO CON PHASER.WEAPON
  gun1 = game.add.weapon(100, 'pinocchioBullet');
  gun1.trackSprite(player);
  gun1.fireRate = 200;
  gun1.fireAngle = 0;
  gun1.bulletSpeed = 700;

  gun1.fireLimit = bulletPool;
  gun1.addBulletAnimation('fire', [0,1,2,3,4], 15, true);
  gun1.setBulletBodyOffset(16, 8, 66, 45);
  gun1.bulletAngleOffset = 180;
  gun1.bulletKillType = 4; //elimina proiettili fuori dalla camera

  //  =====================ENEMIES============================
  // Enemy BOMB
  if (levelPlaying == 1) {
    enemyBombX = [2925, 5325, 9175];
    enemyBombD = [375, 625, 475]
    enemyBombQuantity = enemyBombX.length;
  } else if (levelPlaying == 2) {
    enemyBombX = [4725, 7225, 11775, 13900, 16100, 17725, 18725];
    enemyBombD = [375, 275, 275, 125, 900, 275, 375];
    enemyBombQuantity = enemyBombX.length;
  } else if (levelPlaying == 3) {
    enemyBombX = [1950, 3700, 5500];
    enemyBombD = [300, 475, 275];
    enemyBombQuantity = enemyBombX.length;
  }
  enemyBomb = game.add.physicsGroup();
  enemyBomb.create(enemyBombX[0], 1200, 'marionettaBomba');
  enemyBomb.create(enemyBombX[1], 1200, 'marionettaBomba');
  enemyBomb.create(enemyBombX[2], 1200, 'marionettaBomba');
  if (levelPlaying == 2) {
    enemyBomb.create(enemyBombX[3], 1200, 'marionettaBomba');
    enemyBomb.create(enemyBombX[4], 1200, 'marionettaBomba');
    enemyBomb.create(enemyBombX[5], 1200, 'marionettaBomba');
    enemyBomb.create(enemyBombX[6], 1200, 'marionettaBomba');
  }

  game.physics.arcade.enable(enemyBomb);
  enemyBomb.setAll('health', 4);
  enemyBomb.forEach(function (enemy) {
    enemy.body.velocity.x = 120;
  });
  enemyBomb.callAll('animations.add', 'animations', 'bombaWalkR', [0,1,2,3,4,5,6,7,8,9,10], 15, true);
  enemyBomb.callAll('animations.add', 'animations', 'bombaWalkL', [21,20,19,18,17,16,15,14,13,12,11], 15, true);
  enemyBomb.callAll('body.setSize', 'body', 70, 95, 55, 48);

  //Enemy SNIPER
  if (levelPlaying == 1) {
    enemySniperX = [4415, 7300, 11600];
    enemySniperQuantity = enemySniperX.length;
  } else if (levelPlaying == 2) {
    enemySniperX = [1800, 6550, 9500, 11300, 13400];
    enemySniperQuantity = enemySniperX.length;
  } else if (levelPlaying == 3) {
    enemySniperX = [1600, 3900, 4800, 6150];
    enemySniperQuantity = enemySniperX.length;
  }
  enemySniper = game.add.physicsGroup();
  enemySniper.create(enemySniperX[0], 1500, 'marionettaSniper');
  enemySniper.create(enemySniperX[1], 1500, 'marionettaSniper');
  enemySniper.create(enemySniperX[2], 1500, 'marionettaSniper');
  if (levelPlaying == 2) {
    enemySniper.create(enemySniperX[3], 1200, 'marionettaSniper');
    enemySniper.create(enemySniperX[4], 1200, 'marionettaSniper');
  }
  if (levelPlaying == 3) {
    enemySniper.create(enemySniperX[3], 1200, 'marionettaSniper');
  }
  game.physics.arcade.enable(enemySniper);
  enemySniper.setAll('health', 3);
  enemySniper.callAll('animations.add', 'animations', 'sniperFireR', [20,21,22,23,24,25,26,27,28,29], 10, false);
  enemySniper.callAll('animations.add', 'animations', 'sniperR', [0,1,2,3,4,5,6,7,8,9], 10, true);
  enemySniper.callAll('animations.add', 'animations', 'sniperFireL', [39,38,37,36,35,34,33,32,31,30], 10, false);
  enemySniper.callAll('animations.add', 'animations', 'sniperL', [10,11,12,13,14,15,16,17,18,19], 10, true);
  enemySniper.callAll('body.setSize', 'body', 70, 95, 45, 32);

  //EnemySniper Weapon
  enemySniperGun0 = game.add.weapon(100, 'nemiciBullet');
  enemySniperGun0.fireRate = 1600;
  enemySniperGun0.bulletSpeed = 400;
  enemySniperGun0.bulletAngleVariance = 3;
  enemySniperGun0.bulletKillType = 4;
  enemySniperGun0.addBulletAnimation('fire', [0,1,2,3,4], 15, true);
  enemySniperGun0.setBulletBodyOffset(16, 8, 66, 45);
  enemySniperGun0.bulletAngleOffset = 180;

  enemySniperDead = game.add.physicsGroup();



  //Enemy JUG
  if (levelPlaying == 1) {
    enemyJugX = [6600, 8800];
    enemyJugQuantity = enemyJugX.length;
  } else if (levelPlaying == 2) {
    enemyJugX = [4000, 8750, 10500, 15550, 17450];
    enemyJugQuantity = enemyJugX.length;
  } else if (levelPlaying == 3) {
    enemyJugX = [2650, 4450, 6400];
    enemyJugQuantity = enemyJugX.length;
  }
  enemyJug = game.add.physicsGroup();
  enemyJug.create(enemyJugX[0], 1300, 'marionettaJug');
  enemyJug.create(enemyJugX[1], 1300, 'marionettaJug');
  if (levelPlaying == 2) {
    enemyJug.create(enemyJugX[2], 1300, 'marionettaJug');
    enemyJug.create(enemyJugX[3], 1300, 'marionettaJug');
    enemyJug.create(enemyJugX[4], 1300, 'marionettaJug');
  }
  if (levelPlaying == 3) {
    enemyJug.create(enemyJugX[2], 1300, 'marionettaJug');
  }
  game.physics.arcade.enable(enemyJug);

  enemyJug.setAll('health', 5);
  enemyJug.callAll('animations.add', 'animations', 'jugFireL', [30,31,32,33,34,35,36,37,38,39], 10, true);
  enemyJug.callAll('animations.add', 'animations', 'jugFireR', [20,21,22,23,24,25,26,27,28,29], 10, true);
  enemyJug.callAll('animations.add', 'animations', 'jugL', [10,11,12,13,14,15,16,17,18,19], 10, true);
  enemyJug.callAll('animations.add', 'animations', 'jugR', [0,1,2,3,4,5,6,7,8,9], 10, true);

  enemyJug.callAll('body.setSize', 'body', 100, 115, 40, 44);

  enemyJugGun0 = game.add.weapon(100, 'nemiciBullet');
  enemyJugGun0.fireRate = 100; //100 quello previsto, abbassato per poter giocare
  enemyJugGun0.bulletSpeed = 400;
  enemyJugGun0.bulletAngleVariance = 3;
  enemyJugGun0.bulletKillType = 4;
  enemyJugGun0.addBulletAnimation('fire', [0,1,2,3,4], 15, true);
  enemyJugGun0.setBulletBodyOffset(16, 8, 66, 45);
  enemyJugGun0.bulletAngleOffset = 180;

  enemyJugDead = game.add.physicsGroup();

  // Mangiafuoco
  if (levelPlaying == 3) {
    mfMonticchio = game.add.sprite(7680, 1960, 'cumuloDiMarionette');
    mangiafuoco = game.add.sprite(7650, 1715, 'ilBoss');

    game.physics.arcade.enable(mangiafuoco);
    mangiafuoco.body.collideWorldBounds = false;
    //mangiafuoco.body.gravity.y = 2000; // valore corretto 2000
    mangiafuoco.body.setSize(200, 250, 150, 135); // Hitbox (width, height, x-offset, y-offset) // questa linea funziona solo se inserita dopo 'game.physics.arcade.enable'
    mangiafuoco.health = 30;
    mangiafuoco.body.immovable = true;
    mangiafuoco.animations.add('mangiafuocoL', [0,1,2,3,4,5,6,7,8,9], 10, true);
    animManoDX = mangiafuoco.animations.add('mangiafuocoManoDX', [40,41,42,43,44,45,46,47,48], 10, false);
    animManoSX = mangiafuoco.animations.add('mangiafuocoManoSX', [20,21,22,23,24,25,26,27,28], 10, false);
    animFastFire = mangiafuoco.animations.add('mangiafuocoFastFire', [40,41,42,43,44,45,46,47,48], 15, false);

    mfGunDx = game.add.weapon(100, 'palleDiMangiafuoco');
    mfGunDx.trackSprite(mangiafuoco)
    mfGunDx.trackOffset.y = 200;
    mfGunDx.trackOffset.x = 150;
    mfGunDx.fireRate = 500;
    mfGunDx.fireAngle = 205;
    mfGunDx.bulletAngleVariance = 5;
    mfGunDx.bulletGravity.y = 1000;
    mfGunDx.bulletKillType = 4;
    mfGunDx.addBulletAnimation('fire', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 15, true);
    mfGunDx.setBulletBodyOffset(27, 27, 98, 61);

    mfGunSx = game.add.weapon(100, 'palleDiMangiafuoco');
    mfGunSx.trackSprite(mangiafuoco)
    mfGunSx.trackOffset.y = 200
    mfGunSx.fireRate = 500;
    mfGunSx.bulletSpeed = 400;
    mfGunSx.bulletKillType = 4;
    mfGunSx.addBulletAnimation('fire', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 15, true);
    mfGunSx.setBulletBodyOffset(27, 27, 98, 61);
  }

  // Input (cursors and keys)
  cursors = game.input.keyboard.createCursorKeys();
  jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  fireButton = game.input.keyboard.addKey(Phaser.Keyboard.F);
  enterButton = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

  gun1.onFire.add(ammoSpent);
  fireButton.onDown.add(isFiringTrue);
  fireButton.onUp.add(isFiringFalse);
  jumpButton.onDown.add(dustJumpTrue);
  jumpButton.onUp.add(dustJumpFalse);

  enemySniperGun0.onFire.add(sniperIsFiringTrue);

  player.events.onKilled.add(pinocchioCrocifisso);

  // Camera Follow
  game.camera.follow(shadow, 1, 0.1, 0.5); // 1) chi segue 2) preset "style" (0= lock-on, 1= platformer) 3) lerpX 4) lerpY [LERP = valore da 0 a 1]

  // BringToTop()
  if (levelPlaying == 3) {
    tenda.bringToTop();
    level3_nuvola.bringToTop();
  }

  healthUI.bringToTop();
  ammoUIv3.bringToTop();

  gameWasOver = false;
  console.log("gameWasOver reset to " + gameWasOver);

  game.camera.resetFX();
  console.log("cameraFX reset");

  console.log("create() completed.")
}

// ===== UPDATE =====

function update () {


  //console.log('playerInvulnerable ' + playerInvulnerable)

  // TIME
  gameStopWatch = Math.floor((game.time.time-timeWhenLoaded)/1000);

  // Collide
  // Collide /Globali
  game.physics.arcade.collide(player, platforms);

  game.physics.arcade.collide(player, modulo1x1, landingCallback, landingProcessCallback, this);
  game.physics.arcade.collide(player, modulo2x2, landingCallback, landingProcessCallback, this);
  game.physics.arcade.collide(player, modulo2x4, landingCallback, landingProcessCallback, this);
  game.physics.arcade.collide(player, modulo1x1);
  game.physics.arcade.collide(player, modulo2x2);
  game.physics.arcade.collide(player, modulo2x4);
  game.physics.arcade.collide(enemyBomb, modulo1x1);
  game.physics.arcade.collide(enemyBomb, modulo2x2);
  game.physics.arcade.collide(enemyBomb, modulo2x4);
  game.physics.arcade.collide(enemyJug, modulo1x1);
  game.physics.arcade.collide(enemyJug, modulo2x2);
  game.physics.arcade.collide(enemyJug, modulo2x4);
  game.physics.arcade.collide(enemySniper, modulo1x1);
  game.physics.arcade.collide(enemySniper, modulo2x2);
  game.physics.arcade.collide(enemySniper, modulo2x4);
  if (pinocchioCrucified !== undefined) {
    game.physics.arcade.collide(pinocchioCrucified, modulo1x1);
    game.physics.arcade.collide(pinocchioCrucified, modulo2x2);
    game.physics.arcade.collide(pinocchioCrucified, modulo2x4);
  }

  //Collide proiettili vari
  game.physics.arcade.collide(gun1.bullets, modulo1x1, killbullets);
  game.physics.arcade.collide(enemySniperGun0.bullets, modulo1x1, killbullets);
  game.physics.arcade.collide(enemyJugGun0.bullets, modulo1x1, killbullets);
  game.physics.arcade.collide(gun1.bullets, modulo1x1, killbullets);
  game.physics.arcade.collide(gun1.bullets, modulo2x2, killbullets);
  game.physics.arcade.collide(enemySniperGun0.bullets, modulo2x2, killbullets);
  game.physics.arcade.collide(enemyJugGun0.bullets, modulo2x2, killbullets);
  game.physics.arcade.collide(gun1.bullets, modulo2x4, killbullets);
  game.physics.arcade.collide(enemySniperGun0.bullets, modulo2x4, killbullets);
  game.physics.arcade.collide(enemyJugGun0.bullets, modulo2x4, killbullets);

  // Collide /Livello 1
  if (levelPlaying == 1) {
    game.physics.arcade.collide(enemyBomb, level1_floor);
    game.physics.arcade.collide(enemySniper, level1_floor);
    game.physics.arcade.collide(enemySniperGun0.bullets, level1_floor, killbullets);
    game.physics.arcade.collide(enemyJug, level1_floor);
    game.physics.arcade.collide(enemyJugGun0.bullets, level1_floor, killbullets);

    game.physics.arcade.collide(player, level1_floor, landingCallback, landingProcessCallback, this);
    game.physics.arcade.collide(player, level1_floor);
    game.physics.arcade.collide(player, level1_houses, landingCallback, landingProcessCallback, this);
    game.physics.arcade.collide(player, level1_houses);
    game.physics.arcade.collide(gun1.bullets, level1_floor, killbullets);
    game.physics.arcade.collide(gun1.bullets, level1_houses, killbullets);
    if (pinocchioCrucified !== 'undefined') {
      game.physics.arcade.collide(pinocchioCrucified, level1_floor);
      game.physics.arcade.collide(pinocchioCrucified, level1_houses);
    }

    game.physics.arcade.collide(enemyBomb, level1_houses);
    game.physics.arcade.collide(enemySniper, level1_houses);
    game.physics.arcade.collide(enemyJug, level1_houses);
    game.physics.arcade.collide(enemySniperGun0.bullets, level1_houses, killbullets);
    game.physics.arcade.collide(enemyJugGun0.bullets, level1_houses, killbullets);
  }

  // Collide /Livello 2
  if (levelPlaying == 2) {
    game.physics.arcade.collide(player, level2_floor, landingCallback, landingProcessCallback, this);
    game.physics.arcade.collide(player, level2_floor);
    game.physics.arcade.collide(gun1.bullets, level2_floor, killbullets);
    game.physics.arcade.collide(player, level2_componente);
    game.physics.arcade.collide(gun1.bullets, level2_componente, killbullets);
    if (pinocchioCrucified !== 'undefined') {
      game.physics.arcade.collide(pinocchioCrucified, level2_floor);
      game.physics.arcade.collide(pinocchioCrucified, level2_componente);
    }

    game.physics.arcade.collide(enemyBomb, level2_floor);
    game.physics.arcade.collide(enemySniper, level2_floor);
    game.physics.arcade.collide(enemySniperGun0.bullets, level2_floor, killbullets);
    game.physics.arcade.collide(enemyJug, level2_floor);
    game.physics.arcade.collide(enemyJugGun0.bullets, level2_floor, killbullets);

    game.physics.arcade.collide(enemyBomb, level2_componente);
    game.physics.arcade.collide(enemySniper, level2_componente);
    game.physics.arcade.collide(enemySniperGun0.bullets, level2_componente, killbullets);
    game.physics.arcade.collide(enemyJug, level2_componente);
    game.physics.arcade.collide(enemyJugGun0.bullets, level2_componente, killbullets);

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

    game.physics.arcade.collide(player, level2_mongolfiera1); // <== Non c'?? landingCallback per evitare bug. Non rimettere.
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

    // Ciascuna ruota panoramica ha 8 cabine. Ogni cabina ?? chiamata con una lettera diversa (A-H).

    // Schema cabine-lettere:
    //        |H|
    //    |F|     |G|
    //   ???           ???
    // |E|     o     |A|
    //   ???           ???
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

  // Collide /Livello 3
  if (levelPlaying == 3) {
    game.physics.arcade.collide(player, level3_floor, landingCallback, landingProcessCallback, this);
    game.physics.arcade.collide(player, level3_floor);
    game.physics.arcade.collide(gun1.bullets, level3_floor, killbullets);
    game.physics.arcade.collide(player, carrozza);
    game.physics.arcade.collide(gun1.bullets, carrozza, killbullets);
    game.physics.arcade.collide(player, teatro);
    game.physics.arcade.collide(gun1.bullets, teatro, killbullets);
    if (pinocchioCrucified !== 'undefined') {
      game.physics.arcade.collide(pinocchioCrucified, level3_floor);
      game.physics.arcade.collide(pinocchioCrucified, carrozza);
      game.physics.arcade.collide(pinocchioCrucified, teatro);
    }

    game.physics.arcade.collide(enemyJug, level3_floor);
    game.physics.arcade.collide(enemyJug, carrozza);
    game.physics.arcade.collide(enemyJugGun0.bullets, carrozza, killbullets);
    game.physics.arcade.collide(enemyJugGun0.bullets, teatro, killbullets);
    game.physics.arcade.collide(enemyJugGun0.bullets, level3_floor, killbullets);

    game.physics.arcade.collide(enemySniper, level3_floor);
    game.physics.arcade.collide(enemySniperGun0.bullets, carrozza, killbullets);
    game.physics.arcade.collide(enemySniperGun0.bullets, teatro, killbullets);
    game.physics.arcade.collide(enemySniperGun0.bullets, level3_floor, killbullets);

    game.physics.arcade.collide(enemyBomb, level3_floor);

    // Overlap per la Boss Battle
    game.physics.arcade.collide(mangiafuoco, level3_floor);
    game.physics.arcade.collide(mangiafuoco, teatro);
    game.physics.arcade.collide(mfDead, level3_floor);
    game.physics.arcade.collide(mfDead, teatro);
    game.physics.arcade.collide(player, mfDead);
    game.physics.arcade.collide(player, mangiafuoco);
    game.physics.arcade.collide(player, bossBattleBlock);
    game.physics.arcade.overlap(gun1.bullets, mangiafuoco, shootMangiafuoco);

    game.physics.arcade.collide(mfGunDx.bullets, teatro, createFloorFire);
    game.physics.arcade.collide(mfGunSx.bullets, teatro, killbullets);

    if (danza == false) {
      game.physics.arcade.overlap(player, floorFire, touchFloorFire);
      game.physics.arcade.overlap(mfGunSx.bullets, player, enemyDamage);
    }
  }

  // Overlap tra player e enemy
  game.physics.arcade.overlap(player, enemyBomb, touchEnemyBomb);
  game.physics.arcade.overlap(player, enemySniper, touchEnemySniper);
  game.physics.arcade.overlap(player, enemyJug, touchEnemyJug);

  game.physics.arcade.overlap(gun1.bullets, enemyBomb, shootEnemyBomb);
  game.physics.arcade.overlap(gun1.bullets, enemySniper, shootEnemySniper);
  game.physics.arcade.overlap(gun1.bullets, enemyJug, shootEnemyJug);

  // Overlap tra enemies e player
  game.physics.arcade.overlap(enemySniperGun0.bullets, player, enemyDamage);
  game.physics.arcade.overlap(enemyJugGun0.bullets, player, enemyDamage);

  // Autopilot on spawn
  // Autopilot on spawn /Livello 1
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
  // Autopilot on spawn /Livello 2
  if (levelPlaying == 2 && spawning == true) {
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
  // Autopilot on spawn /Livello 3
  if (levelPlaying == 3 && spawning == true) {
    spawningTimer += 1;
    if (spawningTimer >= 70) {
      player.body.velocity.x = 300;
      if (player.x >= 160) {
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

  if (autoPilot == false) { // <== Normale offset durante il gioco
    shadow.x = player.x+350;
    shadow.y = player.y+120;
  } else if (autoPilot == true && spawning == true) { // <== Offset durante l'automovent allo spawn
    shadow.y = player.y+120;
    if (levelPlaying == 2) {
      shadow.x = 610;
    }
    if (levelPlaying == 3) {
      shadow.x = 505;
    }
  }
  if (levelPlaying == 3 && (player.x > 7000 || bossBattleLockOn == true)) { // <== Offset durante la boss battle
    shadow.x = 7640;
    shadow.y = 1950;
    if (bossBattleLockOn == false) {
      bossBattleLock();
    }
  }

  // Game Over
  // Game over per caduta
  if (player.y > 2060 && autoPilot == false && gameWasOver == false) {
    if (gameOverTimer == 0) { // <== Serve ad evitare che il fade venga eseguito pi?? di una volta.
      game.camera.fade(0x000000, 1000);
    }
    gameOverTimer += 1;
    if (gameOverTimer == 100) {
      console.log("Player fell below y=2060.");
      player.body.gravity.y = 0;
      player.body.velocity.y = 0;
      gameover();
    }
  }
  // Game over per danno
  if (player.health <= 0) {
    if (gameOverTimer == 150) { // <== Serve ad evitare che il fade venga eseguito pi?? di una volta.
      game.camera.fade(0x000000, 1000);
    }
    gameOverTimer += 1;
    if (gameOverTimer == 250) {
      console.log("Player.health fell below 0.");
      gameover();
    }
  }

  // UI Game Over
  if (enterButton.isDown && showingGameOverUI == true) {
    console.log("Spacebar pressed while showingGameOverUI = "+showingGameOverUI);
    showingGameOverUI = false;
    if (levelPlaying == 1) {
      setTimeout(softDestroyLevel1, 1050);
      setTimeout(create, 1050);
    } else if (levelPlaying == 2) {
      setTimeout(softDestroyLevel2, 1050);
      setTimeout(create, 1050);
    } else if (levelPlaying == 3) {
      setTimeout(softDestroyLevel3, 1050);
      setTimeout(create, 1050);
    }
    gameOverImage.kill();
  }

  // Parallasse sfondi
  // Parallasse sfondi /Livello 1
  if(levelPlaying == 1) {
    level1_cielo.x = game.camera.x*(-0.01);
    level1_casedietro.x = game.camera.x*(-0.025);
    level1_casedavanti.x = game.camera.x*(-0.09);
  }
  // Parallasse sfondi /Livello 2
  if(levelPlaying == 2) {
    level2_cielo.x = game.camera.x*(-0.01);
    level2_cielo2.x = game.camera.x*(-0.01)+11649;
    level2_collineGialle.x = game.camera.x*(-0.025);
    level2_collineGialle2.x = game.camera.x*(-0.025)+13824;
    level2_collineRosse.x = game.camera.x*(-0.09);
    level2_collineRosse2.x = game.camera.x*(-0.09)+13824;
  }
  // Parallasse sfondi /Livello 3
  if(levelPlaying == 3) {
    level3_layer1.x = game.camera.x*(-0.01);
    level3_layer2.x = game.camera.x*(-0.025);
    level3_layer3.x = game.camera.x*(-0.09);
  }

  // Controls
  if (cursors.left.isDown && enableUserMovement == true) { // Camminata verso sinistra
    player.body.velocity.x = -350;
    if (facing !== "left") { // Se il player ?? rivolto a sinistra
      facing = "left";
    }
  } else if (cursors.right.isDown && enableUserMovement == true) { // Camminata verso destra
    player.body.velocity.x = 350;
    if (facing !== "right") { // Se il player ?? rivolto a destra
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
  if (isFiring === true && facing === "left" && player.body.velocity.x < 100 && player.body.velocity.x > -100 && (player.body.onFloor() || player.body.touching.down)) {
    player.animations.play('fireL', 15);
  }
  if (isFiring === true && facing === "right" && player.body.velocity.x < 100 && player.body.velocity.x > -100 && (player.body.onFloor() || player.body.touching.down)) {
    player.animations.play('fireR', 15)
  }

  if(facing === "right" && player.body.velocity.x > 100 && (player.body.onFloor() || player.body.touching.down))  {
  //Camminata dx
    if(isFiring === false) {
      player.animations.play('walkR', 15, true);
    } else {
      player.animations.play('walkFireR', 15, true);
    }
  } else if(facing === "left" && player.body.velocity.x < -100 && (player.body.onFloor() || player.body.touching.down)) {
    //Camminata sx
    if(isFiring === false) {
      player.animations.play('walkL', 15, true);
    } else {
      player.animations.play('walkFireL', 15, true);
    }
  }

  if(player.body.velocity.y < -300 && facing === "right" && !(player.body.touching.down)) { // Salto dx
    player.animations.play('jumpR', 18, false);
  }
  if(player.body.velocity.y < -300 && facing === "left" && !(player.body.touching.down)) { // Salto sx
    player.animations.play('jumpL', 18, false);
  }
  if(player.body.velocity.y > 100 && facing === "right" && !(player.body.touching.down)) { // Atterraggio salto dx
    player.animations.play('dropR', 10, true);
  }
  if(player.body.velocity.y > 100 && facing === "left" && !(player.body.touching.down)) { // Atterraggio salto sx
    player.animations.play('dropL', 10, true);
  }

  if(facing === "right" && player.body.velocity.x < 100 && player.body.velocity.x > 10 && (player.body.onFloor() || player.body.touching.down)) { // Camminata dx
    if(isFiring === false) {
      player.animations.play('skidR', 10, true);
    }
  } else if(facing === "left" && player.body.velocity.x > -100 && player.body.velocity.x < -10 && (player.body.onFloor() || player.body.touching.down)) { // Camminata sx
      if(isFiring === false) {
        player.animations.play('skidL', 10, true);
      }
    }

 if (player.body.velocity.y < -100) {
    isJumping = true;
  }

  //ENEMY Animazioni
  enemyBomb.forEach(function (enemy) {
    if (enemy.body.velocity.x > 0) {
      enemy.animations.play('bombaWalkR')
    } else if (enemy.body.velocity.x < 0) {
      enemy.animations.play('bombaWalkL')
    }
  });

  enemyJug.forEach(function (enemy) {
    if (enemy.x > player.x && gameStopWatch % 3 == 0) {
      enemy.animations.play('jugFireL');
    } else if (enemy.x > player.x && gameStopWatch % 3 != 0) {
      enemy.animations.play('jugL');
    } else if (enemy.x < player.x && gameStopWatch % 3 == 0) {
      enemy.animations.play('jugFireR');
    }
    else if (enemy.x < player.x && gameStopWatch % 3 != 0) {
      enemy.animations.play('jugR');
    }
  });

  //ENEMY
  //ENEMY SNIPER
  var sniperFireOffset
  for (i = 0; i < enemySniperQuantity; i++) {
    if (player.x < enemySniper.getChildAt(i).x) {
      sniperFireOffset = 30
    } else if (player.x > enemySniper.getChildAt(i).x) {
      sniperFireOffset = 130
    }

    if (enemySniper.getChildAt(i).inCamera == true && enemySniper.getChildAt(i).alive == true) {
      sniperFiringPosition0 = new Phaser.Point(enemySniper.getChildAt(i).x + sniperFireOffset, enemySniper.getChildAt(i).y + 60);
      var sniperFireAngle = (-57.296 * game.physics.arcade.angleBetween(sniperFiringPosition0, player));
      if (165 < sniperFireAngle || -165 > sniperFireAngle || 15 > sniperFireAngle && -15 < sniperFireAngle ||
        300 > Math.abs(player.x - enemySniper.getChildAt(i).x) && 30 > Math.abs(player.y - enemySniper.getChildAt(i).y)) {
        enemySniperGun0.fire(sniperFiringPosition0, player.x + 120, player.y + 78);
      }
    }
  }

  //ENEMY JUGGERNAUT
  var jugFireOffset
  for (i = 0; i < enemyJugQuantity; i++) {
    if (player.x < enemyJug.getChildAt(i).x) {
      jugFireOffset = 30;
      enemyJugGun0.fireAngle = 182;
    } else if (player.x > enemyJug.getChildAt(i).x) {
      jugFireOffset = 160;
      enemyJugGun0.fireAngle = -2;
    }

    if (enemyJug.getChildAt(i).inCamera == true && enemyJug.getChildAt(i).alive == true)
    {
      jugFiringPosition0 = new Phaser.Point(enemyJug.getChildAt(i).x + jugFireOffset, enemyJug.getChildAt(i).y + 130);
      if (gameStopWatch % 3 == 0) {
        enemyJugGun0.fire(jugFiringPosition0);
      }
    }
  }
  randomAnim = Math.random()

  //PALLE DI FUOCO DI MANGIAFUOCO
  if (levelPlaying == 3 && player.alive == true) {
    mfFireballSpeed = (Math.random() * (700 - 50) + 50);
    mfGunDx.bulletSpeed = mfFireballSpeed;
    mfShootTimer += (Math.random() * (4 - 1) + 1);
    if (mangiafuoco.health > 15) {
      if (player.y  > 1800 && mfShootTimer >= 180) {
        if (randomAnim > 0.3) {
          animManoDX.play('mangiafuocoManoDX');
        } else if (randomAnim < 0.3) {
            animManoSX.play('mangiafuocoManoSX');
          }
          console.log('mfShootTimer: '+mfShootTimer);
          mfShootTimer = 0;
      } else if (player.y < 1800 && mfShootTimer >= 150) {
          animManoSX.play('mangiafuocoManoSX');
          console.log('mfShootTimer: '+mfShootTimer);
          mfShootTimer = 0;
        } else if (player.x > 7550 && mfShootTimer >= 90) {
          mfGunDx.fireAngle = 120;
          animFastFire.play('mangiafuocoFastFire')
          mfShootTimer = 0;
        }
    } else if (mangiafuoco.health <= 15) {
      mangiafuoco.tint = 0xFF6666
      if (player.y  > 1800 && player.x <= 7550 &&  mfShootTimer >= 90) {
      if (randomAnim > 0.3) {
        animManoDX.play('mangiafuocoFastFire');
      } else if (randomAnim < 0.3){
          animManoSX.play('mangiafuocoManoSX');
        }
        //console.log('mfShootTimer: '+mfShootTimer);
        mfShootTimer = 0;
      } else if (player.y < 1800 && player.x <= 7550 && mfShootTimer >= 90) {
          animManoSX.play('mangiafuocoManoSX');
          //console.log('mfShootTimer: '+mfShootTimer);
          mfShootTimer = 0;
        } else if (player.x > 7550 && mfShootTimer >= 90) {
            mfGunDx.fireAngle = 120;
            animFastFire.play('mangiafuocoFastFire')
            mfShootTimer = 0;
          }
    }

    if (mangiafuoco.frame > 44 && mangiafuoco.frame < 46) {
      mfGunDx.fire();
      mfGunDx.fireAngle = 205;
    } else if (mangiafuoco.frame > 24 && mangiafuoco.frame < 26) {
        mfGunSx.fire(null, player.x + 50, player.y + 90);
      }

   if (animManoDX.isPlaying === false && animManoSX.isPlaying === false && animFastFire.isPlaying === false) {
      mangiafuoco.animations.play('mangiafuocoL')
    }
  }

  //ENEMY BOMB
  // L'eleganza non ha prezzo IL CICLO DEVE ESSERE ESEGUITO TANTE VOLTE QUANTI SONO I NEMICI
  for (let i = 0; i < enemyBombQuantity; i++) {
    if ((enemyBomb.getChildAt(i).body.velocity.x > 0 && enemyBomb.getChildAt(i).x > enemyBombX[i] + enemyBombD[i])
      || (enemyBomb.getChildAt(i).body.velocity.x < 0 && enemyBomb.getChildAt(i).x < enemyBombX[i])) {
      enemyBomb.getChildAt(i).body.velocity.x *= -1;
    }
  }

  enemyBomb.setAll('body.gravity.y', 2000);
  enemyBomb.setAll('body.collideWorldBounds', true);

  enemySniper.setAll('body.gravity.y', 2000);
  enemySniper.setAll('body.collideWorldBounds', true);

  enemyBomb.setAll('body.gravity.y', 2000);
  enemyBomb.setAll('body.collideWorldBounds', true);

  enemySniper.setAll('body.gravity.y', 2000);
  enemySniper.setAll('body.collideWorldBounds', true);

  enemyJug.setAll('body.gravity.y', 2000);
  enemyJug.setAll('body.collideWorldBounds', true);

  if(fireButton.isDown && player.alive == true) {
    gun1.fire();
    if (bulletPool <= 0) {
      console.log('Munizioni finite!');
      ammoUIv3.animations.play('lampeggioVuoto');
    }
  }

  scatterShot = (Math.random() * (25-1) + 1);
  if (facing === 'right') {
    gun1.trackOffset.x = 170;
    gun1.trackOffset.y = 67 + scatterShot;
    gun1.fireAngle = 0;
  } else {
    gun1.trackOffset.x = 40;
    gun1.trackOffset.y = 67 + scatterShot;
    gun1.fireAngle = 180;
  }  //console.log(player.animations.frame);

  // Salto con funzione di potenza variabile
  if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down || (jumpPower > 0 && jumpPower < 4)))
  {
    player.body.velocity.y = -600;
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


  // Player health UI
  if (player.health === 5 && !saluteLampeggioPieno.isPlaying) {
    healthUI.frame = 4;
  } else if (player.health === 4) {
    healthUI.frame = 5;
  } else if (player.health === 3) {
    healthUI.frame = 6;
  } else if (player.health === 2) {
    healthUI.frame = 7;
  } else if (player.health === 1) {
    healthUI.animations.play('lampeggioRosso');
  } else if (player.health === 0) {
    healthUI.frame = 14;
  }

  // ===== CAMBIO LIVELLI =====
  // Cambio Livello 1 => 2
  if (levelPlaying == 1 && player.x >= 12750) { // 
    if (autoPilot == false) {
      autoPilot = true; // Fa sapere che il giocatore ?? controllato dal codice (disattiva il gameover)
      enableUserMovement = false; // Disabilita i controlli da parte dell'utente
      player.body.collideWorldBounds = false; // Il giocatore pu?? uscire dall'area di gioco
      console.log("Turning ON Autopilot...");
    }
    player.body.velocity.x = 350; // Fa proseguire il giocatore verso destra, fuori dall'area di gioco
    timerLivello1Livello2 += 1;
    if (timerLivello1Livello2 == 150) {
      // Destroy gli sprite del Livello 1
      console.log("Destroying Level 1 sprites...");
      hardDestroyLevel1();

      levelPlaying = 2;
      cambioLivello = true;
      console.log("cambioLivello set to "+cambioLivello+' with levelPlaying = '+levelPlaying);

      console.log("Turning OFF Autopilot...")
      create(); // <=== Riesegue la funzione create con la nuova variabile levelPlaying
    }
  }

    // Cambio Livello 2 => 3
    if (levelPlaying == 2 && player.x >= 19450) { // <== player.x >= 19445 precedente
      if (autoPilot == false) {
        autoPilot = true; // Fa sapere che il giocatore ?? controllato dal codice (disattiva il gameover)
        enableUserMovement = false; // Disabilita i controlli da parte dell'utente
        //player.body.collideWorldBounds = false; // Il giocatore pu?? uscire dall'area di gioco
        console.log("Turning ON Autopilot...")
      }
      player.body.velocity.x = 350; // Fa proseguire il giocatore verso destra, fuori dall'area di gioco
      timerLivello2Livello3 += 1;
      if (timerLivello2Livello3 == 150) {
        // Destroy gli sprite del Livello 2
        console.log("Destroying Level 2 sprites...");
        hardDestroyLevel2();

        levelPlaying = 3;
        cambioLivello = true;
        console.log("cambioLivello set to "+cambioLivello+' with levelPlaying = '+levelPlaying);

        console.log("Turning OFF Autopilot...")
        create(); // <=== Riesegue la funzione create con la nuova variabile levelPlaying
      }
    }

  // Ammo UI
  if (bulletPool*100/maxAmmo >= 80 && !lampeggioPieno.isPlaying) { // > 80% di munizioni
    ammoUIv3.frame = 5;
  } else if (bulletPool*100/maxAmmo >= 60 && bulletPool*100/maxAmmo < 80) {
    ammoUIv3.frame = 6;
  } else if (bulletPool*100/maxAmmo >= 40 && bulletPool*100/maxAmmo < 60)  {
    ammoUIv3.frame = 7;
  } else if (bulletPool*100/maxAmmo >= 20 && bulletPool*100/maxAmmo < 40)  {
    ammoUIv3.frame = 8;
  } else if (bulletPool*100/maxAmmo > 0 && bulletPool*100/maxAmmo < 20)  {
    ammoUIv3.frame = 9;
  }

  game.physics.arcade.overlap(player, ammoBox, addAmmo);
  game.physics.arcade.overlap(player, pozione, heal);

  // Danza
  if (danza == true) {

    enableUserMovement = false;
    playerInvulnerable = true;
    if (danzaTimer >= 10 && player.x < 7480) {
      player.body.velocity.x = 300;
      facing = "right";
      console.log("vx = 300");
    }
    if (player.x >= 7480) {
      danzaStartingPointReached = true;
    }
    if (danzaStartingPointReached == true && player.body.touching.down) {
      if (d % 2 == 0 && d < 5) {
        player.body.velocity.y = -800;
        console.log("Pari");
        d += 1;
      } else if (d % 2 != 0 && d < 5) {
        player.body.velocity.y = -800;
        console.log("Dispari");
        d += 1;
      }
    }
    if (danzaStartingPointReached == true && d % 2 == 0 && d < 5) {
      player.body.velocity.x = 60;
      facing = 'right';
    } else if (danzaStartingPointReached == true && d % 2 != 0 && d < 5) {
      player.body.velocity.x = -60;
      facing = 'left';
    }

    if (d >= 5 && player.x < 7800) {
      player.body.velocity.x = 350;
      if (player.x > 7500 && player.body.touching.down) {
        player.body.velocity.y = -850;
        d += 1;
      }
    }
    if (player.x > 7800) {
      player.body.velocity.x = 0;
      danzaFinita = true;
    }

    console.log(d);

    danzaTimer += 1;

  }

  if (danzaFinita == true) {
    if (gameOverTimer == 0) { // <== Serve ad evitare che il fade venga eseguito pi?? di una volta.
      game.camera.fade(0x000000, 1000);
    }
    gameOverTimer += 1;
    if (gameOverTimer == 100) {
    gameover();
    showGameOverUI2();
    }
  }
// console.log(punteggio)
} //fine di UPDATE

function spawn() {
  autoPilot = true;
  console.log('spawn() started. AutoPilot is ON.');
  gameOverTimer = 0;
  console.log('gameOverTimer reset to 0.');
  spawning = true;
  // Spawn livello 1
  if (levelPlaying == 1) {
    // Livello 1 / Prima volta
    if (gameWasOver == false) { // Il livello viene caricato per la prima volta. Gli sprite 'player' e 'shadow' devono essere creati.
      player = game.add.sprite(250, 1900, 'pinocchio'); // VALORI CORRETTI: Inizio x = 250; y = 1900 / Test Finale x = 18860 (senza camera follow)
      shadow = game.add.sprite(1000, 1900, 'player');
      shadow.alpha = 0;
      player.bringToTop();
      console.log("Level 1: player & shadow created.");
    }
    // Livello 1 / Reset
    if (gameWasOver == true) { // Il livello NON viene caricato per la prima volta. Gli sprite 'player' e 'shadow' devono essere spostati.
      gameWasOver = false;
      cambioLivello = false;
     // console.log("gameWasOver / cambioLivello reset to " + gameWasOver+' / '+cambioLivello);
      player.y = 1800;
      player.x = 250;
      console.log("Level 1: player coordinates reset.");
      player.revive();
      player.bringToTop();
      if (gameWasOver == true) { // Reimposta la vita del giocatore se rianimato dopo il gameover. Non la reimposta se invece ha cambiato livello.
        player.health = playerMaxHealth;
        bulletPool = maxAmmo;
      }
      facing = 'right';
    }

  } else if (levelPlaying == 2) {
      if (gameWasOver == false && cambioLivello == false) { // Se il livello viene caricato per la prima volta, ovvero se non c'e' stato gameover o se non c'e' stato il cambio livello da 1 a 2
        player = game.add.sprite(-130, 1900, 'pinocchio'); // VALORI CORRETTI: Inizio x = -130; y = 1900 / Test Finale x = ????? (senza camera follow)
        shadow = game.add.sprite(610, 1900, 'player');
        shadow.alpha = 0;
        player.bringToTop();
        console.log("Level 2: player & shadow created.");
      }
      if (gameWasOver == true || cambioLivello == true) {
        player.x = -130;
        player.y = 1800;
        console.log("Level 2: coordinates reset.")
        player.revive();
        player.bringToTop();
        if (gameWasOver == true) { // Reimposta la vita del giocatore se rianimato dopo il gameover. Non la reimposta se invece ha cambiato livello.
          player.health = playerMaxHealth;
          bulletPool = maxAmmo;
          console.log('Reset player.health to '+player.health+' and reset bulletPool to '+ bulletPool);
        }
        gameWasOver = false;
        cambioLivello = false;
        console.log("gameWasOver / cambioLivello reset to " + gameWasOver+' / '+cambioLivello);
        facing = 'right';
      }

  } else if (levelPlaying == 3) {
    if (gameWasOver == false && cambioLivello == false) {
      player = game.add.sprite(-130, 1900, 'pinocchio'); //valore corretto: x = -130 y = 1900 / Boss battle: x = 7200 y = 1500
      shadow = game.add.sprite(300, 1900, 'player');
      shadow.alpha = 0;
      player.bringToTop();
      console.log("Level 3: player & shadow created.");
    }
    if (gameWasOver == true || cambioLivello == true) {
      player.x = -130;
      player.y = 1900;
      console.log("Level 3: coordinates reset.")
      player.revive();
      player.bringToTop();
      if (gameWasOver == true) { // Reimposta la vita del giocatore se rianimato dopo il gameover. Non la reimposta se invece ha cambiato livello.
        player.health = playerMaxHealth;
        bulletPool = maxAmmo;
      }
      gameWasOver = false;
      cambioLivello = false;
      bossBattleLockOn = false;
      console.log("gameWasOver / cambioLivello reset to " + gameWasOver+' / '+cambioLivello);
      facing = 'right';
    }
  }
  console.log("spawn() completed.")
}

function gameover() {
  console.log('Running gameover()...')
  gameWasOver = true;
  showGameOverUI();
  game.camera.resetFX();
  console.log('gameover() completed.');
}

function showGameOverUI() {
  gameOverImage = game.add.sprite(0, 0, 'gameOver');
  gameOverImage.fixedToCamera = true;
  gameOverImage.bringToTop();
  showingGameOverUI = true;
}
function showGameOverUI2() {
  gameOverImage = game.add.sprite(0, 0, 'win');
  gameOverImage.fixedToCamera = true;
  //gameOverImage.bringToTop();
  showingGameOverUI = true;

  textScore = game.add.text(420, 40, "Punteggio: "+ punteggio, style4)
  textScore.fixedToCamera = true;
  textScore.alpha = 0.6;

}

function hardDestroyLevel1() {
  // Questa funzione va richiamata esclusivamente nel passaggio da Livello 1 => Livello 2.
  // Distrugge tutti gli elementi del livello 1.
  level1_calpestabile.destroy();
  level1_floor.destroy();
  level1_houses.destroy();
  modulo1x1.destroy();
  modulo2x2.destroy();
  modulo2x4.destroy();
  level1_cielo.destroy();
  level1_casedietro.destroy();
  level1_casedavanti.destroy();
  ammoBox.destroy();
  pozione.destroy();
  enemyBomb.destroy();
  enemyJug.destroy();
  enemySniper.destroy();
  // Di seguito ci sono gli elementi da distruggere soltanto se esistono (verifica l'esistenza della relativa variabile):
  if (typeof enemyJugDead !== 'undefined') {
    // if the variable is defined
    enemyJugDead.destroy();
  }
  if (typeof enemySniperDead !== 'undefined') {
    // if the variable is defined
    enemySniperDead.destroy();
  }
  console.log('hardDestroyLevel1() completed.');
}

function softDestroyLevel1() {
  // Questa funzione va richiamata quando occorre resettare il Livello 1 in seguito a game over.
  // Di seguito ci sono gli elementi da distruggere sempre (perch?? esistono sicuramente):
  ammoBox.destroy();
  pozione.destroy();
  enemyBomb.destroy();
  enemyJug.destroy();
  enemySniper.destroy();
  // Di seguito ci sono gli elementi da distruggere soltanto se esistono (verifica l'esistenza della relativa variabile):
    enemyJugDead.destroy();
    enemySniperDead.destroy();
    if (typeof pinocchioCrucified !== 'undefined') {
      pinocchioCrucified.destroy();
    }

  console.log('softDestroyLevel1() completed.');
}

function hardDestroyLevel2() {
  level2_cielo.destroy();
  level2_cielo2.destroy();
  level2_collineGialle.destroy();
  level2_collineGialle2.destroy();
  level2_collineRosse.destroy();
  level2_collineRosse2.destroy();
  level2_calpestabile_parte1.destroy();
  level2_calpestabile_parte2.destroy();
  level2_floor.destroy();

  modulo1x1.destroy();
  modulo2x2.destroy();
  modulo2x4.destroy();

  level2_ruota1_supporto.destroy();
  level2_ruota1_centrale.destroy();
  level2_ruota1_cabinaA.destroy();
  level2_ruota1_cabinaB.destroy();
  level2_ruota1_cabinaC.destroy();
  level2_ruota1_cabinaD.destroy();
  level2_ruota1_cabinaE.destroy();
  level2_ruota1_cabinaF.destroy();
  level2_ruota1_cabinaG.destroy();
  level2_ruota1_cabinaH.destroy();

  level2_ruota2_supporto.destroy();
  level2_ruota2_centrale.destroy();
  level2_ruota2_cabinaA.destroy();
  level2_ruota2_cabinaB.destroy();
  level2_ruota2_cabinaC.destroy();
  level2_ruota2_cabinaD.destroy();
  level2_ruota2_cabinaE.destroy();
  level2_ruota2_cabinaF.destroy();
  level2_ruota2_cabinaG.destroy();
  level2_ruota2_cabinaH.destroy();

  level2_ruota3_supporto.destroy();
  level2_ruota3_centrale.destroy();
  level2_ruota3_cabinaA.destroy();
  level2_ruota3_cabinaB.destroy();
  level2_ruota3_cabinaC.destroy();
  level2_ruota3_cabinaD.destroy();
  level2_ruota3_cabinaE.destroy();
  level2_ruota3_cabinaF.destroy();
  level2_ruota3_cabinaG.destroy();
  level2_ruota3_cabinaH.destroy();

  level2_mongolfiera1.destroy();
  level2_mongolfiera2.destroy();

  ammoBox.destroy();
  pozione.destroy();

  enemyBomb.destroy();
  enemyJug.destroy();
  enemySniper.destroy();

  // Di seguito ci sono gli elementi da distruggere soltanto se esistono (verifica l'esistenza della relativa variabile):
//  if (typeof enemyJugDead !== 'undefined') {
    // if the variable is defined
    enemyJugDead.destroy();
//  }
//  if (typeof enemySniperDead !== 'undefined') {
    // if the variable is defined
    enemySniperDead.destroy();
//  }

  console.log('hardDestroyLevel2() completed.');
}

function softDestroyLevel2() {
  // Questa funzione va richiamata quando occorre resettare il Livello 2 in seguito a game over.
  ammoBox.destroy();
  pozione.destroy();
  enemyBomb.destroy();
  enemyJug.destroy();
  enemySniper.destroy();
  // Di seguito ci sono gli elementi da distruggere soltanto se esistono (verifica l'esistenza della relativa variabile):
  //if (typeof enemyJugDead !== 'undefined') {
    // if the variable is defined
    enemyJugDead.destroy();
//  }
//  if (typeof enemySniperDead !== 'undefined') {
    // if the variable is defined
    enemySniperDead.destroy();
//  }
  if (typeof pinocchioCrucified !== 'undefined') {
    pinocchioCrucified.destroy();
  }
  console.log('softDestroyLevel2() completed.');
}


function hardDestroyLevel3() {
  level3_layer1.destroy();
  level3_layer2.destroy();
  level3_layer3.destroy();
  level3_calpestabile.destroy();
  evel3_floor.destroy();
  modulo2x2.destroy();
  modulo2x4.destroy();
  modulo1x1.destroy();
  carrozza.destroy();
  teatro.destroy();
  tenda.destroy();
  level3_nuvola.destroy();
  level3_nuvola2.destroy();

  ammoBox.destroy();
  pozione.destroy();

  console.log('hardDestroyLevel3() completed.');
}

function softDestroyLevel3() {
  // Questa funzione va richiamata quando occorre resettare il Livello 2 in seguito a game over.
  enemyBomb.destroy();
  enemyJug.destroy();
  enemySniper.destroy();
  ammoBox.destroy();
  pozione.destroy();
  mangiafuoco.destroy();
  // Di seguito ci sono gli elementi da distruggere soltanto se esistono (verifica l'esistenza della relativa variabile):
  //if (typeof enemyJugDead !== 'undefined') {
    // if the variable is defined
    enemyJugDead.destroy();
  //}
  //if (typeof enemySniperDead !== 'undefined') {
    // if the variable is defined
    enemySniperDead.destroy();
  //}
  if (typeof pinocchioCrucified !== 'undefined') {
    pinocchioCrucified.destroy();
  }
  if (bossBattleLockOn == true) {
    bossBattleBlock.destroy();
  }
  console.log('softDestroyLevel3() completed.');
}

function pinocchioCrocifisso() {
  pinocchioCrucified = game.add.sprite(player.x, player.y, 'pinocchioMorto')
  game.physics.arcade.enable(pinocchioCrucified);
  pinocchioCrucified.body.collideWorldBounds = false;
  pinocchioCrucified.body.gravity.y = 2000; // valore corretto 2000
  pinocchioCrucified.body.setSize(70, 100, 65, 43); // Hitbox (width, height, x-offset, y-offset) // questa linea funziona solo se inserita dopo 'game.physics.arcade.enable'
  if (facing === 'right') {
    pinocchioCrucified.animations.add('mortoR', [0,1,2,3,4,5,6,7,8,9], 15, false);
    pinocchioCrucified.animations.play('mortoR')
  } else if (facing === 'left') {
    pinocchioCrucified.animations.add('mortoL', [10,11,12,13,14,15,16,17,18,19], 15, false);
    pinocchioCrucified.animations.play('mortoL')
  }
}

function shootEnemyBomb(bullets, enemyBomb) {
  flashEnemyBomb = game.add.tween(enemyBomb).to( { tint: 0xFF0000 }, 20, Phaser.Easing.Linear.None, true, 0, 0, true); // Flash rosso nemico colpito
  flashEnemyBomb.onComplete.add(function resetEnemyBombTint() {
    enemyBomb.tint = 0xFFFFFF;
  });
  bullets.kill();
  enemyBomb.damage(1);
  if (enemyBomb.health <= 0) {
    enemyBombEsplosione = game.add.sprite(enemyBomb.x - 55, enemyBomb.y - 15, 'marionettaEsplosione');
    enemyBombEsplosione.animations.add('marionettaEsplode', [0,1,2,3,4,5,6,7,8,9,10,11], false);
    enemyBombEsplosione.animations.play('marionettaEsplode', 15);
    enemyBombEsplosione.killOnComplete = true;
  //  enemyBomb.kill();
  }
}
function shootEnemySniper(bullets, enemySniper) {
  flashEnemySniper = game.add.tween(enemySniper).to( { tint: 0xFF0000 }, 20, Phaser.Easing.Linear.None, true, 0, 0, true); // Flash rosso nemico colpito
  flashEnemySniper.onComplete.add(function resetEnemySniperTint() {
    enemySniper.tint = 0xFFFFFF;
  });
  bullets.kill();
  enemySniper.damage(1);
  if (enemySniper.health <= 0) {
    if (enemySniper.x > player.x) {
      enemySniperDead.create(enemySniper.x - 3, enemySniper.y + 1, 'marionettaSniperMorte' )
      enemySniperDead.callAll('animations.add', 'animations', 'sniperDeadL', [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16], 15, false);
      enemySniperDead.callAll('animations.play', 'animations', 'sniperDeadL');
    }
     else if(enemySniper.x < player.x) {
    enemySniperDead.create(enemySniper.x - 37, enemySniper.y, 'marionettaSniperMorte' )
    enemySniperDead.callAll('animations.add', 'animations', 'sniperDeadR', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 15, false);
    enemySniperDead.callAll('animations.play', 'animations', 'sniperDeadR');
    }
}}

function shootEnemyJug(bullets, enemyJug) {
  flashEnemyJug = game.add.tween(enemyJug).to( { tint: 0xFF0000 }, 20, Phaser.Easing.Linear.None, true, 0, 0, true); // Flash rosso nemico colpito
  flashEnemyJug.onComplete.add(function resetEnemyJugTint() {
    enemyJug.tint = 0xFFFFFF;
  });
  bullets.kill();
  enemyJug.damage(1);
  if (enemyJug.health <= 0) {
    enemyJugDead.create(enemyJug.x, enemyJug.y, 'marionettaJugMorte' )
    if (enemyJug.x > player.x) {
      enemyJugDead.callAll('animations.add', 'animations', 'jugDeadL', [37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19], 15, false);
      enemyJugDead.callAll('animations.play', 'animations', 'jugDeadL');
    }
     else if(enemyJug.x < player.x) {
      enemyJugDead.callAll('animations.add', 'animations', 'jugDeadR', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], 15, false);
      enemyJugDead.callAll('animations.play', 'animations', 'jugDeadR');
    }
  }
}

function blinkingPlayer() {
  // Flasha alpha/opacit?? del player
  playerInvulnerable = true;
  flashingPlayer = game.add.tween(player).to( { alpha: 0.2 }, 80, Phaser.Easing.Linear.None, true, 0, 4, true); // duration = 80 frames; repetitions = 3
  flashingPlayer.onComplete.add(function resetPlayerAlpha() {
    // Questo codice viene eseguito quando il tween viene completato.
    player.alpha = 1;
    playerInvulnerable = false; // Il player ritorna ad essere vulnerabile ai nemici.
    console.log('blinkingPlayer() completed.')
  });
}

function touchEnemyBomb(player, enemyBomb) {
  enemyBombEsplosione = game.add.sprite(enemyBomb.x - 55, enemyBomb.y - 15, 'marionettaEsplosione');
  enemyBombEsplosione.animations.add('marionettaEsplode', [0,1,2,3,4,5,6,7,8,9,10,11], false);
  enemyBombEsplosione.animations.play('marionettaEsplode', 15);
  enemyBombEsplosione.killOnComplete = true;
  enemyBomb.kill();
  if (playerInvulnerable == false) {
    player.damage(2);
    console.log("touchEnemyBomb(). Player health -= 2.");
    blinkingPlayer();
    punteggio -= 20;
  }
}

function touchEnemySniper(player, enemySniper) {
  if (playerInvulnerable == false) {
    player.damage(1);
    console.log("touchEnemySniper(). Player health -= 1.");
    blinkingPlayer();
    punteggio -= 10;
  }
}

function touchEnemyJug(player, enemyJug) {
  if (playerInvulnerable == false) {
    player.damage(1);
    console.log("touchEnemyJug(). Player health -= 1.");
    blinkingPlayer();
    punteggio -= 10;
  }
}

function shootMangiafuoco(mf, bullet) {
  flashMangiafuoco = game.add.tween(mf).to( { tint: 0xFF0000 }, 15, Phaser.Easing.Linear.None, true, 0, 0, true); // Flash rosso nemico colpito
  bullet.kill();
  mf.damage(1);
  console.log('hp mf=' + mf.health);
  if (mf.health <= 0) {
    mfDead = game.add.sprite(mf.x, mf.y - 10, 'bossMorte');
    game.physics.arcade.enable(mfDead);
    mfDead.body.immovable = true;
    mfDead.body.setSize(240, 95, 160, 275);
    mfDead.body.gravity.y = 0; // valore corretto 2000
    mfDead.animations.add('thisMaafkIsDead', [0,1,2,3,4,5,6,7,8,9,10], false);
    mfDead.animations.play('thisMaafkIsDead', 10);
    danza = true;
    punteggio -= gameStopWatch;
  }
}

function enemyDamage(player, bullets) {
  bullets.kill();
  if (playerInvulnerable == false && danza == false) {
    player.damage(1);
    console.log("enemyDamage(). Player health -= 1.");
    blinkingPlayer();
    punteggio -= 10;
    console.log(punteggio);
  }
}

function killbullets(bullets, object) {
  bullets.kill();
}

function EnemySniperDamage(player, bullets) {
  bullets.kill();
  if (playerInvulnerable == false) {
    player.damage(1);
    console.log("enemyDamage(). Player health -= 1.");
    blinkingPlayer();
  }
}

function createFloorFire(bullet, floor) {
  floorFire = game.add.sprite(bullet.x - 125, bullet.y - 105, 'fuocoATerra')
  floorFire.animations.add('fuoco', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29])
  floorFire.animations.play('fuoco', 10, false, true);

  bullet.kill();

  game.physics.arcade.enable(floorFire);
  floorFire.body.setSize(50, 65, 88, 59);
}

function touchFloorFire(player, fire) {
  if (playerInvulnerable == false && danza == false) {
    player.damage(1);
    console.log("touchFloorFire(). Player health -= 1.");
    blinkingPlayer();
    punteggio -= 10;
  }
}

function sniperIsFiringTrue() {
  enemySniper.forEach(function (enemy2) {
    if (enemy2.x > player.x) {
      enemy2.animations.play('sniperFireL');
      console.log('fire!')
    } else if (enemy2.x < player.x) {
      enemy2.animations.play('sniperFireR');
    }
  })
}

function isFiringTrue() {
  if (bulletPool > 0)  {
    isFiring = true;
  }
  console.log('isFiring = ' + isFiring);
}
function isFiringFalse() {
  isFiring = false;
  console.log('isFiring = ' + isFiring);
}

function addAmmo(player, ammoBox) {
  if ((maxAmmo-bulletPool) >= 20) {
    bulletPool += 20;
    gun1.resetShots(bulletPool);
    console.log('Bullet N' + bulletPool);
    ammoBox.kill();
  }
  else if ((maxAmmo-bulletPool) > 0 && (maxAmmo-bulletPool) < 20) {
    bulletPool = maxAmmo;
    gun1.resetShots(bulletPool);
    console.log('Bullet N' + bulletPool);
    ammoBox.kill();
  } else if ((maxAmmo-bulletPool) <= 0) {
    console.log('Max ammo reached. Reloading not possible.')
    timerLampeggioPieno += 1;
    if (timerLampeggioPieno == 50) {
      console.log('now');
      ammoUIv3.animations.play('lampeggioPieno');
      timerLampeggioPieno = 0;
    }

  }
}

function ammoSpent() {
  bulletPool = bulletPool - 1;
  console.log('Bullet N' + bulletPool);
}

function heal(player, pozione) {
  if (player.health == 5) {
    console.log('Max health reached.')
    if (timerLampeggioSalute == 0) {
      healthUI.animations.play('saluteLampeggioPieno');
    }
    timerLampeggioSalute += 1;
    if (timerLampeggioSalute == 150) {
      timerLampeggioSalute = 0;
    }
  } else if (player.health < 5) {
    pozione.kill();
    if (player.health === 4) {
      player.heal(1);
    } else {
      player.heal(2);
    }
  }
}

function dustJumpTrue() {
  dustJump = true;
  if (player.alive === true && (player.body.onFloor() || player.body.touching.down)) {
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
}

function dustJumpFalse() {
  dustJump = false;
}

function landingCallback(player, obj) {
  isJumping = false;
  if (player.body.onFloor() || player.body.touching.down) {
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
  } }
}

function landingProcessCallback(player, obj) {
  if (isJumping === true) {
    return true;
  } else {
    return false;
  }
}

// Testo
function createText() {
  text.setShadow(3, 3, '#fff', 2);
  text.setTextBounds(200, 1800, 1450, 100);
  textTween = game.add.tween(text).to({alpha: 1}, 0, Phaser.Easing.Linear.None, true, 1000, 0, false);
  textTween.onComplete.add(function resetText() {
    if (levelPlaying == 1) {
      textTween2 = game.add.tween(text).to( {y: -100, alpha: 0}, 3000, Phaser.Easing.Linear.None, true, 1500, 0, false);
    } else {
      textTween2 = game.add.tween(text).to( {y: -100, alpha: 0}, 3000, Phaser.Easing.Linear.None, true, 3000, 0, false);
    }
  });
}

function bossBattleLock() {
  bossBattleBlock = game.add.sprite(7050, 1600, 'bossBattleBlock');
  game.physics.arcade.enable(bossBattleBlock);
  bossBattleBlock.body.gravity.y = 0;
  bossBattleBlock.body.immovable = true;
  bossBattleLockOn = true;
  bossBattleBlock.alpha = 0;
}

function render () {
  // if (mfDead !== undefined) {
  //   game.debug.body(mfDead);
  // }
  // game.debug.body(level2_mongolfiera1);
  // game.debug.body(level2_mongolfiera2);
  // game.debug.body(player);
  // game.debug.body(pinocchioCrucified);
  // game.debug.body(enemyJug.getChildAt(0));
  // game.debug.body(enemySniper.getChildAt(0));
  // game.debug.spriteInfo(shadow, 30, 100);
  // game.debug.body(level3_nuvola);
}
