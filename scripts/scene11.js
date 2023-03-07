var scene11Path;

//Init scene 9 variables
function initScene11(){
    
    if( !sceneInit ){
        drawBackground( 'game11' );
        if( scene11Path == 1 ){
            charStartX = 190;
            charStartY = 560;
            currentBoyImg = allImagesMap['boyUp1'];
        }
        else if( scene11Path == 2 ){
            charStartX = 1030;
            charStartY = 500;
            currentBoyImg = allImagesMap['boyUp1'];
        }
        else if( scene11Path == 3 ){
            charStartX = 1085;
            charStartY = 20;
            currentBoyImg = allImagesMap['boyLeft1'];
        }
        
        valuesSet = false;
        sceneInit = true;
        horizontalRunning = false;
    }
    
}

var wardenPassed = false;

//Running Warden/Faculty
function drawWardenScene11(){
}

//Scene 11
function scene11RestrictedAreas( x, y ){

    if( (x < 130 && y > 60 ) //Left building  
        || (x > 260 && y > 543 && x < 980 ) //Right building 1 
        || (x > 310 && y > 20 && x < 980 ) //Right building 2
        || ( y < 204 && y > 20 && x < 980 ) //Building Top 
        || ( ( x > 1090 && !messagesDrawn['Scene11Msg1'] ) || y < 5 ) //Right, Top Boundary
        || ( y > 570 && scene11Path == 2 ) //Right, Top Boundary
        || ( y > 580 && scene11Path == 1 && !messagesDrawn['Scene11Ex1'] ) //Right, Top Boundary
        || ( y > 30 && scene11Path == 3 ) //Block Bottom path
        || ( y > 40 && x > 1040 && scene11Path == 1 ) //Right building 3
     ){
        return false;
    }
    return true;

}

//static element
function drawStaticElementsScene11(){

    ctx.drawImage( allImagesMap[ 'ex' ] , 58, 412);

    if( scene11Path == 3 ){

        ctx.drawImage( allImagesMap[ 'fcSRight' ] , 189, 20);
        ctx.drawImage( allImagesMap[ 'fcSLeft' ] , 222, 10);

    }

    // if( wardenPassed ){
    //     ctx.drawImage( allImagesMap[ 'arrowUp' ] , 1032, 13, 40, 80);
    //     ctx.drawImage( allImagesMap[ 'arrowUp' ] , 241, 13, 40, 80);
    // }

}

//Message Stops
function drawMessageStopsScene11( x, y ){

    if( x > 117 && x < 350 && y < 524 && y > 209 && !messagesDrawn['Scene11Ex1']){ //Scene31
        message = 'Alright stop there,';
        message += '\nYou ex is sitting here, not a good idea to go from here.';
        messagesDrawn['Scene11Ex1'] = true;
    }
    else if( sceneInit && scene11Path == 3 && x < 600 && !messagesDrawn['Scene11Msg1'] ){
        message = 'Two faculties are blocking the path.';
        message += '\nLets go back and find another way.';
        messagesDrawn['Scene11Msg1'] = true;
    }

    if( message != null ){
        showingMessage = true;
        showMessage();
        return true;
    }
    return false;

}

//Check for Game over
function checkForGameOverScene11( x, y ){

    if( sceneInit && x > 100 && x < 400 && y < 490 && y > 207 ){ //Found ex
        gameOver = true;
        return true;
    }
    else if( sceneInit && x < 350 && scene11Path == 3){ //Caught
        gameOver = true;
        return true;
    }
    return false;

}

//Move character to next screen
function moveToNextScreenScene11( x, y ){
    if( !sceneInit ){
        return;
    }
    if( x < 5 ){
        currentScene = 12;
        scene11Path = null;
        sceneInit = false;
        return true;
    }
    else if( y > 595 ){
        currentScene = 10;
        scene11Path = null;
        sceneInit = false;
        return true;
    }
    else if( x > 1090 && scene11Path == 3 && messagesDrawn['Scene11Msg1'] ){
        currentScene = 16;
        scene11Path = null;
        sceneInit = false;
        return true;
    }
}

