var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var car1Img, car2Img, car3Img, car4Img, groundImg, trackImg;

function preload(){
  player1Img = loadImage("picture/orange.png");
  player2Img = loadImage("picture/green.png");
  player3Img = loadImage("picture/pink.png");
  player4Img = loadImage("picture/blue.png");
  groundImg = loadImage("picture/ground.png");
  trackImg = loadImage("picture/background.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
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
  if(gameState == 2){
    game.end()
  }
}
