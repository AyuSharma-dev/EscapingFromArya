//Init scene 16 variables
function initScene16(){
    if( !sceneInit ){
        drawBackground( 'game16' );
        if( !messagesDrawn['Scene11Msg1'] ){
            charStartX = 951;
            charStartY = 24;
            currentBoyImg = allImagesMap['boyDown1'];
        }
        else{
            charStartX = 91;
            charStartY = 551;
            currentBoyImg = allImagesMap['boyRight1'];
        }
        
        valuesSet = false;
        sceneInit = true;
        
        horizontalRunning = false;
    }
    
}


//Running Warden/Faculty
function drawWardenScene16(){
    
}

//Scene 16
function scene16RestrictedAreas( x, y ){

    if( ( y < 10 || x > 1015 || y > 580 ||  ( x < 15 && messagesDrawn['Scene11Msg1'] ) ) //Boundaries  
        || (x < 909 && y < 522 && x > 33 ) //Building left
        || ( x < 33 && y < 522 && !messagesDrawn['Scene11Msg1']  )
     ){
        return false;
    }
    return true;

}

//static element
function drawStaticElementsScene16(){

    if( messagesDrawn['Scene11Msg1'] ){
        ctx.drawImage( allImagesMap[ 'arrowUp' ] , 18, 528, 30, 60);
    }

}

//Message Stops
function drawMessageStopsScene16( x, y ){
    return false;

}

//Check for Game over
function checkForGameOverScene16( x, y ){
    return false;

}

//Move character to next screen
function moveToNextScreenScene16( x, y ){
    if( x < 5 && !messagesDrawn['Scene11Msg1'] ){
        sceneInit = false;
        currentScene = 11;
        scene11Path = 3;
        return true;
    }
    else if( x < 33 && y < 522 && messagesDrawn['Scene11Msg1'] ){
        sceneInit = false;
        currentScene = 17;
        return true;
    }
}

