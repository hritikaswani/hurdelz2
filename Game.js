class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    p1 = createSprite(150, 125, 50, 50);
    p1.addImage("Image1", p1Img);
    p1.scale = 0.4;

    p2 = createSprite(150, 125, 50, 50);
    p2.addImage("Image2", p2Img);
    p2.scale = 0.4;

    p3 = createSprite(150, 125, 50, 50);
    p3.addImage("Image3", p3Img);
    p3.scale = 0.4;

    p4 = createSprite(150, 125, 50, 50);
    p4.addImage("Image4", p4Img);
    p4.scale = 0.4;

    players = [p1, p2, p3, p4];

    hud1 = createSprite(2280, 325, 10, 50);
    hurdlesGroup.add(hud1);

    hud2 = createSprite(2780, 325, 10, 50);
    hurdlesGroup.add(hud2);

    hud3 = createSprite(3280, 325, 10, 50);
    hurdlesGroup.add(hud3);

    hud4 = createSprite(3780, 325, 10, 50);
    hurdlesGroup.add(hud4);

    hud5 = createSprite(4280, 325, 10, 50);
    hurdlesGroup.add(hud5);

    hud6 = createSprite(2280, 525, 10, 50);
    hurdlesGroup.add(hud6);

    hud7 = createSprite(2780, 525, 10, 50);
    hurdlesGroup.add(hud7);

    hud8 = createSprite(3280, 525, 10, 50);
    hurdlesGroup.add(hud8);

    hud9 = createSprite(3780, 525, 10, 50);
    hurdlesGroup.add(hud9);

    hud10 = createSprite(4280, 525, 10, 50);
    hurdlesGroup.add(hud10);

    hud11 = createSprite(2280, 725, 10, 50);
    hurdlesGroup.add(hud11);

    hud12 = createSprite(2280, 725, 10, 50);
    hurdlesGroup.add(hud12);

    hud13 = createSprite(2780, 725, 10, 50);
    hurdlesGroup.add(hud13);

    hud14 = createSprite(3280, 725, 10, 50);
    hurdlesGroup.add(hud14);

    hud15 = createSprite(3780, 725, 10, 50);
    hurdlesGroup.add(hud15);

    hud16 = createSprite(2280, 925, 10, 50);
    hurdlesGroup.add(hud16);

    hud17 = createSprite(2280, 925, 10, 50);
    hurdlesGroup.add(hud17);

    hud18 = createSprite(2780, 925, 10, 50);
    hurdlesGroup.add(hud18);

    hud19 = createSprite(3280, 925, 10, 50);
    hurdlesGroup.add(hud19);

    hud20 = createSprite(3780, 925, 10, 50);
    hurdlesGroup.add(hud20);

    hud21 = createSprite(4280, 925, 10, 50);
    hurdlesGroup.add(hud21);

    hud22 = createSprite(4280, 725, 10, 50);
    hurdlesGroup.add(hud22);

  
  }

  play() {
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      var display_position = 180;

      //Index of Array
      var index = 0;

      //X and Y pos of player
      var zx = 50;
      var zy = 125;

      for (var plr in allPlayers) {
        index += 1;
        zx = displayWidth + allPlayers[plr].distance;;

        zy += 200;

        players[index - 1].x = zx;
        players[index - 1].y = zy;

        if (index === player.index) {
          strokeWeight(10);
          stroke('red');
          noFill();
          ellipse(zx,zy,40,40);
          noStroke();
          //players[index - 1].shapeColor = 'red';
          camera.position.x = zx;
          camera.position.y = zy;
        }
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");
        //display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, zx - 70, players[index - 1].y);

      }




      players[index - 1].velocityY += 0.8;

      if(keyDown("space") && zy > 920){
        console.log("Space key Pressed");
        players[index -1].velocityX = -10;
      }

      if (keyIsDown(RIGHT_ARROW) && gameState === 1 && player.index !== null) {
        console.log(zy);
        player.distance += 10
        player.update();
      }

      if (player.distance > 2600) {
        gameState = 2;
        game.update(2)
      }

      drawSprites();
    }
  }
}