//Init scene 13 variables
function initScene13(){
    if( !sceneInit ){
        drawBackground( 'game13' );
        charStartX = 250;
        charStartY = 535;
        valuesSet = false;
        sceneInit = true;
        currentBoyImg = allImagesMap['boyUp1'];
        horizontalRunning = true;
    }
    
}

var wardenPassed = false;

//Running Warden/Faculty
function drawWardenScene13(){

    if( wardenY > 600 ){
        return;
    }

    if( !valuesSet ){
        wardenCount=0, wardenX = 243, wardenY = -10, wardenIncCount = 1, wardenImgType = 'facDown', valuesSet = true;
    }

    wardenCount += .1;
    wardenCount = wardenCount > 100 ? 0 : wardenCount;
    let wardenStyle;

    wardenStyle = getWardenStyle( wardenY );
    wardenY += wardenIncCount;

    ctx.drawImage( allImagesMap[ wardenImgType+wardenStyle ] , wardenX, wardenY, 40, 40);
    
}

//Scene 13
function scene13RestrictedAreas( x, y ){

    if( (x < 220 || y < 4 || x > 440 || y > 585 ) //Boundaries  
        || (x > 310 && y > 0 && y < 360 ) //Building  
        || ( x > 343 & x < 458 && y < 415 && y > 358 ) //Car 1
        || ( x > 320 && x < 438 && y > 432 && y < 476 ) //Car 2
        || ( x > 320 && x < 438 && y > 500 && y < 550 ) //Car 3
     ){
        return false;
    }
    return true;

}

//static element
function drawStaticElementsScene13(){

    ctx.drawImage( allImagesMap[ 'car4' ] , 340, 442, 100, 50);
    ctx.drawImage( allImagesMap[ 'car1' ] , 340, 510, 100, 50);

}

//Message Stops
function drawMessageStopsScene13( x, y ){

    if( sceneInit && wardenY > 0 && !messagesDrawn['Scene13Msg1']){ //Scene13Msg1
        message = 'A Faculty is coming on this way.';
        message += '\nQuickly hide behind the cars.';
        messagesDrawn['Scene13Msg1'] = true;
    }

    if( message != null ){
        showingMessage = true;
        showMessage();
        return true;
    }
    return false;

}

//Check for Game over
function checkForGameOverScene13( x, y ){

    if( sceneInit && y < wardenY+10 && y > wardenY-10 && x < wardenX+2000 && x > wardenX-1000  ){ //warden spot, covering whole y axes
        if( ( y > 432 && y < 476 && x > 320 && boyHeight == 30 ) //Behind car 1
            || (  x > 320 && y > 500 && y < 550 && boyHeight == 30 ) ){ //Behind car 2
            return false;
        }
        gameOver = true;
        return true;
    }
    return false;

}

//Move character to next screen
function moveToNextScreenScene13( x, y ){
    if( y < 5 ){
        sceneInit = false;
        currentScene = 14;
        return true;
    }
}

