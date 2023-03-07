//Init scene 5 variables
function initScene5(){
    if( !sceneInit ){
        drawBackground( 'game3' );
        charStartX = 405;
        charStartY = 29;
        valuesSet = false;
        sceneInit = true;
        currentBoyImg = allImagesMap['boyRight1'];
        if( tractorTheme.paused ){
            tractorTheme.currentTime=0;
            mainGameTheme.pause();
            tractorTheme.play();
        }
    }
    
}

//Running Warden/Faculty
function drawWardenScene5(){
    if( !messagesDrawn['Scene5Warden1'] ){
        return;
    }

    if( !valuesSet ){
        wardenCount=0, wardenX = 243, wardenY = -10, wardenIncCount = 30, wardenImgType = 'trRight', valuesSet = true;
    }
    wardenCount += .1;
    wardenCount = wardenCount > 100 ? 0 : wardenCount;
    let wardenStyle;

    wardenStyle = getWardenStyle( wardenCount*5 );

    if( wardenY < charStartY ){
        wardenY += wardenIncCount;
    }
    if( wardenY > charStartY ){
        wardenY -= wardenIncCount;
    }

    if( wardenX < charStartX ){
        wardenX += wardenIncCount;
    }
    if( wardenX > charStartX ){
        wardenX -= wardenIncCount;
    }
    wardenIncCount = 1.5;

    console.log( wardenImgType+wardenStyle )
    ctx.drawImage( allImagesMap[ wardenImgType+wardenStyle ] , wardenX, wardenY, 60, 60);
    
}

//Scene 5
function scene5RestrictedAreas( x, y ){

    if( ( x < 208 && y > 523 ) //Left Bottom garden
    || ( x < 220 && y < 450 ) //Left Upper garden
    || ( x > 510 && y < 540 && y > 125 ) //Main Building
    || ( x > 840 && x < 960 && y < 560 && y > 125 ) //Dustbins
    || ( x > 475 && x < 485 && y > 224 && y < 494 ) //Stairs
    || ( x < 10 ) //left gate
    || ( y < 10 ) //top lock
     ){
    return false;
}
return true;

}

//static element
function drawStaticElementsScene5(){

    ctx.drawImage( allImagesMap[ 'arrowRight' ] , 992, 25, 100, 50);

}

//Message Stops
function drawMessageStopsScene5( x, y ){

    if(  y < 140 && !messagesDrawn['Scene5Warden1']){ //Scene5Warden1
        message = 'Run Run Runnnnn!!!';
        message += '\n';
        messagesDrawn['Scene5Warden1'] = true;
    }

    if( message != null ){
        showingMessage = true;
        showMessage();
        return true;
    }
    return false;

}

//Check for Game over
function checkForGameOverScene5( x, y ){

    if( sceneInit && y > wardenY-4 && y < wardenY+4 && x > wardenX-4 && x < wardenX+20  ){ //warden spot, covering whole y axes
        gameOver = true;
        return true;
    }
    return false;

}

//Move character to next screen
function moveToNextScreenScene5( x, y ){
    if( x > 1148 ){
        sceneInit = false;
        currentScene = 6;
        return true;
    }
}

