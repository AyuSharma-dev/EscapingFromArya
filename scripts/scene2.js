//Init scene 2 variables
function initScene2(){
    if( !sceneInit ){
        drawBackground( 'game2' );
        charStartX = 233;
        charStartY = 580;
        valuesSet = false;
        sceneInit = true;
    }
    
}

//Running Warden/Faculty
function drawWardenScene2(){
    if( !valuesSet ){
        wardenCount=0, wardenX = 1010, wardenY = 330, wardenIncCount = 1, wardenImgType = 'facDown', valuesSet = true;
    }
    wardenCount += .1;
    wardenCount = wardenCount > 100 ? 0 : wardenCount;
    let wardenStyle = getWardenStyle( wardenY );
    if( wardenY > 465 ){
        wardenIncCount = -1;
        wardenImgType = 'facUp';
    }
    else if( wardenY < 330 ){
        wardenIncCount = 1;
        wardenImgType = 'facDown';
    }
    ctx.drawImage( allImagesMap[ wardenImgType+wardenStyle ] , wardenX, wardenY, 40, 40);
    wardenY += wardenIncCount;
}

//Scene 2
function scene2RestrictedAreas( x, y ){
    console.log( x, y );

    if( ( x > 420 && y < 414 ) //Main Building
        || ( x < 205 ) //Left Garden
        || ( x > 299 && y > 465 ) //Bottom Pavement
        || ( y > 590 ) //Bottom Threshold
         ){
        return false;
    }
    return true;

}

//static element
function drawStaticElementsScene2(){

    //ctx.drawImage( allImagesMap[ 'guard' ] , 920, 519, 40, 40);
    //ctx.drawImage( allImagesMap[ 'bus' ] , 220, 156, 40, 120);

}

//Message Stops
function drawMessageStopsScene2( x, y ){

    if( x > 570 && x < 580 && y > 410 && !messagesDrawn['Scene2Warden']){ //Scene2Warden
        message = 'Are you sure you want to go this way.';
        message += '\nThink again!';
        messagesDrawn['Scene2Warden'] = true;
    }

    if( message != null ){
        showingMessage = true;
        showMessage();
        return true;
    }
    return false;

}

//Check for Game over
function checkForGameOverScene2( x, y ){

    if( sceneInit && (x < wardenX+80 && x > wardenX-80) && (y < wardenY+80 && y > wardenY-80)  ){ //Warden Spot
        drawBackground( 'gameOver' );
        return true;
    }
    return false;

}

//Move character to next screen
function moveToNextScreenScene2( x, y ){
    if( x > 190 && y < 0 ){
        sceneInit = false;
        currentScene = 3;
        return true;
    }
}

