
var wardenPassed = false;
var againInScreen;

//Init scene 9 variables
function initScene10(){
    againInScreen = messagesDrawn['Scene11Ex1'];
    if( !sceneInit ){
        drawBackground( 'game5' );
        if( !againInScreen ){
            charStartX = 525;
            charStartY = 533;
            tractorTheme.pause();
            mainGameTheme.currentTime = 0;
            mainGameTheme.play();
        }
        else{
            charStartX = 235;
            charStartY = 30;
        }
        
        valuesSet = false;
        sceneInit = true;
        currentBoyImg = allImagesMap['boyUp1'];
        horizontalRunning = false;
    }
    
}


//Running Warden/Faculty
function drawWardenScene10(){

    if( againInScreen ){
        return;
    }

    if( !valuesSet ){
        wardenCount=0, wardenX = 729, wardenY = 1300, wardenIncCount = 1, wardenImgType = 'trUp', valuesSet = true;
    }

    if( wardenX < -20 ){
        wardenPassed = true;
        return;
    }

    wardenCount += .1;
    wardenCount = wardenCount > 100 ? 0 : wardenCount;
    let wardenStyle;

    if( wardenY < 40 ){
        wardenStyle = getWardenStyle( wardenX );
        wardenX -= wardenIncCount;
        wardenImgType = 'trLeft';
    }
    else{
        wardenStyle = getWardenStyle( wardenY );
        wardenY -= wardenIncCount;
    }

    ctx.drawImage( allImagesMap[ wardenImgType+wardenStyle ] , wardenX, wardenY, 60, 60);
    
}

//Scene 10
function scene10RestrictedAreas( x, y ){

    if( (x < 10 || y > 585 || x > 1135 || y < 4) //Boundaries  
        || ( x < 75 && y < 498 && y > 332 ) //Left Stairs  
        || ( x > 310 && x < 335 && y < 222 && y > 200 ) //Basket Pole
        || ( x < 95 && x > 30 && y < 540 && y > 485 ) //Dustbin
     ){
        return false;
    }
    return true;

}

//static element
function drawStaticElementsScene10(){

    ctx.drawImage( allImagesMap[ 'dustbinBox' ] , 40, 496);

    if( wardenPassed || againInScreen ){
        ctx.drawImage( allImagesMap[ 'arrowUp' ] , 1032, 13, 40, 80);
        if( wardenPassed ){
            ctx.drawImage( allImagesMap[ 'arrowUp' ] , 241, 13, 40, 80);
        }
    }

}

//Message Stops
function drawMessageStopsScene10( x, y ){

    if( wardenY < 1300 && !messagesDrawn['Scene10Warden1'] && !messagesDrawn['Scene11Ex1']){ //Scene3Warden
        message = 'We need to get rid of him!';
        message += '\nQuickly hide behind Dustbin. Press "C" to crouch.';
        messagesDrawn['Scene10Warden1'] = true;
    }
    else if( wardenX < 585 && !messagesDrawn['Scene10Warden2'] && !messagesDrawn['Scene11Ex1']){ //Scene3Warden
        message = 'Dont Move or you will be spotted.';
        messagesDrawn['Scene10Warden2'] = true;
    }

    if( message != null ){
        showingMessage = true;
        showMessage();
        return true;
    }
    return false;

}

//Check for Game over
function checkForGameOverScene10( x, y ){

    if( sceneInit && !wardenPassed && ( ( y < wardenY+10 && y > wardenY-10 && x < wardenX+2000 && x > wardenX-1000 )
        || (  y < wardenY+2000 && y > wardenY-1000 && x < wardenX+10 && x > wardenX-10 ) )  ){ //warden spot, covering whole y & x axes
        if( x < 56 && y < 545 && y > 485 ){
            return;
        }
        gameOver = true;
        return true;
    }
    return false;

}

//Move character to next screen
function moveToNextScreenScene10( x, y ){
    if( y < 5 && x > 195 && x < 305 ){
        scene11Path = 1;
    }
    else if( y < 5 && x > 1000 && x < 1107 ){
        scene11Path = 2;
    }

    if( scene11Path ){
        sceneInit = false;
        currentScene = 11;
        return true;
    }
}

