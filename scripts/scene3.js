//Init scene 3 variables
function initScene3(){
    if( !sceneInit ){
        drawBackground( 'game3' );
        charStartX = 233;
        charStartY = 580;
        valuesSet = false;
        sceneInit = true;
    }
    
}

//Running Warden/Faculty
function drawWardenScene3(){
    if( !valuesSet ){
        wardenCount=0, wardenX = 1100, wardenY = 64, wardenIncCount = 1, wardenImgType = 'facLeft', valuesSet = true;
    }
    wardenCount += .1;
    wardenCount = wardenCount > 100 ? 0 : wardenCount;
    let wardenStyle;

    if( wardenX < 316 ){
        wardenStyle = getWardenStyle( wardenY );
        wardenY += wardenIncCount;
        wardenImgType = 'facDown';
    }
    else{
        wardenStyle = getWardenStyle( wardenX );
        wardenX -= wardenIncCount;
    }
    ctx.drawImage( allImagesMap[ wardenImgType+wardenStyle ] , wardenX, wardenY, 40, 40);
    
}

//Scene 3
function scene3RestrictedAreas( x, y ){
    console.log( x, y );

    if( ( x < 208 && y > 523 ) //Left Bottom garden
        || ( x < 220 && y < 450 ) //Left Upper garden
        || ( x > 510 && y < 540 && y > 125 ) //Main Building
        || ( x > 840 && x < 960 && y < 560 && y > 125 ) //Dustbins
        || ( x > 475 && x < 485 && y > 224 && y < 494 ) //Stairs
        || ( x < 10 ) //left gate
        || ( y > 580 ) //Bottom
        || ( y > 420 && x > 1130 ) //right bottom
         ){
        return false;
    }
    return true;

}

//static element
var oldBoyHeight;
function drawStaticElementsScene3(){

    ctx.drawImage( allImagesMap[ 'fcS' ] , 957, 148, 50, 50);
    
    if( charStartX > 483 && charStartY > 300 && charStartY < 426 ){
        if( !oldBoyHeight ){
            oldBoyHeight = JSON.parse(JSON.stringify(boyHeight));
        }
        boyHeight = 50;
    }
    else if( oldBoyHeight ){
        boyHeight = oldBoyHeight;
        oldBoyHeight = null;
    }
    //ctx.drawImage( allImagesMap[ 'bus' ] , 220, 156, 40, 120);

}

//Message Stops
function drawMessageStopsScene3( x, y ){

    if( wardenX < 1026 && !messagesDrawn['Scene3Warden1']){ //Scene3Warden
        message = 'A Warden is coming this way.';
        message += '\nQuickly go and hide behind Dustbins on right side.';
        messagesDrawn['Scene3Warden1'] = true;
    }
    else if( x > 713 && y < 135 && !messagesDrawn['Scene3Warden2']){ //Scene3Warden
        message = 'A Faculty is standing there,';
        message += '\nFind some other way.';
        messagesDrawn['Scene3Warden2'] = true;
    }

    if( message != null ){
        showingMessage = true;
        showMessage();
        return true;
    }
    return false;

}

//Check for Game over
function checkForGameOverScene3( x, y ){

    if( sceneInit && y < wardenY+10 && y > wardenY-10 && x < wardenX+2000 && x > wardenX-1000  ){ //warden spot, covering whole y axes
        if( y > 400 && y < 579 && x > 950 && x < 980 && boyHeight == 30 ){
            return false;
        }
        gameOver = true;
        return true;
    }
    return false;

}

//Move character to next screen
function moveToNextScreenScene3( x, y ){
    if( x < 400 && y < 0 ){
        sceneInit = false;
        currentScene = 4;
        return true;
    }
}

