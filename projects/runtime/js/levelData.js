var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "reward", x: 2000, y: groundY - 60 },
          { type: "enemy", x: 1200, y: groundY },
          { type: "endOfLevel", x: 2800, y: groundY },
          // Add at least one of each type of object
          { type: "sawblade", x: 1000, y: groundY },
          { type: "enemy", x: 1500, y: groundY },
          { type: "reward", x: 2200, y: groundY - 60 },
          { type: "endOfLevel", x: 3200, y: groundY },
        ]
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "reward", x: 1800, y: groundY - 60 },
          { type: "enemy", x: 1000, y: groundY },
          { type: "endOfLevel", x: 2400, y: groundY },
          // Add at least one of each type of object
          { type: "sawblade", x: 1200, y: groundY },
          { type: "enemy", x: 1700, y: groundY },
          { type: "reward", x: 2600, y: groundY - 60 },
          { type: "endOfLevel", x: 3600, y: groundY },
        ]
      }
    ];
    
    window.opspark.levelData = levelData;
  
  window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
