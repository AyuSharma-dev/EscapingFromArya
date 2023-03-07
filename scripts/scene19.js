//Init scene 19 variables
function initScene19(){
    if( !sceneInit ){
        drawBackground( 'gameCompletionScene' );
        busSound.pause();
        if( gameCompleteSound.paused ){
            gameCompleteSound.currentTime = 0;
        }
        gameCompleteSound.play();
        gameCompleted = true;
    }
    currentBoyImg = null;
    
}