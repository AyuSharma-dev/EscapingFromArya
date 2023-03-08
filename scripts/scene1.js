//Init scene 1 variables
function initScene1(){
    if( !sceneInit ){
        drawBackground( 'game1' );
        charStartX = 797;
        charStartY = 553;
        valuesSet = false;
        sceneInit = true;
        go_left=false;
    }
    
}

//Running Warden/Faculty
function drawWardenScene1(){
    if( !valuesSet ){
        wardenCount=0, wardenX = 190, wardenY = 0, wardenIncCount = 7, wardenImgType = 'facDown', valuesSet = true;
    }
    wardenCount += .1;
    wardenCount = wardenCount > 100 ? 0 : wardenCount;
    let wardenStyle = getWardenStyle( wardenY );
    if( wardenY > 370 ){
        wardenIncCount = -1;
        wardenImgType = 'facUp';
    }
    else if( wardenY < 13 ){
        wardenIncCount = 1;
        wardenImgType = 'facDown';
    }
    ctx.drawImage( allImagesMap[ wardenImgType+wardenStyle ] , wardenX, wardenY, 40, 40);
    wardenY += wardenIncCount;
}

//Scene 1
function scene1RestrictedAreas( x, y ){
    //console.log( x, y );

    //Message trigger Watchman, G Hostel, Teacher1

    if( ( x > 252 && x < 1160 && y < 410 ) //Main Building
        || ( x < 746 && y > 465 ) //Ground Bottom
        || ( x > 950 ) //Right Threshold
        || ( y > 560 ) //Bottom Threshold
        || ( x < 186 ) //Left Ground
        || ( x < 240 && y < 283 && y > 159 ) //Bus
        || ( x > 900 && y > 500 ) //Guard
         ){
        return false;
    }
    return true;

}

//static element
function drawStaticElementsScene1(){

    ctx.drawImage( allImagesMap[ 'guard' ] , 920, 519, 40, 40);
    ctx.drawImage( allImagesMap[ 'bus' ] , 220, 156, 40, 120);

}

//Message Stops
function drawMessageStopsScene1( x, y ){
    if( !sceneInit ){
        return;
    }

    if( x > 890 && y > 500  && !messagesDrawn['Scene1Guard1']){
        message = 'Guard: Stop roaming around and go to your class';
        message += '\nAyush: Okay sir!';
        messagesDrawn['Scene1Guard1'] = true;
    }
    else if( x > 881 && y < 420 && !messagesDrawn['Scene1GH1']){
        message = 'Whoaa! Stop there, this is Girl hostel on Right.';
        message += '\nBoys are not allowed here.';
        messagesDrawn['Scene1GH1'] = true;
    }
    else if( x < 295 && y > 400 && !messagesDrawn['Scene1Warden1'] ){
        message = 'Beware a faculty is on watch.';
        message += '\nYou can use bus as a Cover, Press "C" to make less noise.';
        messagesDrawn['Scene1Warden1'] = true;
    }

    if( message != null ){
        showingMessage = true;
        showMessage();
        return true;
    }
    return false;

}

function checkForGameOverScene1( x, y ){

    if( sceneInit && (x < wardenX+80 && x > wardenX-80) && (y < wardenY+80 && y > wardenY-80)  ){ //Warden Spot
        if( x > 235 && y > 159 && y < 269 && boyHeight == 30 ){ //Character is behind the bus.
            return false;
        }
        gameOver = true;
        return true;
    }
    return false;

}

function moveToNextScreenScene1( x, y ){
    if( x > 190 && y < 0 ){
        sceneInit = false;
        currentScene = 2;
        return true;
    }
}

