//Init scene 18 variables
function initScene18(){
    if( !sceneInit ){
        drawBackground( 'game18' );
        charStartX = 842;
        charStartY = 537;
        currentBoyImg = allImagesMap['boyRight1'];
        valuesSet = false;
        sceneInit = true;
        boyHeight = 40;
        boyWidth=40;
        horizontalRunning = false;
        go_left = false;
        mainGameTheme.pause();
        busSound.currentTime = 0;
        busSound.play();
    }
    
}

//Running Bus
var busX, busY, busCount=1.5;
function drawBusScene18(){

    if( !valuesSet ){
        busX = 965, busY = 700, valuesSet = true, charStartX=665, charStartY=353;
    }
    
    if( busY > 250 ){
        busY -= busCount;
    }
    else if( charStartX < 980 ){ 
        console.log('going right');
        busSound.pause();
        go_right = true;
        charStartX += 1.4;
    }
    else if( busY > -300 ){
        currentBoyImg = null;
        if( busSound.paused ){
            busSound.currentTime = 0;
        }
        busSound.play();
        busY -= busCount;
    }
    else{
        console.log( 'game complete' );
        currentBoyImg = null;
        return;
    }
    
    //ctx.drawImage( allImagesMap[ 'boyRight1' ] , charStartX, charStartY, 40, 40);
    ctx.drawImage( allImagesMap[ 'bus3' ] , busX, busY);

}

//Move character to next screen
function moveToNextScreenScene18( x, y ){
    if( busY < -200 ){
        sceneInit = false;
        currentScene = 19;
        return true;
    }
}

