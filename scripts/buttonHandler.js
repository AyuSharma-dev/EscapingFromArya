function drawButtons() {

    var intervalId;

    // Define button objects
    const buttons = [{
            name: 'up',
            xStart: 63,
            yStart: 421,
            xEnd:107,
            yEnd: 468
        },
        {
            name: 'down',
            xStart: 63,
            yStart: 521,
            xEnd:107,
            yEnd: 568
        },
        {
            name: 'left',
            xStart: 10,
            yStart: 474,
            xEnd:58,
            yEnd: 520
        },
        {
            name: 'right',
            xStart: 110,
            yStart: 474,
            xEnd:157,
            yEnd: 520
        },
        {
            name: 'space',
            xStart: 63,
            yStart: 474,
            xEnd:107,
            yEnd: 520
        }
    ];

    // ctx.globalAlpha = 0.5;
    // ctx.drawImage( allImagesMap[ 'controlArrowsBg' ] , 10, 420, 150, 150);
    // ctx.globalAlpha = 1;

    //console.log('drawButton');
    // Listen for click events
    canvas.addEventListener('touchstart', function(event) {
        console.log('touching');
        var touch = event.touches[0];
        const mouseX = touch.clientX - canvas.offsetLeft;
        const mouseY = touch.clientY - canvas.offsetTop;

        console.log(mouseX,  mouseY );
        // Check which button was clicked
        buttons.forEach(button => {
            if (mouseX >= button.xStart && mouseX <= button.xEnd &&
                mouseY >= button.yStart && mouseY <= button.yEnd) {
                    console.log('in area', button.name);
                // Handle the button click
                switch (button.name) {
                    case 'up':
                        // Move up
                        go_up = true;
                        break;
                    case 'down':
                        go_down = true;
                        // Move down
                        break;
                    case 'left':
                        // Move left
                        go_left = true;
                        break;
                    case 'right':
                        // Move right
                        console.log('right pressed');
                        go_right = true;
                        break;
                    case 'space':
                        // Move space
                        console.log('s pressed');
                        if( currentScene == 0 ){
                            currentScene=1;
                        }
                        else{
                            space_down = true
                        }
                        break;
                }
            }
            // intervalId = setInterval(function() {
            //     // Set the stroke style to blue
            //     go_right = true;
            // }, 50);
        });

        
        event.preventDefault();
    });

    canvas.addEventListener('touchend', function(event) { 
        console.log('touch end');
        //clearInterval(intervalId);
        go_up = false, go_down=false, go_left=false, go_right=false;
        event.preventDefault();
    });

    
}