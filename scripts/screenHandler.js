// Set the loading screen properties
const radius = 50;
const startAngle = 0;
const endAngle = Math.PI * 2;
const counterClockwise = false;

// Set up the loading properties
let progress = 0;
const lineWidth = 10;
const color = "blue";

// Define the animation loop
let spinnerAngle = 0;
function drawLoadingScreen() {
    const x = canvas.width / 2;
    const y = canvas.height / 2;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = 'black';
    ctx.moveTo(x, y);
    //ctx.lineTo(textW, (textH)+textW);
    ctx.stroke();
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";

    const textWidth = ctx.measureText("Press R to restart the game.").width + 300;
    ctx.fillRect(x - textWidth/2, x - 500, textWidth, 800);

    ctx.font = "40px Comic Sans MS";
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText('Loading game components, please wait', x, 100);
    ctx.strokeText('Loading game components, please wait', x, 100);

    

    // Draw the circle
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "#ccc";
    ctx.stroke();

    // Draw the progress arc
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle * progress, counterClockwise);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke();

    // Update the progress
    progress += 0.001;
    if (progress > 1) {
    progress = 0;
    }

    // Repeat the animation
    //requestAnimationFrame(draw);
}

function startGameScreen(){
    drawBackground( 'gameStart' );
    startAudio.play();
    let textW = canvas.width/2, textH = canvas.height/2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(textW, textH);
    // ctx.lineTo(textW, (textH)+textW);
    ctx.stroke();
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";

    const textWidth = ctx.measureText("Press R to restart the game.").width + 300;
    ctx.fillRect(textW - textWidth/2, textH - 500, textWidth, 800);

    ctx.font = "15px Ariel";
    ctx.strokeStyle = 'white';
    ctx.fillStyle = "white";
    ctx.fillText("This app is not monetized in any way and created for fun purpose only.", textW, 500);
    ctx.fillText("All the Sounds and Images used in this app belongs to their respective owners", textW, 520);

    ctx.font = "60px Comic Sans MS";
    ctx.lineWidth = 1;
    ctx.textAlign = "center";
    ctx.fillText('\"ESCAPING FROM ARYA\"', textW, 132);
    ctx.strokeText('ESCAPING FROM ARYA', textW, 132);
    ctx.font = "50px Comic Sans MS";
    ctx.lineWidth = .5;
    ctx.fillText("Help Ayush to bunk from Arya Campus", textW, 268);
    ctx.strokeText("Help Ayush to bunk from Arya Campus", textW, 268);
    ctx.fillText("Press \"S\" to start the game.", textW, 350);
    ctx.strokeText("Press \"S\" to start the game.", textW, 350);

    if( true ){
        ctx.globalAlpha = 0.5;
        ctx.drawImage( allImagesMap[ 'controlArrowsBg' ] , 10, 420, 150, 150);
        ctx.globalAlpha = 1;
    }
    
}

function drawGameOverScreen(){
    drawBackground( 'gameOver' );

    tractorTheme.pause();
    mainGameTheme.pause();
    if( gameOverSound.paused ){
        gameOverSound.currentTime = 0;
    }
    gameOverSound.play();

    let textW = canvas.width/2, textH = canvas.height/2;
    ctx.strokeStyle = "red";
    ctx.moveTo(textW, textH);
    // ctx.lineTo(textW, (textH)+textW);
    ctx.stroke();
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";

    const textWidth = ctx.measureText("Press R to restart the game.").width + 200;
    ctx.fillRect(textW - textWidth/2, textH - 500, textWidth, 800);

    ctx.font = "60px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", textW, 132);
    ctx.font = "40px Comic Sans MS";
    ctx.fillText("Press C to continue.", textW, 268);
    ctx.fillText("Press R to restart the game.", textW, 350);

    if( isMobile ){
        drawButtons();
    }
    
}

var message;
var showingMessage;
function showMessage(){
    if( message != null ){
        // Draw the message box
        ctx.fillStyle = "white";
        ctx.fillRect(730, 20, 500, 100);
        // Write the message text
        ctx.fillStyle = "black";
        ctx.font = "15px Arial";
        let textGap = 50;
        message.split('\n').forEach(msg => {
            ctx.fillText(msg, 740, textGap);
            textGap +=20;
        });
        ctx.fillText('Press "Space" to continue', 740, textGap+10);
    }
    
}