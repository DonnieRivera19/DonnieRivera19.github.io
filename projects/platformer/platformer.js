$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(350, 900, 400, 25);
    createPlatform(700, 775, 75, 25);
    createPlatform(800, 650, 75, 25);
    createPlatform(900, 525, 75, 25);
    createPlatform(800, 400, 75, 25);
    createPlatform(900, 275, 75, 25);
    createPlatform(800, 150, 75, 25);
    createPlatform(600, 150, 75, 25);
    createPlatform(400, 350, 75, 25);
    createPlatform(200, 550, 75, 25);

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("database", 820, 600);
    createCollectable("database", 920, 400);
    createCollectable("database", 820, 315);
    createCollectable("database", 220, 500);
    createCollectable("database", 620, 100);

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("bottom", 775, 2500);
    createCannon("top", 995, 3000);
    createCannon("right", 550, 3500);
    createCannon("left", 70, 3000);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
