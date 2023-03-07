//Init scene 6 variables
function initScene6(){
    if( !sceneInit ){
        drawBackground( 'game5' );
        charStartX = 200;
        charStartY = 29;
        valuesSet = false;
        sceneInit = true;
        currentBoyImg = allImagesMap['boyRight1'];
        horizontalRunning = true;
        if( tractorTheme.paused ){
            mainGameTheme.pause();
            tractorTheme.currentTime=0;
            tractorTheme.play();
        }
    }
    
}

//Running Warden/Faculty
function drawWardenScene6(){

    if( !valuesSet ){
        wardenCount=0, wardenX = -10, wardenY = -10, wardenIncCount = 30, wardenImgType = 'trRight', valuesSet = true;
    }
    messagesDrawn['Scene5Warden1'] = true;
    drawWardenScene5();
    
}

//Scene 6
function scene6RestrictedAreas( x, y ){

    if( ( y < 10 ) //Top threshold
    || ( y > 120 && x < 120 ) //Stairs
    || (  x < 930 && y > 160  ) //bottom garden
    || ( x > 525 && x < 913 && y < 40 ) //Upper stairs
     ){
    return false;
}
return true;

}

//static element
function drawStaticElementsScene6(){

    ctx.drawImage( allImagesMap[ 'arrowRight' ] , 992, 25, 100, 50);

}

//Message Stops
function drawMessageStopsScene6( x, y ){

    if(  y < 140 && !messagesDrawn['Scene6Warden1']){ //Scene6Warden1
        message = 'Don\' stop';
        message += '\n';
        messagesDrawn['Scene6Warden1'] = true;
    }

    if( message != null ){
        showingMessage = true;
        showMessage();
        return true;
    }
    return false;

}

//Check for Game over
function checkForGameOverScene6( x, y ){

    if( sceneInit && y > wardenY-4 && y < wardenY+4 && x > wardenX-4 && x < wardenX+20  ){ //warden spot, covering whole y axes
        gameOver = true;
        return true;
    }
    return false;

}

//Move character to next screen
function moveToNextScreenScene6( x, y ){
    if( x > 1148 ){
        sceneInit = false;
        currentScene = 7;
        return true;
    }
}

