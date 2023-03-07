//Init scene 15 variables
function initScene15(){
    if( !sceneInit ){
        drawBackground( 'game15' );
        charStartX = 53;
        charStartY = 361;
        valuesSet = false;
        sceneInit = true;
        currentBoyImg = allImagesMap['boyRight1'];
        horizontalRunning = true;
    }
    
}

var wardenPassed = false;

let bg1x, bg1y, bg2x, bg2y, bg1Img, bg2Img, runBg;

//Running Warden/Faculty
function drawWardenScene15(){

    // if( wardenY > 600 ){
    //     return;
    // }

    if( !valuesSet ){
        wardenCount=0, bg1x = 463, bg1y = 54, wardenIncCount = 1, bg1Img = 'bgDown', valuesSet = true;
        wardenCount=0, bg2x = 765, bg2y = 54, wardenIncCount = 1, bg2Img = 'bgDown', valuesSet = true;
    }

    wardenCount += .1;
    wardenCount = wardenCount > 100 ? 0 : wardenCount;

    let wardenStyle;
    wardenStyle = getWardenStyle( bg1y );

    if( charStartY < 180 && charStartX > 388 && !messagesDrawn['scene14Msg1'] ){
        runBg = true;
    }
    
    
    if( runBg ){
        runBg = true;
        if(  bg1x > 580 ){
            bg1Img = 'bgDown';
            bg2Img = 'bgDown';
        }
        else if( bg1y < 120 ){
            bg1y += wardenIncCount;
            bg2y += wardenIncCount;
            wardenStyle = getWardenStyle( bg1y );
        }
        else{
            bg1Img = 'bgLeft';
            bg2Img = 'bgRight';
            bg1x += wardenIncCount;
            bg2x -= wardenIncCount;
            wardenStyle = getWardenStyle( bg2x );
        }
    }
    

    

    ctx.drawImage( allImagesMap[ bg1Img+wardenStyle ] , bg1x, bg1y, 50, 50);
    ctx.drawImage( allImagesMap[ bg2Img+wardenStyle ] , bg2x, bg2y, 50, 50);
    
}

//Scene 15
function scene15RestrictedAreas( x, y ){

    if( ( y < 160 || x > 1125 ) //Boundaries  
        || (x < 925 && y > 380 ) //Building Bottom
        || ( x > 817 && y < 334 ) //Building Right
        || ( x < 10 && !messagesDrawn['scene16Msg1'] ) //Left path
        || ( y > 580 && !messagesDrawn['scene14Msg1'] ) //Bottom path
     ){
        return false;
    }
    return true;

}

//static element
function drawStaticElementsScene15(){

    if( messagesDrawn['Scene14Msg1'] ){
        ctx.drawImage( allImagesMap[ 'arrowDown' ] , 1026, 504, 40, 80);
    }

}

//Message Stops
function drawMessageStopsScene15( x, y ){

    if( bg1x > 580 && !messagesDrawn['Scene15Msg1'] && !messagesDrawn['Scene14Msg1']){ //Scene15Msg1
        message = '"You are not allowed to go out from this gate."';
        message += '\nJeez!! lets find another way to move further.';
        messagesDrawn['Scene15Msg1'] = true;
    }

    if( message != null ){
        showingMessage = true;
        showMessage();
        return true;
    }
    return false;

}

//Check for Game over
function checkForGameOverScene15( x, y ){
    return false;

}

//Move character to next screen
function moveToNextScreenScene15( x, y ){
    if( x < 15 && messagesDrawn['Scene15Msg1'] ){
        sceneInit = false;
        currentScene = 14;
        scene14Path2 = true;
        return true;
    }
    else if( y > 570 && messagesDrawn['Scene14Msg1'] ){
        sceneInit = false;
        currentScene = 16;
        return true;
    }
}

