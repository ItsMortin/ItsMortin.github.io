(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the platform.create() method to create platforms for the level. 
     * 
     * platform.create() takes these arguments:
     *      
     *      platform.create(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    platform.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        platform.create(0, game.world.height - 32, 3, 2);

        // example:
        platform.create(730, 530, 0.3, 1);
        platform.create(500, 600, 0.3, 1);
        platform.create(830, 500, 0.1, 1.5);
        platform.create(30, 200, 0.3, 1);
        platform.create(130, 220, 0.1, 1);
        platform.create(150, 240, 0.1, 1);
        platform.create(170, 260, 0.1, 1);
        platform.create(190, 280, 0.1, 1);
        platform.create(210, 300, 0.1, 1);
        platform.create(230, 320, 0.1, 1);
        platform.create(250, 340, 0.1, 1);
        platform.create(270, 360, 0.1, 1);
        platform.create(290, 380, 0.1, 1);
        platform.create(310, 400, 0.1, 1);
        platform.create(0, 420, .25, 1, 1);
        platform.create(250, 420, 1.2, 1, 1);
        platform.create(90, 530, 0.4, 0.5, 1);
//Left of car
        platform.create(80, 540, 0.05, 0.5, 1);
        platform.create(70, 550, 0.05, 0.5, 1);
        platform.create(60, 560, 0.05, 0.5, 1);
        platform.create(50, 570, 0.05, 0.5, 1);
        platform.create(40, 580, 0.05, 0.5, 1);
        platform.create(0, 590, 0.12, 0.5, 1);
        platform.create(0, 590, 0.03, 2.2, 1);
        platform.create(0, 640, 5, 0.5, 1);
//Right of car
        platform.create(240, 540, 0.05, 0.5, 1);
        platform.create(250, 590, 0.3, 0.5, 1);
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);