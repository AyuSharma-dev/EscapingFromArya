//Init scene 7 variables
function initScene7(){
    if( !sceneInit ){
        drawBackground( 'game7' );
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
function drawWardenScene7(){

    if( !valuesSet ){
        wardenCount=0, wardenX = -10, wardenY = -10, wardenIncCount = 30, wardenImgType = 'trDown', valuesSet = true;
    }
    messagesDrawn['Scene5Warden1'] = true;
    drawWardenScene5();
    
}

//Scene 7
function scene7RestrictedAreas( x, y ){

    if( ( x > 260 || x < 10 ) //Main Building
     ){
        return false;
    }
    return true;

}

//static element
function drawStaticElementsScene7(){

    ctx.drawImage( allImagesMap[ 'arrowDown' ] , 43, 491, 40, 80);

}

//Message Stops
function drawMessageStopsScene7( x, y ){

    // if(  y < 140 && !messagesDrawn['Scene7Warden1']){ //Scene7Warden1
    //     message = 'Don\' stop';
    //     message += '\n';
    //     messagesDrawn['Scene7Warden1'] = true;
    // }

    // if( message != null ){
    //     showingMessage = true;
    //     showMessage();
    //     return true;
    // }
    // return false;

}

//Check for Game over
function checkForGameOverScene7( x, y ){

    if(  sceneInit && y > wardenY-4 && y < wardenY+4 && x > wardenX-4 && x < wardenX+20  ){ //warden spot, covering whole y axes
        gameOver = true;
        return true;
    }
    return false;

}

//Move character to next screen
function moveToNextScreenScene7( x, y ){
    if( y > 590 ){
        sceneInit = false;
        currentScene = 8;
        return true;
    }
}

