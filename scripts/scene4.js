//Init scene 4 variables
var scene4path2 = false;

function initScene4(){
    if( !sceneInit ){
        mainGameTheme.play();
        drawBackground( 'game4' );
        if( scene4path2 ){
            charStartX = 287;
            charStartY = 29;
            currentBoyImg = allImagesMap['boyDown1'];
        }
        else{
            charStartX = 233;
            charStartY = 580;
            // if( tractorTheme.paused &&  ){
            //     tractorTheme.currentTime=0;
            //     tractorTheme.play();
            // }
        }
        
        valuesSet = false;
        wardenInit();
        sceneInit = true;
        //currentBoyImg = 'boyRight1';
    }
    
}

function wardenInit(){
    wardenX = 302, wardenY = 0;
}

//Running Warden/Faculty
function drawWardenScene4(){
    // alert( messagesDrawn['Scene4Warden1']+'00'+scene4path2 );
    if( !messagesDrawn['Scene4Warden1'] ){
        return;
    }

    if( scene4path2 ){
        return;
    }

    if( !valuesSet ){
        console.log('value set');
        wardenCount=0, wardenX = 302, wardenY = 0, wardenIncCount = 20, wardenImgType = 'trDown', valuesSet = true;
        mainGameTheme.pause();
        tractorTheme.currentTime = 0;
        tractorTheme.play();
    }
    wardenCount += .1;
    wardenCount = wardenCount > 100 ? 0 : wardenCount;
    let wardenStyle;

    wardenStyle = getWardenStyle( wardenCount*5 );

    if( wardenY < charStartY ){
        wardenY += wardenIncCount;
    }
    if( wardenY > charStartY ){
        wardenY -= wardenIncCount;
    }

    if( wardenX < charStartX ){
        wardenX += wardenIncCount;
    }
    if( wardenX > charStartX ){
        wardenX -= wardenIncCount;
    }
    wardenIncCount = 1.3;

    console.log( wardenImgType+wardenStyle )
    ctx.drawImage( allImagesMap[ wardenImgType+wardenStyle ] , wardenX, wardenY, 60, 60);
    
}

//Scene 4
function scene4RestrictedAreas( x, y ){
    console.log( x, y );

    if( ( x < 210 && y > 309 ) //Left Bottom garden
        || ( x < 215 && y < 160 ) //Left Upper garden
        || ( x > 370 && y < 172 ) //Main building top
        || ( x > 370 && y > 280 && y <530 ) //Main building bottom
        || ( x < 10 && !scene4path2 ) //left gate
        || ( x > 700 ) //right threshold 
        || ( scene4path2 && x < 208 && y > 175)//Bus 
        || ( !messagesDrawn['Scene4Warden1'] && y > 580)//Bottom 
         ){
        return false;
    }
    return true;

}

//static element
function drawStaticElementsScene4(){

    if( scene4path2 ){
        ctx.drawImage( allImagesMap[ 'busRight' ] , 48, 193, 160, 60);
        ctx.drawImage( allImagesMap[ 'tcr1' ] , 54, 256, 60, 60);
    }
    

}

//Message Stops
function drawMessageStopsScene4( x, y ){

    if(  y < 140 && !messagesDrawn['Scene4Warden1'] && !scene4path2 && sceneInit){ //Scene4Warden
        message = 'This is Sunil Sir, the Warden of Wardens..';
        message += '\nYou have two options, RUN OR DIE!!!';
        messagesDrawn['Scene4Warden1'] = true;
    }
    if(  y > 68 && !messagesDrawn['Scene4Warden2'] && scene4path2 && sceneInit){ //Scene4Warden
        message = 'Careful!!! Sunil sir is guarding this gate.';
        message += '\nMay be you can use Bus as a cover! Note: "Make less noise"';
        messagesDrawn['Scene4Warden2'] = true;
    }

    if( message != null ){
        showingMessage = true;
        showMessage();
        return true;
    }
    return false;

}

//Check for Game over
function checkForGameOverScene4( x, y ){

    if( sceneInit && y > wardenY-4 && y < wardenY+4 && x > wardenX-4 && x < wardenX+20  ){ //warden spot, covering whole y axes
        console.log('game over1');
        gameOver = true;
        return true;
    }
    else if( sceneInit && scene4path2 && y > 240 ){
        console.log('game over2');
        gameOver = true;
        return true;
    }
    else if( sceneInit && scene4path2 && x < 180 && y > 100 && boyHeight !== 30 ){
        console.log('game over3');
        gameOver = true;
        return true;
    }
    return false;

}

//Move character to next screen
function moveToNextScreenScene4( x, y ){
    if( x > 220 && y > 592 && messagesDrawn['Scene4Warden1'] ){
        sceneInit = false;
        currentScene = 5;
        return true;
    }
    else if( x < 5 ){
        sceneInit = false;
        currentScene = 18;
        return true;
    }
}

