var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var building;
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();
    
            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth, canvasHeight, "pink");
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
            var moon=draw.bitmap("img/moon.png");
            moon.x = 900;
            moon.y = 20;
            moon.scaleX = 1.0;
            moon.scaleY = 1.0;
            background.addChild(moon);

            var maxCircles = 1000;
            var minCircles = 100;

            var numCircles = Math.floor(Math.random() * (maxCircles - minCircles + 1)) + minCircles;

            for ( var i = 0; i < numCircles; i++) {
                var circle = draw.circle(10, 'lightgreen', 'black', 2);
                circle.x = canvasWidth*Math.random();
                circle.y = groundY*Math.random();
                background.addChild(circle)
            } 
    
            // TODO 4: Part 1 - Add buildings!
            var buildings = [];
            for (var i = 0; i < 5; i++) {
                var buildingHeight = 300;
                building = draw.rect(75, buildingHeight, "LightGray", "Black", 1);
                building.x = 200 * i;
                building.y = Math.random() - buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }

            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");
            tree.x = 20;
            tree.y = 30;
            background.addChild(tree);

            tree = draw.bitmap("img/tree.png");
            tree.x = 300;
            tree.y = 30;
            background.addChild(tree);
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 1;
            if(tree.x < 200) {
                tree.x = canvasWidth;
            } 
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < 5; i++) {
                var buildingHeight = 300;
                building = draw.rect(75, buildingHeight, "LightGray", "Black", 1);
                building.x = 200 * i;
                building.y = Math.random() * buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }

            for ( var i = 0; i < buildings.length; i++) {
                var building = buildings[i];
                var targetX = halle.x + (200 * i);
                var targetY = halle.y - buildingHeight;
                var duration = 1000;

                createjs.Tween.get(building)
                 .to({x: targetX, y: targetY}, duration);
            }
        } // end of update function - DO NOT DELETE
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = window.opspark.makeBackground;
}