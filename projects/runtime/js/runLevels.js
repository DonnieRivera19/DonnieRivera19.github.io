var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    var hitZoneSize = 25;
    var damageFromObstacle = 10;

    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = 400;
    sawBladeHitZone.y = 150;
    game.addGameItem(sawBladeHitZone);

    var obstacleImage = draw.bitmap("img.sawblade.png");
    obstacleImage.x = 400;
    obstacleImage.y = 100;
    sawBladeHitZone.addChild(obstacleImage);

    function createSawBlade(x, y) {
      var obstacleImage = draw.bitmap("img.sawblade.png");
      obstacleImage.x = x;
      obstacleImage.y = y;
      sawBladeHitZone.addChild(obstacleImage);
    }

    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "blue");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);

      enemy.x = x;
      enemy.y = groundY - 50;

      game.addGameItem(enemy);

      enemy.velocityX = 10;
      enemy.rotationalVelocity = 30;

      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-5);
      };

      function onProjectileCollision() {
        game.increaseScore(100);
        enemy.fadeOut();
      }

      enemy.onProjectileCollision = onProjectileCollision;
    }

    function createReward(gameItem) {
      gameItem.onPlayerCollision = function () {
        game.increaseScore(100);
        game.changeIntegrity(10);
        gameItem.fadeOut();
      };
    }

    function createMarker(x, y) {
      var marker = game.createGameItem("marker", 25);
      var markerImage = draw.bitmap("img.marker.png");
      markerImage.x = -25;
      markerImage.y = -25;
      marker.addChild(markerImage);

      marker.x = y;
      marker.y = y;

      game.addGameItem(marker);

      marker.onPlayerCollision = function () {
        startLevel();
      };

      marker.onProjectileCollision = onProjectileCollision;
    }
    // TODOs 13 
    function startLevel() {
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;

      for (var i = 0; i < levelObjects.length; i++) {
        var object = levelObjects[i];
        if (object.type === "sawblade") {
          createSawBlade(object.x, object.y);
        } else if (object.type === "enemy") {
          createEnemy(object.x, object.y);
        } else if (object.type === "reward") {
          createReward(object.x, object.y);
        } else if (object.type === "marker") {
          createMarker(object.x, object.y);
        }
      }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = function () {
          console.log("Congratulations!");
        };
      }
    }

    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}