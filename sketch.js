var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var database;

var p1, p2, p3, p4;
var p1Img, p2Img, p3Img, p4Img;
var players;

var players = [];
var hurdle, hud1, hud2, hud3, hud4, hud5, hud6, hud7, hud8, hud9, hud10, hud11, hud12, hud13, hud14, hud15 , hud16, hud17, hud18, hud19, hud20, hud21, hud22;
var hurdlesGroup;

var inviG1, inviG2, inviG3, inviG4; 

var form, player, game;


function preload(){
  p1Img = loadImage('1.png');
  p2Img = loadImage('2.png');
  p3Img = loadImage('3.png');
  p4Img = loadImage('4.png');

}

function setup(){
  canvas = createCanvas(windowWidth-20,windowHeight-30);

  hurdlesGroup = new Group();

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

}
