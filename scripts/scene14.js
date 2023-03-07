var scene14Path2 = false;

//Init scene 14 variables
function initScene14(){
    if( !sceneInit ){
        drawBackground( 'game14' );
        if( !scene14Path2 ){
            charStartX = 250;
            charStartY = 535;
            currentBoyImg = allImagesMap['boyUp1'];
        }
        else{
            charStartX = 939;
            charStartY = 204;
            currentBoyImg = allImagesMap['boyLeft1'];
        }
        valuesSet = false;
        sceneInit = true;
        
        horizontalRunning = true;
    }
    
}

var wardenPassed = false;

//Running Warden/Faculty
function drawWardenScene14(){

    if( !scene14Path2 ){
        return;
    }

    if( !valuesSet ){
        wardenCount=0, wardenX = 258, wardenY = 217, wardenIncCount = 1, wardenImgType = 'facRight', valuesSet = true;
    }

    wardenCount += .1;
    wardenCount = wardenCount > 100 ? 0 : wardenCount;
    let wardenStyle;

    wardenStyle = getWardenStyle( wardenX );
    wardenX += wardenIncCount;

    ctx.drawImage( allImagesMap[ wardenImgType+wardenStyle ] , wardenX, wardenY, 40, 40);
    
}

//Scene 14
function scene14RestrictedAreas( x, y ){

    if( (x < 215 || y < 180 || y > 580 ) //Boundaries  
        || (x > 300 && y > 395 ) //Building 1
        || ( x > 450 & x < 1010 && y > 235 ) //Building top
     ){
        return false;
    }
    return true;

}

//static element
function drawStaticElementsScene14(){

}

//Message Stops
function drawMessageStopsScene14( x, y ){

    if( wardenX > 0 && !messagesDrawn['Scene14Msg1'] && scene14Path2){ //Scene14Msg1
        message = 'A Faculty is coming on this way.';
        message += '\nQuickly go back and find some other path.';
        messagesDrawn['Scene14Msg1'] = true;
    }

    if( message != null ){
        showingMessage = true;
        showMessage();
        return true;
    }
    return false;

}

//Check for Game over
function checkForGameOverScene14( x, y ){

    if( sceneInit && scene14Path2 && (x < wardenX+80 && x > wardenX-80) && (y < wardenY+80 && y > wardenY-80 )  ){ //warden spot, covering whole y axes
        gameOver = true;
        return true;
    }
    return false;

}

//Move character to next screen
function moveToNextScreenScene14( x, y ){
    if( x > 1150 && ( !scene14Path2 ||  messagesDrawn['Scene14Msg1'] ) ){
        sceneInit = false;
        currentScene = 15;
        return true;
    }
}

