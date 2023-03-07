//Init scene 17 variables
function initScene17(){
    if( !sceneInit ){
        drawBackground( 'game17' );
        charStartX = 842;
        charStartY = 537;
        currentBoyImg = allImagesMap['boyUp1'];
        valuesSet = false;
        sceneInit = true;
        horizontalRunning = false;
    }
    
}


//Running Warden/Faculty
function drawWardenScene17(){
    
}

//Scene 17
function scene17RestrictedAreas( x, y ){

    if( ( y < 115 || x > 900 || x < 79 ) //Boundaries  
        || ( ( x < 824 && x > 108 && y > 144) ) //Garden
        || ( y > 575 && x > 160  )
     ){
        return false;
    }
    return true;

}

//static element
function drawStaticElementsScene17(){

    ctx.drawImage( allImagesMap[ 'shelterImg1' ] , 148, 88);
    ctx.drawImage( allImagesMap[ 'blockImg' ] , 70, 86);
    ctx.drawImage( allImagesMap[ 'shelterImg2' ] , 70, 153, 50, 450);

}

//Message Stops
function drawMessageStopsScene17( x, y ){
    return false;

}

//Check for Game over
function checkForGameOverScene17( x, y ){
    return false;

}

//Move character to next screen
function moveToNextScreenScene17( x, y ){
    if( y > 580 ){
        sceneInit = false;
        currentScene = 12;
        scene12path2 = true;
        return true;
    }
}

