/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  var walker = {
    xCoordinate: 0,
    yCoordinate: 0,
    xSpeed: 0,
    ySpeed: 0
  };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // handle keydown events
  $(document).on('keyup', handleKeyUp);                               // handle keyup events

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem(); // Update the walker's position
    wallCollision() // Checks for walls collition 
    redrawGameItem();     // Redraw the walker on the screen
  }
  
  /* 
  Called in response to events.
  */

  var KEY = {
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    LEFT: 37
  };

  function handleKeyDown(event) {
    if (event.which === KEY.UP) {
      walker.ySpeed = -5; // Move up
    }
    if (event.which === KEY.DOWN) {
      walker.ySpeed = 5; // Move down
    }
    if (event.which === KEY.RIGHT) {
      walker.xSpeed = 5; // Move right
    }
    if (event.which === KEY.LEFT) {
      walker.xSpeed = -5; // Move left
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.UP || event.which === KEY.DOWN) {
      walker.ySpeed = 0; // Stop vertical movement
    }
    if (event.which === KEY.RIGHT || event.which === KEY.LEFT) {
      walker.xSpeed = 0; // Stop horizontal movement
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem() {
    walker.xCoordinate += walker.xSpeed;
    walker.yCoordinate += walker.ySpeed;
  }

  function redrawGameItem() {
    // Ensure the walker element exists
    $("#walker").css("left", walker.xCoordinate);
    $("#walker").css("top", walker.yCoordinate);
  }

  function wallCollision() {
    // Get the board dimensions
    var boardWidth = $("#board").width() - 50;
    var boardHeight = $("#board").height() - 50;

    // Check for collisions with the walls
    if (walker.xCoordinate <= 0) {
       walker.xCoordinate = 0; 
    } 
    if (walker.xCoordinate > boardWidth) {
      walker.xCoordinate = boardWidth; // Prevent moving
    }

    if (walker.yCoordinate < 0) {
        walker.yCoordinate = 0; // Prevent moving up
    } 
    if (walker.yCoordinate > boardHeight) {
        walker.yCoordinate = boardHeight; // Prevent moving down
    }
}
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}