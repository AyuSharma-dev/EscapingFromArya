//Init scene 9 variables
function initScene9(){
    if( !sceneInit ){
        drawBackground( 'game9' );
        charStartX = 805;
        charStartY = 387;
        valuesSet = false;
        sceneInit = true;
        currentBoyImg = allImagesMap['boyUp1'];
        horizontalRunning = false;
        if( tractorTheme.paused ){
            mainGameTheme.pause();
            tractorTheme.currentTime=0;
            tractorTheme.play();
        }
    }
    
}

//Running Warden/Faculty
function drawWardenScene9(){

    if( !valuesSet ){
        wardenCount=0, wardenX = 876, wardenY = 562, wardenIncCount = 30, wardenImgType = 'trUp', valuesSet = true;
    }
    messagesDrawn['Scene5Warden1'] = true;
    drawWardenScene5();
    
}

//Scene 9
function scene9RestrictedAreas( x, y ){

    if( ( x < 164 || y > 580 || x > 1150 ) //Boundaries
        || ( x > 527 && y < 20 ) //Top 
     ){
        return false;
    }
    return true;

}

//static element
function drawStaticElementsScene9(){

    ctx.drawImage( allImagesMap[ 'arrowUp' ] , 488, 12, 40, 80);

}

//Message Stops
function drawMessageStopsScene9( x, y ){

}

//Check for Game over
function checkForGameOverScene9( x, y ){

    if( sceneInit && y > wardenY-4 && y < wardenY+4 && x > wardenX-4 && x < wardenX+20  ){ //warden spot, covering whole y axes
        gameOver = true;
        return true;
    }
    return false;

}

//Move character to next screen
function moveToNextScreenScene9( x, y ){
    if( y < 5 ){
        sceneInit = false;
        currentScene = 10;
        return true;
    }
}

