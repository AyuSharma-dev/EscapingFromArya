//Init scene 12 variables
var scene12path2;
function initScene12(){
    if( !sceneInit ){
        drawBackground( 'game12' );
        if( scene12path2 ){ //path 2
            charStartX = 1045;
            charStartY = 455;
            currentBoyImg = allImagesMap['boyDown1'];
        }
        else{
            charStartX = 1045;
            charStartY = 455;
            currentBoyImg = allImagesMap['boyLeft1'];
        }
        valuesSet = false;
        sceneInit = true;
        
        horizontalRunning = true;
    }
    
}

var wardenPassed = false;

//Running Warden/Faculty
function drawWardenScene12(){
    
}

//Scene 10
function scene12RestrictedAreas( x, y ){

    if( (x < 210 || ( y > 585 && !scene12path2 ) || x > 1135 || ( y < 377 && scene12path2 )) //Boundaries  
        || ( x > 440 && y < 420 ) //Main Building
        || ( x > 460 && y > 500 ) //Bottom Path
     ){
        return false;
    }
    return true;

}

//static element
function drawStaticElementsScene12(){

}

//Message Stops
function drawMessageStopsScene12( x, y ){

    if( y > 575 && !messagesDrawn['Scene12Msg1'] && !scene12path2){ //Scene12Msg1
        message = 'I found Sunil Sir here last time.';
        message += '\nLets find another way to move further.';
        messagesDrawn['Scene12Msg1'] = true;
    }

    if( y < 380 && scene12path2 && !messagesDrawn['Scene12Msg2'] ){
        message = 'I have already went through this way.';
        message += '\nLet\'s try some other way!';
        messagesDrawn['Scene12Msg2'] = true;
    }

    if( message != null ){
        showingMessage = true;
        showMessage();
        return true;
    }
    return false;

}

//Check for Game over
function checkForGameOverScene12( x, y ){

    return false;

}

//Move character to next screen
function moveToNextScreenScene12( x, y ){
    if( y < 5 ){
        sceneInit = false;
        currentScene = 13;
        return true;
    }
    else if( y > 580 && scene12path2 ){
        sceneInit = false;
        currentScene = 4;
        scene4path2 = true;
        return true;
    }
}

