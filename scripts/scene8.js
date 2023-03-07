//Init scene 8 variables
function initScene8(){
    if( !sceneInit ){
        drawBackground( 'game8' );
        charStartX = 127;
        charStartY = 194;
        valuesSet = false;
        sceneInit = true;
        currentBoyImg = allImagesMap['boyDown1'];
        horizontalRunning = false;
        if( tractorTheme.paused ){
            mainGameTheme.pause();
            tractorTheme.currentTime=0;
            tractorTheme.play();
        }
    }
    
}

//Running Warden/Faculty
function drawWardenScene8(){

    if( !valuesSet ){
        wardenCount=0, wardenX = -10, wardenY = -10, wardenIncCount = 30, wardenImgType = 'trDown', valuesSet = true;
    }
    messagesDrawn['Scene5Warden1'] = true;
    drawWardenScene5();
    
}

//Scene 8
function scene8RestrictedAreas( x, y ){

    if( ( x < 10 && y < 470 ) //Main Ground
        || ( y > 570 ) //Bottom stop
     ){
        return false;
    }
    return true;

}

//static element
function drawStaticElementsScene8(){

    ctx.drawImage( allImagesMap[ 'arrowLeft' ] , 43, 491, 80, 40);

}

//Message Stops
function drawMessageStopsScene8( x, y ){

    // if(  y < 140 && !messagesDrawn['Scene8Warden1']){ //Scene8Warden1
    //     message = 'Don\' stop';
    //     message += '\n';
    //     messagesDrawn['Scene8Warden1'] = true;
    // }

    // if( message != null ){
    //     showingMessage = true;
    //     showMessage();
    //     return true;
    // }
    // return false;

}

//Check for Game over
function checkForGameOverScene8( x, y ){

    if(  sceneInit && y > wardenY-4 && y < wardenY+4 && x > wardenX-4 && x < wardenX+20  ){ //warden spot, covering whole y axes
        gameOver = true;
        return true;
    }
    return false;

}

//Move character to next screen
function moveToNextScreenScene8( x, y ){
    if( x < 5 ){
        sceneInit = false;
        currentScene = 9;
        return true;
    }
}

