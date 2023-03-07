function drawButtons() {


    // Define button parameters
    const buttonWidth = 50;
    const buttonHeight = 50;
    const buttonPadding = 10;
    const buttonColor = 'green';
    const buttonTextColor = 'white';

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

    ctx.globalAlpha = 0.5;
    ctx.drawImage( allImagesMap[ 'controlArrowsBg' ] , 10, 420, 150, 150);
    ctx.globalAlpha = 1;

    // Listen for click events
    canvas.addEventListener('mousedown', function(event) {
        const mouseX = event.clientX - canvas.offsetLeft;
        const mouseY = event.clientY - canvas.offsetTop;

        // Check which button was clicked
        buttons.forEach(button => {
            if (mouseX >= button.xStart && mouseX <= button.xEnd &&
                mouseY >= button.yStart && mouseY <= button.yEnd) {
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
                        go_right = true;
                        break;
                    case 'space':
                        // Move space
                        space_down = true
                        break;
                }
            }
        });
    });

    canvas.addEventListener('mouseup', function(event) { 
        go_up = false, go_down=false, go_left=false, go_right=false;
    });
}